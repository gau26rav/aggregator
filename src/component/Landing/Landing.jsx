import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import empImg from './img/human-resources-png-4.png';
import maldives from './img/maldives_tropics_ocean_86174_2048x1152.jpg';
import raspberry from './img/raspberries_blueberries_94014_1920x1200.jpg';
import ArtImg from './img/Art.jpg'
import './styles/landing.css'
import { useTranslation, Trans } from "react-i18next";

function Landing() {
    const { t } = useTranslation();
    const printCaption = (event) => {
        console.log(event.target);
    }

    return (
        <div>
            <h1> Landing page</h1>
            <div>
                <Link to="/employee">
                    <div className="inner-container">
                        <h3 onClick={printCaption}><Trans>Employee</Trans></h3>
                        <img src={empImg} alt="alternative text" />
                        <p></p>
                    </div>
                </Link>
                <Link to="/arts">
                    <div className="inner-container">
                        <h3 onClick={printCaption} >{t("Explore Arts")}</h3>
                        <img src={ArtImg} alt="Arts" />
                        <p>Are you creative enough?</p>
                    </div>
                </Link>
                <Link to="/travel">
                    <div className="inner-container">
                        <h3 onClick={printCaption} >
                            <Trans i18nKey="Luxury Resorts" >Luxury Resorts</Trans></h3>
                        <img src={maldives} alt="luxury" />
                        <p>Visit the resort with </p>
                    </div>
                </Link>
                <NavLink to="/food">
                    <div className="inner-container">
                        <h3 onClick={printCaption}>Hungry kya?</h3>
                        <img src={raspberry} alt="Raspberries" />
                        <p></p>
                    </div>
                </NavLink>
            </div>
        </div >
    )
}

export default Landing;
