import './Home.css';
import React from 'react';

import profile1 from './Profile Photos/profile1.png';
import profile2 from './Profile Photos/profile2.jpg';

import slide1 from './Photos/1.png';
import slide2 from './Photos/2.png';
import slide3 from './Photos/3.png';
import slide4 from './Photos/4.png';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style/overrides.css';

const items = [
    {id: 1, slide : slide1},
    {id: 2, slide : slide2},
    {id: 3, slide : slide3},
    {id: 4, slide : slide4},
]
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
                    <Carousel showThumbs = {false} autoPlay = {true} infiniteLoop = {true} showStatus = {false}
                              stopOnHover = {true} interval={4500} useKeyboardArrows = {true}>
                        {items.map(item => 
                            <div key={item.id}>
                                <img class = 'slideImages' src= {item.slide}/>
                            </div>)}
                    </Carousel>
                </div>
                
            </div>
            
        </div>
    );
}

export default Home;