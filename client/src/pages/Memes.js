import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import MemesCollection from '../components/memes-collection';
import MemeForm from '../components/Meme-form'

import API from '../API'

const initialState = {
    toptext: "",
    bottomtext: "",
    isTopDragging: false,
    isBottomDragging: false,
    topY: '10%',
    bottomY: '90%',
    topX: '50%',
    bottomX: '90%'
}
class Memes extends Component {
    state = { 
        username: '', 
        memes: [],
        myMemes: [], 
        selectedMeme: null,
        modalIsOpen: false,
        currentImgBase64: null,
        ...initialState
     }

    //  componentDidMount() {
    //     if (!this.props.username) {
    //         this.props.history.push('/signin')
    //       } else {
    //         API.getDashboard()
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


    toggleModal = (selectedMeme) => {
        const image = selectedMeme.url
        const base_image = new Image()
        base_image.src = image
        const base64 = this.getBase64Image(base_image)
        this.setState({
            modalIsOpen: !this.state.modalIsOpen, 
            selectedMeme,
            currentImgBase64: base64
        })

    }

    getBase64Image = (img) => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        debugger
        let dataURL = canvas.toDataURL();
        // debugger
        return dataURL;
    }

    changeText = (event) => {
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value
        });
      }


    renderForm = () => {
        if (this.state.selectedMeme) {
        return <div>
        <MemeForm 
            selectedMeme={this.state.selectedMeme}
            modalIsOpen={this.state.modalIsOpen}
            currentImgBase64={this.state.currentImgBase64}
            changeText={this.changeText}
        /> 
        <MemesCollection 
            username={this.state.username}
            memes={this.state.memes} 
            handleClick={this.toggleModal}
        />
        </div>
        } else {
            return <MemesCollection 
            username={this.state.username}
            memes={this.state.memes} 
            handleClick={this.toggleModal}
        />
        }
    }

    render() { 
        return ( 
            <div>

                <NavBar signout={this.props.signout}/>
                {this.renderForm()}


            </div>
         );
    }
}
 
export default Memes;