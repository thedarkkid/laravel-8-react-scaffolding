import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../components/pages/About';
import React from 'react';
import Login from '../components/pages/auth/Login';

export default function RoutesProvider ({ home }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="about" element={<About/>}/>
                    <Route path="login" element={<Login />} />
                    <Route index element={home}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
