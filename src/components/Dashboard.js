import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                welcome to your dashboard {this.props.user.displayName}
            </div>
        )
    }
}

export default Dashboard
