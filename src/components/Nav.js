import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <Link to="/" className="p-1">home</Link>
                <Link to="/explore">explore</Link>
            </div>
        )
    }
}

export default Nav
