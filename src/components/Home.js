import React, { Component } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

export class Home extends Component {

    state = {
        signedIn: false,
        showSignUp: true,
        showSignIn: false,
        user: {}
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

    login = (e, email, password) => {
        e.preventDefault();
        this.props.firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(data => {
                this.setState({ signedIn: true, user: data.user, showSignIn: false, showSignUp: false });
                console.log(data.user);
            });
    }

    render() {
        return (
            <div>
                <h2>welcome home</h2>
    
                    {this.state.showSignUp && <SignUp showSignIn={this.showSignIn} firebase={this.props.firebase} />}
                    {this.state.showSignIn && <SignIn showSignUp={this.showSignUp} firebase={this.props.firebase} login={this.login} />}
                
                {this.state.signedIn && 
                    <div>
                        <p>{`hi there ${this.state.user.displayName}, you're logged in!`}</p>
                        <Dashboard user={this.state.user} />
                    </div>
                }
            </div>
        )
    }
}

export default Home
