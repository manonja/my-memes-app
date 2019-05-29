import React, { Component } from 'react';

import { Modal, ModalHeader, ModalBody, FormGroup, Label, NavbarBrand } from 'reactstrap';



class MemeForm extends Component {
    state = {
        toptext: "",
        bottomtext: "",
        isTopDragging: false,
        isBottomDragging: false,
        topY: '10%',
        bottomY: '60%',
        topX: '25%',
        bottomX: '20%'
    }

    changeText = (event) => {
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value
        });
      }

    
    render() { 
        const {modalIsOpen} = this.props
        const {image} = this.props.selectedMeme
        const base_img = new Image()
        base_img.src = image

        const textStyle = {
            fontFamily: "Impact",
            fontSize: "50px",
            textTransform: "uppercase",
            fill: "red",
            stroke: "blue",
            userSelect: "none"
          }
      

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
                            ref={el => {this.imageRef = el}}
                            xlinkHref={this.props.selectedMeme.url}
                            height='400'
                            width='400'
                            />
                            <text
                                style={{...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                                x={this.state.topX} 
                                y={this.state.topY}
                                dominantBaseline='middle'
                                textAnchor='middle'

                            >
                                {this.state.toptext}
                            </text>
                            <text
                                style={textStyle}
                                x={this.state.bottomX} 
                                y={this.state.bottomY}
                                dominantBaseline='middle'
                                textAnchor='middle'
                            >
                                {this.state.bottomtext}
                            </text>
                           
                        </svg>
                        <div className="meme-form">
                        <FormGroup>
                            <Label for="toptext">Top Text</Label>
                            <input className="form-control" type="text" name="toptext" id="toptext" placeholder="Add text to the top" onChange={this.changeText} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="bottomtext">Bottom Text</Label>
                            <input className="form-control" type="text" name="bottomtext" id="bottomtext" placeholder="Add text to the bottom" onChange={this.changeText} />
                        </FormGroup>
                        <button onClick={() => this.convertSvgToImage()} className="btn btn-primary">Create Meme!</button>
                        </div>
                    </ModalBody>
                </Modal>

            </div> 
          
        )
    }
}
 
export default MemeForm;