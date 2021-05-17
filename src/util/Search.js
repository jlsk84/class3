import React, { Component } from "react";

class Search extends Component {

    /*
    We need to do function bindings when submitting form
    and use a constructor for doing the function binding
    */
    constructor(props){
        super(props);
        this.state  = {
            artist : ''
        };
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    onChangeArtist(e){
        this.setState({
            artist: e.target.value
        });
    }

    /* e refers to event    */
    submitHandler(e){
        e.preventDefault();
        console.log('search', this.state.artist);
        this.props.search(this.state.artist);
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-text"> Artist/Album Name
                                        </span>
                                        <input type="text" value={this.state.artist} 
                                        onChange={this.onChangeArtist} className="form-control" required></input>
                                        <button type="submit" className="btn btn-outline-success">  <i className="bi bi-search"></i> Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Search;