import React, { useState } from 'react'
import './Login.css'
import { auth } from '../firebase'
import { Link, useHistory } from "react-router-dom";

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        //Stop the page from refreshing
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e => {
        //Stop the page from refreshing
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
           
        if (auth) {
            history.push('/');
        }})
        .catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__title">Sign In</h2>

                <form className="login__form">
                    <h5 className="login__label">E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5 className="login__label">Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <div className="login__buttons">
                        <button type="submit" onClick={signIn} className='login__button'>Log In</button>
                        <button onClick={register} className='login__button'>Create Account</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
