import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shoppage/shopPage';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'; 
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/users/user-action';
import './App.css';

class  App extends Component {


  unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

        
        
      } else {
        setCurrentUser(userAuth);
      }
      
      
    })

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUpPage} />
        </Switch>  
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(App);
