import React from 'react'
import { Route, Link } from 'react-router-dom'
import Hike from './Hike';
import Beaches from './Beaches';
import BackBtn from '../Back/BackBtn';

function Travel(props) {
    return (
        <div id="travel-container">
            <BackBtn/>
            <h1>Travel Container</h1>
            <Link to="/travel/hike">Hike</Link>
            <Link to="/travel/beaches">Beaches</Link>
            <div>
                <video controls src="https://storage.googleapis.com/media-session/caminandes/short.mp4#t=101"></video>
            </div>
            <div>
                <Route exact path="/travel/hike" component={Hike} />
                <Route exact path="/travel/beaches" component={Beaches} />
            </div>
        </div>
    )
}

export default Travel;
