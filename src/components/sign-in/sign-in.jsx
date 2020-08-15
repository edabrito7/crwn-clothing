import React, { Component } from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'; 

import {googleSignInStart, emailSignInStart} from '../../redux/users/user-action';
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
        const {emailSignInStart} = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {googleSignInStart} = this.props;
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
                        <CustomButton type='button' onClick={googleSignInStart} isSignInwithGoogle>  
                        Sign In with Google
                        </CustomButton>
                    </ButtomContainer>
                    
                </form>
            </SignInContainer>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);