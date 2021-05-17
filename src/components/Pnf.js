import React, { Component } from "react";
import {Link} from "react-router-dom";

class Pnf extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-danger">Page Not Found</h3>
                        <h4 className="display-4">404 Error</h4>
                        <Link to="/home" className="btn btn-success">Return Home</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Pnf;