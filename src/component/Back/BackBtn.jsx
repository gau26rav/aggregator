import React from 'react'
import bkImg from './back.png';
import './back.css';

function BackBtn() {
    const goBack = () => {
        window.history.go(-1);
    }

    return (
        <div className="back"  onClick={goBack} >
            <img className="backImg" src={bkImg}alt="back" />
        </div>
    )
}

export default BackBtn;
