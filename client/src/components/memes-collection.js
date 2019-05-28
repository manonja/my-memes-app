import React, {Component} from 'react';

import API from '../API'

class MemesCollection extends Component {
    state = {
        memes: []
    }

    componentDidMount() {
        if (!this.props.username) {
            this.props.history.push('/signin')
          } else {
            API.getInventory()
              .then(data => {
                if (data.error) {
                  alert(data.error)
                } else {
                  this.setState({ items: data })
                }
              })
          }
    }

    getMemes = () => {
        return fetch('https://api.imgflip.com/get_memes')
        .then(resp => resp.json())
        .then(data => this.setState({memes: data.data.memes}))
    
    }

    componentDidMount() {
        this.getMemes()
    }
    render() { 
        return ( 
            <h1>my memes</h1>
         );
    }
}
 
export default MemesCollection;