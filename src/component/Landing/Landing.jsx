import React from 'react'
import { Link } from 'react-router-dom';
import empImg from './img/human-resources-png-4.png';
import maldives from './img/maldives_tropics_ocean_86174_2048x1152.jpg';
import raspberry from './img/raspberries_blueberries_94014_1920x1200.jpg';
import travelImg from './img/travel.jpg';
import './styles/landing.css'

function Landing() {
    return (
        <div>
            <h1> Landing page</h1>

            <div>
                <Link to="/animals">
                    <div className="inner-container">
                        <h3>Employee</h3>
                        <img src={empImg} alt="alternative text" />
                        <p></p>
                    </div>
                </Link>
                <Link to="/arts">
                    <div className="inner-container">
                        <h3>Travel Freely</h3>
                        <img src={travelImg} alt="alternative text" />
                        <p></p>
                    </div>
                </Link>
                <Link to="/travel">
                    <div className="inner-container">
                        <h3>Luxury Resorts</h3>
                        <img src={maldives} alt="alternative text" />
                        <p>Visit the resort with </p>
                    </div>
                </Link>

                <div className="inner-container">
                    <h3>Hungry kya?</h3>
                    <img src={raspberry} alt="Raspberries" />
                    <p></p>
                </div>
            </div>
        </div >
    )
}

export default Landing;
