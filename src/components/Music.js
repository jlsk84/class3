import React, { Component } from "react";
import Search from "../util/Search";
import Artist from "../util/Artist";
import axios from "axios";

const API_URI = "https://spotify-api-wrapper.appspot.com";

class Music extends Component{

    constructor(props){
        super(props);
        this.state = {
            artistData: ""
        }
        this.search = this.search.bind(this);
    }

    search(data){
        console.log('artist-name =', data);
        /* api logic to fetch data from api */
        axios.get(`${API_URI}/artist/${data}`)
            .then(res => {
                /* on fulfilled use case   */
                console.log("output = ", res);
                //if (res.status === 200){ /* successfully receiving data and status is sent in response */
                    if (res.data.artists.items.length > 0){
                        let artist = res.data.artists.items[0];
                        this.setState({
                            artistData : artist
                        })
                    }
                //}
            })
            .catch(err=>{
                console.log(err.message);
            });
    }

    render(){
        return(
            <div className="container">
                 <div className="row">
                    <div className="col-md-12">
                        <h3 className="display-3 text-center">Music</h3>
                    </div>
                </div>
                <Search search={this.search}/>
                <Artist artist={this.state.artistData}/>
            </div>
        )
    }
}

export default Music;