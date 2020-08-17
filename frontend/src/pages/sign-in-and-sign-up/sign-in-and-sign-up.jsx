import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { SignInAndUpContainer } from './sign-in-and-up.styles';


const SignInandSignUpPage = () => {
    return (
        <SignInAndUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndUpContainer>
    )
}


export default SignInandSignUpPage;