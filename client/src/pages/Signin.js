import React, { Component } from 'react';

class Signin extends Component {
    state = { 
        username: '',
        password: ''
     }

    handleSubmit = () => {
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    render() { 
        return (  
            // <!-- Default form login -->
            <div>
                  <form className="text-center border border-light p-5">

                    <p className="h4 mb-4">Sign in</p>

                    <input name='username' type="username" id="defaultLoginFormEmail" onChange={this.handleChange} value={this.state.username} className="form-control mb-4" placeholder="username" />

                    <input name='password' type="password" id="defaultLoginFormPassword" onChange={this.handleChange} value={this.state.password} className="form-control mb-4" placeholder="Password" />

                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                                <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>

                    </div>

                    <button onClick={this.handleSubmit} className="btn btn-info btn-block my-4" type="submit">Sign in</button>

                    </form>
            </div>
          
        );
    }
}
 
export default Signin;