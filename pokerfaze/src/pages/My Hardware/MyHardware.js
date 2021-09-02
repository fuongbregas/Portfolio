import './MyHardware.css';
import React from 'react';
import * as Scroll from 'react-scroll';
import BackgroundVideo from '../../components/Background Video/Background Video';
import vid9900 from '../../components/Web Videos/9900.mp4';
import vid3090 from '../../components/Web Videos/3090.mp4'
import vid3700X from '../../components/Web Videos/3700X.mp4'
import vid2070 from '../../components/Web Videos/2070.mp4'

var Button = Scroll.Button;

const MyHardware = () => {
    return (
        <div className= 'MyHardwareContainer'>
            <div>
                <section name = 'A' className = 'MyHardwarePart'>
                    <div className = 'MyHardwareWarapper'>
                        <BackgroundVideo videoSource = {vid9900}>
                            <div className = 'DescriptionContainer'>
                                <h1 className = 'Description'>
                                    My main gaming and editing machine is powered by an Intel i9-9900k.<br/>
                                    Because this thing can run very hot, the CPU has been delidded for direct-die cooling.
                                </h1>
                            </div>
                        </BackgroundVideo>
                    </div>
                    
                    
                </section>

                <section name = 'B' className= 'MyHardwarePart'>
                    <div className = 'MyHardwareWarapper'>
                        <BackgroundVideo videoSource = {vid3090}>
                            <div className = 'DescriptionContainer'>
                                <h1 className = 'Description'>
                                    I edit videos a lot so I need a good graphic card.<br/>
                                    With 24GB VRAM, the Asus TUF RTX 3090 is the perfect for the job. And game.
                                </h1>
                            </div>
                        </BackgroundVideo>
                    </div>
                    
                </section>

                <section name = 'C' className = 'MyHardwarePart'>
                    <div className = 'MyHardwareWarapper'>
                        <BackgroundVideo videoSource = {vid3700X}>
                            <div className = 'DescriptionContainer'>
                                <h1 className = 'Description'>
                                    I used a Ryzen 7 3700X for building SFFPCs due to its low TDP.<br/>
                                    However, it isn't so good in gaming so I'm looking for something better in the future.
                                </h1>
                            </div>
                        </BackgroundVideo>
                    </div>
                </section>
                
                <section name = 'D' className= 'MyHardwarePart'>
                    <div className = 'MyHardwareWarapper'>
                            <BackgroundVideo videoSource = {vid2070}>
                                <div className = 'DescriptionContainer'>
                                    <h1 className = 'Description'>
                                        For SFF PCs, the rare Gigabyte RTX 2070 mini is a dream card.<br/>
                                        I wish NVIDIA will bring back the USB-C port because it can be used with my XG17 portable monitor.
                                    </h1>
                                </div>
                            </BackgroundVideo>
                    </div>
                </section>
            </div>

            <div className = 'ScrollButton'>
                <Button activeClass = 'active' className = 'ScrollIndicator' to = 'A' type = 'submit' value = 'A' smooth = {true} duration = {500}/>
                <Button activeClass = 'active' className = 'ScrollIndicator' to = 'B' type = 'submit' value = 'B' smooth = {true} duration = {500}/>
                <Button activeClass = 'active' className = 'ScrollIndicator' to = 'C' type = 'submit' value = 'C' smooth = {true} duration = {500}/>
                <Button activeClass = 'active' className = 'ScrollIndicator' to = 'D' type = 'submit' value = 'D' smooth = {true} duration = {500}/>
            </div>
        </div>
    );
}

export default MyHardware;