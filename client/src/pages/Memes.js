import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import MemesCollection from '../components/memes-collection';

class Memes extends Component {
    state = { 
        username: ''
     }
    render() { 
        return ( 
            <div>
                <NavBar signout={this.props.signout}/>
                <MemesCollection username={this.props.username} />
            </div>
         );
    }
}
 
export default Memes;