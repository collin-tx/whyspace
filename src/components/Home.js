import React, { Component } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn';

export class Home extends Component {

    state = {
        signedIn: false,
        showSignUp: true,
        showSignIn: false
    }

    showSignIn = () => {
        this.setState({ 
            showSignUp: false,
            showSignIn: true
          });
    }

    showSignUp = () => {
        this.setState({
            showSignIn: false,
            showSignUp: true
        })
    }

    render() {
        return (
            <div>
                <h2>welcome home</h2>
                { this.state.showSignUp && <SignUp showSignIn={this.showSignIn} /> }
                { this.state.showSignIn && <SignIn showSignUp={this.showSignUp} /> }

            </div>
        )
    }
}

export default Home
