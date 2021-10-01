import './Home.css';
import React, {useState} from 'react';

import profile1 from './Profile Photos/profile1.png';
import profile2 from './Profile Photos/profile2.jpg';
import Slideshow from '../../components/Slideshow/Slideshow';

const hover = () => (e) => {
    e.preventDefault();
    e.currentTarget.src = profile2;
}

const unhover = () => (e) => {
    e.preventDefault();
    e.currentTarget.src = profile1;
}

const Home = () => {
    return (
        <div className="home">
            <div className = "homeWrapper">
                <div className = "picture">
                    <img className = 'profilePic' src = {profile1} alt = '' onMouseOver={hover(this)} onMouseOut={unhover(this)}/>
                </div>
                <div className = "aboutMe">
                    <h1>My name is Phuong Tran<br/></h1>
                    <span>
                        ★ Full Stack Developer ★<br/>
                        ♚ Content Creator ♚<br/>
                        ☠ Gamer ☠<br/>
                    </span>
                    <p>
                        I got my BS degree of Computer Science in 2018 at San Jose State University.<br/>
                        I am currently pursuing my MS degree in Software Engineering at San Jose State, again.<br/>
                    </p>
                </div>
                <div>
                    <Slideshow/>
                </div>
                
            </div>
            
        </div>
    );
}

export default Home;