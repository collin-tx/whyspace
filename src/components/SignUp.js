import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

const SignUp = (props) => {
    return (
            <div className="form-container sign-up-container">
                <form action="#">
                    <h2>Create Account</h2>
                    <button onClick={props.showSignIn}>or sign in</button>
                    <div className="social-container">
                    </div>
                    <div className="row">
                        <p>display name: </p>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="row">
                        <p>email: </p>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="row">
                        <p>password: </p>
                        <input type="password" placeholder="Password" />
                    </div>
                    
                    <button>Sign Up</button>
                </form>
            </div>
    );
}

export default SignUp;
