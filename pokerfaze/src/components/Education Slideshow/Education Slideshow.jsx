import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style/overrides.css';

import Skills from '../Education/Skills';
import SubCounter from '../Sub Counter/Sub Counter';

const EducationSlide = () => {
    const title1 = 'GameConnect – PC Gaming Social Network – San Jose State University';
    const desc1 = '• Worked with a team of four to create a MERN stack social network web application for PC gamers.\n• Developed Python scripts to collect all of PC game data from Twitch IGDB API and store them in AWS MongoDB.\n• Designed the front-end by using HTML5, CSS3, and React JS to build a web app that communicate with backend via RESTful API.\n• Added a messaging system by utilizing Socket.IO to allow real-time communication between users.\n• Integrated the back-end by using Node JS, Express JS, MongoDB and Mongoose, the complete MERN Stack to provide RESTful API.';

    const title2 = 'Enterprise Distributed Systems Web App – San Jose State University';
    const desc2 = '• Constructed a full stack (GrubHub prototype) web application which demonstrates distributed system designs.\n• Optimized performances with Kafka, SQL caching (Redis), database connection pooling and server partitioning.';

    const title3 = 'PokerFaZeBook – Enterprise Web App – San Jose State University';
    const desc3 = '• Worked in a team of 5 to create an enterprise web application which combined five domains into a cross platform online marketplace.\n• Integrated secure session for user authentication.\n• Implemented web cookies to personalize user experiences.\n• Utilized curl to render top five most visited products. (PHP, HTML5, CSS3, MySQL).';

    const title4 = 'Park Here – Parking Spot Renting App – San Jose State University';
    const desc4 = '• Collaborated in a team of 5 to develop an Android application allowing users to find and list parking space.\n• Integrated session for user registration and authentication.\n• Added Google Map API to find parking spots available in a specific radius\n• Persisted user data to Google Firebase in real time.\n• Created JUnit tests to ensure bug free and application stability. (Android, Google Map API, Google Firebase).';

    const title5 = 'Software Internship – Wainamics Inc., Pleasanton, CA';
    const desc5 = '• Developed Matlab scripts which could convert all draw data from .xlsx files to calculate results and display different graphs based on user’s reference.\n• Optimized script to consume raw data (3 Mbs/file x 500 files) and output crucial analytic result at a large scale.'

    const items = [
        {id: 0, slide : <SubCounter/>},
        {id: 1, slide : <Skills title = {title1} description = {desc1}/>},
        {id: 2, slide : <Skills title = {title2} description = {desc2}/>},
        {id: 3, slide : <Skills title = {title3} description = {desc3}/>},
        {id: 4, slide : <Skills title = {title4} description = {desc4}/>},
        {id: 5, slide : <Skills title = {title5} description = {desc5}/>},
    ]

    return (
        <Carousel showThumbs = {false} autoPlay = {true} infiniteLoop = {true} showStatus = {false}
                              stopOnHover = {true} interval={4500} useKeyboardArrows = {true}>
                        {items.map(item => 
                            <div key={item.id}>
                                {item.slide}
                            </div>)}
        </Carousel>
    );
}

export default EducationSlide;