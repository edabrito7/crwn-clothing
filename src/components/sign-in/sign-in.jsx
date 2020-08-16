import React, { useState } from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'; 

import {googleSignInStart, emailSignInStart} from '../../redux/users/user-action';
import {SignInContainer, ButtomContainer, TitleStyles} from './sign-in.styles';



const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials ] = useState({email: '', password: ''})
    
    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);

    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

   
        
        return (
            <SignInContainer>
                <TitleStyles>I already have an account?</TitleStyles>
                <span>Sign in with yout email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name='email'
                    label='email' 
                    type='email' 
                    value={email} 
                    required 
                    handleChange={handleChange}
                    />
                    <FormInput 
                    name='password' 
                    label='password' 
                    type='password' 
                    value={password} 
                    required
                    handleChange={handleChange}  
                    />
                    <ButtomContainer>
                        <CustomButton type='submit' value='submit form'>
                        Sign In
                        </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isSignInwithGoogle>  
                        Sign In with Google
                        </CustomButton>
                    </ButtomContainer>
                    
                </form>
            </SignInContainer>
        )
    
}

export const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);