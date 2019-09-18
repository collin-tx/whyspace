import React from 'react';

const SignIn = (props) => {
    return (
        <div className="form-container sign-in-container">
            <form>
                <h2>Sign In</h2>
                <button onClick={props.showSignUp}>or sign up</button>
                <div className="row">
                    <p>email: </p>
                    <input type="email" placeholder="Email" />
                </div>

                <div className="row">
                    <p>password: </p>
                    <input type="password" placeholder="Password" />
                </div>
                
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
