import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Calendar from './components/calendar/calendarPage';
import Login from './components/login/login';
import Registration from './components/registration/registration';
import { UserContext } from './misc/context';
import { UserType } from './misc/miscTypes';
import axios from 'axios';
import './App.css';

export default function App() {

    axios.defaults.withCredentials = true
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'x-csrftoken'
    
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    const [user, setUser] = useState<UserType>({
        username: (username) ? username: '',
        isLoggedIn: (token) ? true: false,
        token: (token) ? token: '',
    })

    return (
        <React.Fragment>
            <UserContext.Provider value={{ user, setUser}}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/calendar' element={ <Calendar /> } />
                    <Route path='/profile' element={ <Profile /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/registration' element={ <Registration /> } />
                </Routes>
            </Router>
            </UserContext.Provider>
        </React.Fragment>
    )
}