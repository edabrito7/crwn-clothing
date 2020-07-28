import React, { Component } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth,createUserProfileDocument} from '../../firebase/firebase-utils';
import './sign-up.styles.scss'; 




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

        const {displayName,email,password,confirmPassword} = this.state;

        if(password!==confirmPassword){
            alert("password dont match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})

            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        } catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h1>I do not have a account?</h1>
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

            </div>
        )
    }
}


export default SignUp;