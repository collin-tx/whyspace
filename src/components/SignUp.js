import React from 'react';

export class SignUp extends React.Component {
    
    state = {
        displayName: '',
        email: '',
        password: ''
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
        console.log(this.props.firebase); //getting error that firebase.auth is not a function *eyeroll*
        // this.props.firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(user => {
        //         console.log(user);
        //     })
    }
    
    render(){
        return (
            <div className="form-container sign-up-container">
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
            </div>
    );
    }
}

export default SignUp;
