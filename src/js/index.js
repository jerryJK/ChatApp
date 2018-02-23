import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import styles from '../css/style.css';


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
});
