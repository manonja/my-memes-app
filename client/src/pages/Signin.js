import React, { Component } from 'react';

class Signin extends Component {
    state = {  }
    render() { 
        return (  
            // <!-- Default form login -->
            <div>
                  <form className="text-center border border-light p-5">

                    <p className="h4 mb-4">Sign in</p>

                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                                <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>

                    </div>

                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

                    </form>
            </div>
          
        );
    }
}
 
export default Signin;