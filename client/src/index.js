import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';


// mdbootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Route path='/' render={Home} />
            <Route exact path='/signin' render={Signin} />
            <Route exact path='/signup' render={Signup} />
            <Route component= {() => <h1>Page not found,</h1>} />
        </React.Fragment>
    </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
