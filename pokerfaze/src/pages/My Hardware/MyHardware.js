import './MyHardware.css';
import React from 'react';
import vid9900 from '../../components/Web Videos/9900.mp4';
import vid3090 from '../../components/Web Videos/3090.mp4'
import vid3700X from '../../components/Web Videos/3700X.mp4'
import vid2070 from '../../components/Web Videos/2070.mp4'

const MyHardware = () => {
    return (
        <div className= 'MyHardwareContainer'>
            <section className = 'MyHardwarePart'>
                <video className = 'MyHadwareBg' autoPlay loop muted
                    src = {vid9900} type = 'video/mp4'
                ></video>
                
            </section>

            <section className= 'MyHardwarePart'>
                <video className = 'MyHadwareBg' autoPlay loop muted
                    src = {vid3090} type = 'video/mp4'
                ></video>
            </section>

            <section className = 'MyHardwarePart'>
                <video className = 'MyHadwareBg' autoPlay loop muted
                    src = {vid3700X} type = 'video/mp4'
                ></video>
            </section>
            
            <section className= 'MyHardwarePart'>
                <video className = 'MyHadwareBg' autoPlay loop muted
                    src = {vid2070} type = 'video/mp4'
                ></video>
            </section>
        </div>
    );
}

export default MyHardware;