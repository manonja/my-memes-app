import React, { Component } from 'react';

import Meme from '../components/Meme'

import NavBar from '../components/NavBar'

class Dashboard extends Component {
  
    render() { 
        const {myMemes} = this.props
        const meme = myMemes.map(meme => (
        <Meme 
            key={meme.id} 
            meme={meme}
            // handleClick={this.props.handleClick}
        />))
   
        return (
            <div>
                <NavBar/>
                <h1>My memes</h1>
                <div className= 'memeCollection'> {meme} </div>
                
            </div> 
         );
    }
}
 
export default Dashboard;

