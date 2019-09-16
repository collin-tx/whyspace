import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/explore">explore</Link>
            </div>
        )
    }
}

export default Nav
