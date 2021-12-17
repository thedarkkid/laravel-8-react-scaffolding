import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import RoutesProvider from './routes/RoutesProvider';
import Home from './components/pages/Home';

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <RoutesProvider home={<Home/>}/>
        </Provider>,
        document.getElementById('app')
    );
}
