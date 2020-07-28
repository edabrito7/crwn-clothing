import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'; 
import { signInWithGoogle, auth } from '../../firebase/firebase-utils';
import './sign-in.styles.scss';



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
            <div className='sign-in'>
                <h1 className='title'>I already have an account?</h1>
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
                    <div className='buttons'>
                        <CustomButton type='submit' value='submit form'>
                        Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isSignInwithGoogle>  
                        Sign In with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}



export default SignIn;