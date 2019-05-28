import React, {Component} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Memes from './pages/Memes';
import API from './API';


class App extends Component {
  state = {
    username: ''
  }

  signin = (username) => {
    this.setState({username})
  }

  signup = (username) => {
    this.setState({username})
  }

  signout = () => {
    this.setState({username: ''})
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  componentDidMount() {
    API.validate()
      .then(data => {
        if (data.error){
          this.props.history.push('/')
        }
        else {
          this.signin(data.username)
        }
      })
  }

  // signin = (username, token) => {
  //   localStorage.setItem('token', token)
  //   this.setState({ username}, () => {
  //     // go to the user page with its memes
  //   console.log(this.state)
      
  //   })
  // }
  render() {
    const {username} = this.state
    const {signin, signup, signout} = this
    return (
      <div className="App">
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={props => <Signin {...props} signin={signin}/>} />
            <Route path='/signup' component={props => <Signup {...props} signup={signup}/>} />
            <Route exact path='/memes' component={props => <Memes {...props} username={username} signout={signout}/>}  />
            <Route component={() => <h1>Page not found.</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default withRouter(App);
