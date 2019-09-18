import React from 'react';

const SignIn = (props) => {
    return (
        <div className="">
            <h2>Sign In to your account</h2>
            <button onClick={props.showSignUp}>or create a new account</button>
            <form>
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
