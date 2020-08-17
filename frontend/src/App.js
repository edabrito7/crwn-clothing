import React, { useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shoppage/shopPage';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/header';
import ScrollToTop from './components/scroll-to-top/scrolltop';
import { connect } from 'react-redux';
import {checkUserSession} from './redux/users/user-action';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/users/user-selectors';
import {GlobalStyle} from './global.styles'



const App = ({checkUserSession, currentUser}) =>  {

  useEffect( () => {

      checkUserSession();

  }, [checkUserSession])

    return (
      <div >
        <GlobalStyle/>
        <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInandSignUpPage/>)} />
          <Route  exact path='/checkout' component={CheckoutPage} />
        </Switch> 
        </ScrollToTop> 
      </div>
    );
  
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
