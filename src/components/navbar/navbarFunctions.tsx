import React from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';

export function userLinksLoggedIn (username: string) {
    return (
        <React.Fragment>
            <div className='greeting' data-cy='greeting'>Hi { username }!</div>
            <Logout />
        </React.Fragment>
    )
}

export function userLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login' data-cy='login-link'>Login</Link>
            <Link to='/registration' data-cy='register-link'>Register</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedIn () {
    return (
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to='/profile' data-cy='user-profile-link'>Profile</Link>
            <Link to='/calendar' data-cy="calendar-link">Calendar</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login'>Home</Link>
            <Link to='/login'>Profile</Link>
            <Link to='/login'>Calendar</Link>
        </React.Fragment>
    )
}