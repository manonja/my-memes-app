import React, {Component} from 'react';

class MemesCollection extends Component {
    state = {
        memes: []
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