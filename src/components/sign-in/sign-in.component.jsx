import React from 'react'
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"", password: ''})
        } catch(error){
            console.log(error);
        }

    }

    handleChange = (e) => {
        const {value, name } = e.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name='email' value={this.state.email} handleChange={this.handleChange} label="email" required />
            <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
            <ButtonsBarContainer>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
            </ButtonsBarContainer>
            </form>
            </SignInContainer>
        )
    }
}

export default SignIn;