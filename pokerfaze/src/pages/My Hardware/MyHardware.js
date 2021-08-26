import './MyHardware.css';
import React from 'react';
import BackgroundVideo from '../../components/Background Video/Background Video';
import vid9900 from '../../components/Web Videos/9900.mp4';
import vid3090 from '../../components/Web Videos/3090.mp4'
import vid3700X from '../../components/Web Videos/3700X.mp4'
import vid2070 from '../../components/Web Videos/2070.mp4'

const MyHardware = () => {
    return (
        <div className= 'MyHardwareContainer'>
            <section className = 'MyHardwarePart'>
                
                <BackgroundVideo videoSource = {vid9900}>
                    <div className = 'DescriptionContainer'>
                        <h1 className = 'Description'>
                            My main gaming and editing machine is powered by an Intel i9-9900k.<br/>
                            Because this thing can run very hot, the CPU has been delidded for direct-die cooling.
                        </h1>
                    </div>
                </BackgroundVideo>
                
            </section>

            <section className= 'MyHardwarePart'>
                <BackgroundVideo videoSource = {vid3090}>

                </BackgroundVideo>
            </section>

            <section className = 'MyHardwarePart'>
                <BackgroundVideo videoSource = {vid3700X}>

                </BackgroundVideo>
            </section>
            
            <section className= 'MyHardwarePart'>
                <BackgroundVideo videoSource = {vid2070}>

                </BackgroundVideo>
            </section>
        </div>
    );
}

export default MyHardware;