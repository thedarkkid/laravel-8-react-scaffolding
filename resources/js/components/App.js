import AppNavbar from './widgets/AppNavbar';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function App ({ isLoggedIn }) {
    return (
        <div className="container">
            {isLoggedIn && <AppNavbar/>}
            <Outlet/>
        </div>
    );
}
