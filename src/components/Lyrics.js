import React, { Component } from 'react'
import axios from 'axios'


 class Lyrics extends Component {
     state={
         lyrics:{}
     };

     componentDidMount(){
        axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MMATCH_KEY}`)
        .then(res=>{
            console.log(res.data);
            this.setState({lyrics:res.data.message.body.lyrics});
        })
        .catch(err=>console.log(err));
     }
    render() {

      const {lyrics_body}=this.state.lyrics;
        return (
            <div className="card mt-4">
               <p>{lyrics_body}</p>
            </div>
        )
    }
}
export default Lyrics