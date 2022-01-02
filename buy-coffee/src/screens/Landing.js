import React from 'react';
import hello from '../assets/icons/hello.png';
import welcometext from '../assets/icons/welcometext.png';
import logo from '../assets/icons/logo.png';
import '../style/landing.css';
import { useNavigate } from "react-router-dom";

function Landing() {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/Login');
    }

    return(
        <div className='container'>
            <h1>Landing</h1>
            <div className='subContainer'>
                <div className='textContainer'>
                    <img src={hello} alt="hello" />
                    <img src={welcometext} alt="welcometext" />
                </div>
                <img src={logo} alt="logo" />
            </div>
            <button className="buyCoffee" type="submit" onClick={goToLogin}>Login</button>
        </div>
    )
}

export default Landing;