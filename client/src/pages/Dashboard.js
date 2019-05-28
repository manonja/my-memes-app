import React, { Component } from 'react';

import NavBar from '../components/NavBar'

class Dashboard extends Component {
    state = { 

    }
    render() { 
        return (
            <div>
                <NavBar/>
                <h1>My Dashboard!</h1>
            </div> 
         );
    }
}
 
export default Dashboard;