import React from 'react'

import {Link} from 'react-router-dom'

const Track = (props) => {
    const {track}=props;
    return (
        <div className="col-md-6">
           <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p>{track.album_name}</p>
                    <h6>{track.track_rating}<span>⏫</span></h6>
                    <Link to={`/lyrics/${track.track_id}`}><i className="fas fa-play"></i></Link>
                </div>
           </div>


        </div>
    )
}

export default Track
