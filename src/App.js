import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shoppage/shopPage';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'; 
import './App.css';

class  App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }

  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

        console.log(this.state);
        
      } else {
        this.setState({currentUser: userAuth});
      }
      
      
    })

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUpPage} />
        </Switch>  
      </div>
    );
  }
  
}

export default App;
