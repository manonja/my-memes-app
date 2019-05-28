import React, {Component} from 'react';

class Meme extends Component {

  
    render() { 
        const {name, url} = this.props.meme
        return ( 
        
            <div>
                <h3>{name}</h3>
                <img className="img" src={url} alt={name}/>  
            </div>
         );
    }
}
 
export default Meme;