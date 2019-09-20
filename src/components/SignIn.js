import React from 'react';

export class SignIn extends React.Component {
    
    state = {
        email: '',
        password: '', 
        signedIn: false
    }
    
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePass = (e) => {
        this.setState({ password: e.target.value });
    }

    login = (e) => {
        e.preventDefault();
        this.setState({ signedIn: true });
        this.props.firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => {
                this.setState({ signedIn: true });
                console.log(data.user);
            });
    }
    
    render(){
    return (
        <div className="form-container sign-in-container">
            {!this.state.signedIn &&
                <form onSubmit={this.login}>
                    <h2>Sign In</h2>
                    <button onClick={this.props.showSignUp}>or sign up</button>
                    <div className="row">
                        <p>email: </p>
                        <input type="email" placeholder="Email"
                            onChange={this.handleEmail} value={this.state.email}
                             />
                    </div>

                    <div className="row">
                        <p>password: </p>
                        <input type="password" placeholder="Password" 
                            onChange={this.handlePass} value={this.state.password}
                             />
                    </div>
                    
                    <button>Sign In</button>
                </form>
            }

            {this.state.signedIn &&
                <div>
                    <h2>You are signed in!</h2>
                    <p>go to your <a href="#">homepage</a></p>
                </div>
            }

        </div>
    );
}
}

export default SignIn;
