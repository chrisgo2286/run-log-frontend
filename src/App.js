import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Calendar from './components/calendar/calendar';
import Login from './components/login/login';
import Registration from './components/registration/registration';


export default function App() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}