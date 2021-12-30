import React from 'react';
import hello from '../assets/icons/hello.png';

function Landing() {

    return(
        <div className='container'>
            <h1>Landing</h1>
            <img src={hello} alt="hello" />
        </div>
    )
}

export default Landing;