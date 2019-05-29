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
    
    getStateObj = (e, type) => {
        let rect = this.imageRef.getBoundingClientRect();
        const xOffset = e.clientX - rect.left;
        const yOffset = e.clientY - rect.top;
        let stateObj = {};
        if (type === "bottom") {
            stateObj = {
            isBottomDragging: true,
            isTopDragging: false,
            bottomX: `${xOffset}px`,
            bottomY: `${yOffset}px`
            }
        } else if (type === "top") {
            stateObj = {
            isTopDragging: true,
            isBottomDragging: false,
            topX: `${xOffset}px`,
            topY: `${yOffset}px`
            }
        }
        return stateObj;
        }
    
    
    handleMouseDown = (e, type) => {
        const stateObj = this.getStateObj(e, type)
        document.addEventListener('mousemove', (event) => this.handleMouseMove(event, type))
        this.setState({...stateObj})
    }

    handleMouseMove = (e, type) => {
        if (this.state.isTopDragging || this.state.isBottomDragging) {
            let stateObj = {};
            if (type === "bottom" && this.state.isBottomDragging) {
              stateObj = this.getStateObj(e, type);
            } else if (type === "top" && this.state.isTopDragging){
              stateObj = this.getStateObj(e, type);
            }
            this.setState({
              ...stateObj
            });
          }
    }

    handleMouseUp = () => {
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.setState({
          isTopDragging: false,
          isBottomDragging: false
        });
    }

    // svgDataURL = (svg) => {
    //       var svgAsXML = (new XMLSerializer).serializeToString(svg);
    //       return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    //     }

    handleMemeCreation = () => {
        // const {name, url} =  this.props.selectedMeme
        
        // const newMeme = {
        //     name,
        //     url,
        //     meme
        // }

        // console.log(newMeme.svg)
        const svg = this.svgRef;
        let svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        const svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml," + encodeURIComponent(svgData));
        img.onload = function() {
          canvas.getContext("2d").drawImage(img, 0, 0);
          const canvasdata = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.download = "meme.png";
          a.href = canvasdata;
          document.body.appendChild(a);
          a.click();
        };

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
                            width='400'
                            height='400'
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
                                onMouseDown={event => this.handleMouseDown(event, 'top')}
                                onMouseUp={event => this.handleMouseUp(event, 'top')}

                            >
                                {this.state.toptext}
                            </text>
                            <text
                                style={textStyle}
                                x={this.state.bottomX} 
                                y={this.state.bottomY}
                                dominantBaseline='middle'
                                textAnchor='middle'
                                onMouseDown={event => this.handleMouseDown(event, 'bottom')}
                                onMouseUp={event => this.handleMouseUp(event, 'bottom')}   
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
                        <button onClick={this.handleMemeCreation} className="btn btn-outline-black">Create Meme!</button>
                        </div>
                    </ModalBody>
                </Modal>

            </div> 
          
        )
    }
}
 
export default MemeForm;