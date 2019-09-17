import React from 'react'
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header id="app-header">
            <div id="title-showcase" className="text-center">
                <h1 id="app-title"><FontAwesomeIcon icon={faUsers} className="users-icon" />whyspace.</h1>
            </div>
            <Nav />
        </header>
    )
}
