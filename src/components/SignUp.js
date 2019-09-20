import React from 'react';

export class SignUp extends React.Component {
    
    state = {
        displayName: '',
        email: '',
        password: '',
        accountCreated: false
    }

    handleName = (e) => {
        this.setState({ displayName: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePass = (e) => {
        this.setState({ password: e.target.value })
    }

    createNewAccount = (e) => {
        e.preventDefault();
        this.props.firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                this.setState({ accountCreated: true, user: user.user })
                user.user.updateProfile({
                    displayName: this.state.displayName,
                    photoURL: 'https://i.ibb.co/MkXy4q7/anon.jpg'
                });
                console.log(user);
            });
    }
    
    render(){
        return (
            <div className="form-container sign-up-container">
                
                {this.state.accountCreated && 
                    <div>
                        <h2>Account created!</h2>
                        <button onClick={this.props.showSignIn}>sign in</button>
                    </div>
                }

                {!this.state.accountCreated &&
                    <form onSubmit={this.createNewAccount}>
                        <h2>Create Account</h2>
                        <button onClick={this.props.showSignIn}>or sign in</button>
                        <div className="row">
                            <p>display name: </p>
                            <input type="text" placeholder="Name" 
                                onChange={this.handleName} 
                                value = {this.state.displayName}
                                />
                        </div>
                        <div className="row">
                            <p>email: </p>
                            <input type="email" placeholder="Email"
                                onChange={this.handleEmail}
                                value={this.state.email}
                                />
                        </div>
                        <div className="row">
                            <p>password: </p>
                            <input type="password" placeholder="Password"
                                onChange={this.handlePass}
                                value={this.state.password}
                                />
                        </div>
                        
                        <button type="submit">Sign Up</button>
                    </form>
                }
            </div>
    );
    }
}

export default SignUp;
