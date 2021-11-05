import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style/overrides.css';

import slide1 from './Photos/1.png';
import slide2 from './Photos/2.png';
import slide3 from './Photos/3.png';
import slide4 from './Photos/4.png';

const items = [
    {id: 1, slide : slide1},
    {id: 2, slide : slide2},
    {id: 3, slide : slide3},
    {id: 4, slide : slide4},
]

const Slideshow = () => {
    return (
        <Carousel showThumbs = {false} autoPlay = {true} infiniteLoop = {true} showStatus = {false}
                              stopOnHover = {true} interval={4500} useKeyboardArrows = {true}>
                        {items.map(item => 
                            <div key={item.id}>
                                <img className = 'slideImages' src= {item.slide} alt = ''/>
                            </div>)}
        </Carousel>
    );
}

export default Slideshow;