import axios from "axios";
import React, { Component } from "react";

const API_URI = "https://spotify-api-wrapper.appspot.com";

const msToSec = function(s){
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let sec = s % 60;
    s = (s - sec) / 60;
    let min = s % 60;
    let hrs = (s - min) / 60;
    return `${hrs}h: ${min}m: ${sec}s`;
}

class Tracks extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            tracks : [],
            playing: false,
            audio : null,
            playPreviewUrl: null
        };
        this.playAudio = this.playAudio.bind(this);
    }

    // react lifecycle hook method
    componentDidMount(){
        axios.get(`${API_URI}/artist/${this.state.id}/top-tracks`)
        .then(res=>{
            console.log("tracks = ", res);
            if (res.status === 200){
                this.setState({
                    tracks : res.data.tracks
                });
            }
        })
        .catch(err => console.log(err));
    }

    playAudio = (url) => {
        const audio = new Audio(url);
        if (!this.state.playing){
            audio.play();
            this.setState({playing: true, audio, playPreviewUrl: url});
        } else {
            this.state.audio.pause();
            if (this.state.playPreviewUrl === url){
                this.setState({playing: false});
            } else{
                audio.play();
                this.setState({audio, playPreviewUrl: url});
            }
        }
    }

    /* track Icon */
    trackIcon = (url) => {
        if (!url){
            return <span className="text-danger">No track</span>;
        }
        if (this.state.playing && this.state.playPreviewUrl === url ){
            return <button className="btn btn-sm btn-info">Pause</button>;
        }
        return <button className="btn btn-sm btn-success">Play</button>;
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3">Tracks</h3>
                        <p className="text-muted">{this.state.id}</p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.tracks.map((item,key) =>{
                            // we can deconstruct elements out of item and use them instead of item, example 
                            // album instead of item.album and
                            // name instead of item.name
                            const {album, name, preview_url} = item;
                            return(
                                <div className="col-md-4 mb-2 mt-2" key={key}>
                                    <div className="card" 
                                    onClick={this.playAudio.bind(this,preview_url)} style={{cursor: 'pointer'}} >
                                        <img src={album.images[0].url} alt={name} className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="text-center text-success">{name}</h5>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <strong>Duration</strong>
                                                    <span className="float-end">
                                                        { item.duration_ms } {msToSec(item.duration_ms)}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            { this.trackIcon(preview_url)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Tracks;