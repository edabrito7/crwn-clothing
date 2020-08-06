import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shoppage/shopPage';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/header';
import ScrollToTop from './components/scroll-to-top/scrolltop';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'; 
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/users/user-action';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/users/user-selectors';
import './App.css';



class  App extends Component {


  unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser } = this.props;
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
        <ScrollToTop>
        <Header />
        <Switch>
          {window.scrollTo(0, 0)}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInandSignUpPage/>)} />
          <Route  exact path='/checkout' component={CheckoutPage} />
        </Switch> 
        </ScrollToTop> 
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
