import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import MemesCollection from '../components/memes-collection';

import API from '../API'


class Memes extends Component {
    state = { 
        username: '', 
        memes: [],
        myMemes: []
     }

    //  componentDidMount() {
    //     if (!this.props.username) {
    //         this.props.history.push('/signin')
    //       } else {
    //         API.getMemes()
    //           .then(data => {
    //             if (data.error) {
    //               alert(data.error)
    //             } else {
    //               this.setState({ memes: data })
    //             }
    //           })
    //       }
    // }

    getMemesFromApi = () => {
        return fetch('https://api.imgflip.com/get_memes')
        .then(resp => resp.json())
        .then(data => this.setState({memes: data.data.memes}))
    
    }

    componentDidMount() {
        this.getMemesFromApi()
    }

    render() { 
        return ( 
            <div>
                <NavBar signout={this.props.signout}/>
                <MemesCollection 
                    username={this.state.username}
                    memes={this.state.memes} 
                />
            </div>
         );
    }
}
 
export default Memes;