import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                welcome to your dashboard {this.props.user.displayName}
                <h2>{this.props.user.displayName}</h2>
                <img className="user-pic" src={this.props.user.photoURL} alt="user pic" />
                <p>logged in to whyspace =D</p>
            </div>
        )
    }
}

export default Dashboard
