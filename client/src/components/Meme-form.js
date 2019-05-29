import React, { Component } from 'react';

import { Modal, ModalHeader, ModalBody, FormGroup, Label, NavbarBrand } from 'reactstrap';



class MemeForm extends Component {
  
    
    
    render() { 
        const {modalIsOpen} = this.props
        const {image} = this.props.selectedMeme.url
        const base_img = new Image()
        base_img.src = image

        return ( 
            <div>
                <Modal className='meme-gen-modal' isOpen={modalIsOpen}>
                    <ModalHeader >Create your meme</ModalHeader>
                    <ModalBody>
                        <svg 
                            id="svg_ref"
                            width='800'
                            height='600'
                            ref={el => { this.svgRef = el }}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <image
                            // ref={el => {this.imageRef = el}}
                            xlinkHref={this.props.currentImgBase64}
                            height='400'
                            width='400'
                            />
                        </svg>
                        <div className="meme-form">
                        <FormGroup>
                            <Label for="toptext">Top Text</Label>
                            <input className="form-control" type="text" name="toptext" id="toptext" placeholder="Add text to the top" onChange={this.props.changeText} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="bottomtext">Bottom Text</Label>
                            <input className="form-control" type="text" name="bottomtext" id="bottomtext" placeholder="Add text to the bottom" onChange={this.props.changeText} />
                        </FormGroup>
                        <button onClick={() => this.convertSvgToImage()} className="btn btn-primary">Download Meme!</button>
                        </div>
                    </ModalBody>
                </Modal>

            </div> 
          
        )
    }
}
 
export default MemeForm;