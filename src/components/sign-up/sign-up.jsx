import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth,createUserProfileDocument} from '../../firebase/firebase-utils';
import { SignUpContainer, Title } from './sign-up.styles';
import {signUpStart} from '../../redux/users/user-action';




class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const {displayName,email,password,confirmPassword} = this.state;

        if(password!==confirmPassword){
            alert("password don't match")
            return
        }
        signUpStart(email,password,displayName)
        
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password)
        //     await createUserProfileDocument(user, {displayName})

        //     this.setState = {
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: '',
        //     }
        // } catch(error){
        //     console.error(error);
        // }
    }

    handleChange = event => {
        const { name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <Title>I do not have a account?</Title>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    label='Full name'
                    value={displayName}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sign-Up</CustomButton>
                </form>

            </SignUpContainer>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    signUpStart: (email,password,displayName) => dispatch(signUpStart({email,password,displayName}))
})



export default connect(null,mapDispatchToProps)(SignUp);