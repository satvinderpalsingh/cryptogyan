import react from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Route } from 'react-router-dom'
import App from './app'

ReactDOM.render( < Route >
        <App/>
        </Route>,document.getElementById('root'));