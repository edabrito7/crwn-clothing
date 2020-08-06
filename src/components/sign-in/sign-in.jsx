import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'; 
import { signInWithGoogle, auth } from '../../firebase/firebase-utils';
import {SignInContainer, ButtomContainer, TitleStyles} from './sign-in.styles';



class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <SignInContainer>
                <TitleStyles>I already have an account?</TitleStyles>
                <span>Sign in with yout email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    label='email' 
                    type='email' 
                    value={this.state.email} 
                    required 
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    name='password' 
                    label='password' 
                    type='password' 
                    value={this.state.password} 
                    required
                    handleChange={this.handleChange}  
                    />
                    <ButtomContainer>
                        <CustomButton type='submit' value='submit form'>
                        Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isSignInwithGoogle>  
                        Sign In with Google
                        </CustomButton>
                    </ButtomContainer>
                    
                </form>
            </SignInContainer>
        )
    }
}



export default SignIn;