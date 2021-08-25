import './Background Video.css';
import React from 'react';

const BackgroundVideo = ({videoSource, children}) => {
    return (
        <div className="BackgroundVideoContainer">
            <video className = 'MyHadwareBg' autoPlay loop muted >
                <source src={videoSource} type = 'video/mp4'/>
            
            </video>
            {children}
        </div>
    );
}

export default BackgroundVideo;