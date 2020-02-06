import React from 'react'
import { Route, Link } from 'react-router-dom'
import Hike from './Hike';
import Beaches from './Beaches';

function Travel(props) {
    return (
        <div id="travel-container">
            <h1>Travel Container</h1>
            <Link to="/travel/hike">Hike</Link>
            <Link to="/travel/beaches">Beaches</Link>
            <div>
                <Route exact path="/travel/hike" component={Hike} />
                <Route exact path="/travel/beaches" component={Beaches} />
            </div>
        </div>
    )
}

export default Travel;
