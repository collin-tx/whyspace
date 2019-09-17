import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <Link to="/" className="pr-1">home</Link>
                <Link to="/explore">explore</Link>
                <Link to="/about" className="p-1">about</Link>
            </div>
        )
    }
}

export default Nav
