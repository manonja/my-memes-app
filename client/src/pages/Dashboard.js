import React, { Component } from 'react';

import CustomisedMeme from '../components/CustomisedMeme'
import NavBar from '../components/NavBar'


class Dashboard extends Component {

    render() { 
        const {myMemes} = this.props
        // debugger

        const meme = myMemes.map(meme => (
        <CustomisedMeme 
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

