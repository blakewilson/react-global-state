import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';

/**
 * Wrap your <App /> component with the <Store /> component we created in the
 * store.js file.
 */
ReactDOM.render(
    <Store>
        <App />
    </Store>,
    document.getElementById('root'));
