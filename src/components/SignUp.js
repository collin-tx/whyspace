import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <div>
                    email: <input type="text" />
                    password: <input type="password" />
                    confirm password: <input type="password" />
                </div>
            </form>
        </div>
    );
}

export default SignUp;
