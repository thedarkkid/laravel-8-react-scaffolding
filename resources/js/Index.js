import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import About from './components/pages/About';
import Example from './components/Example';

export default function Index () {
    return (
        <div className="container">
            <AppNavbar/>
            <Outlet />
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}>
                        <Route path="about" element={<About/>}/>
                        <Route index element={<Example/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('app')
    );
}
