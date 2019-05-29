import React, { Component } from 'react';
//import { Modal, ModalHeader, ModalBody, FormGroup, Label, NavbarBrand } from 'reactstrap';

class MemeForm extends Component {
    
    render() { 
        return ( <div className='formStyling'>
                <form>
                <label>
                    Box 1:
                <input type="text" name="name" />
                </label>
                <label>
                    Box 2:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Create Meme" />
                </form>
                <img className='img' src={this.props.selectedMeme.url} alt='pic'></img>
            </div> 
        )
    }
}
 
export default MemeForm;