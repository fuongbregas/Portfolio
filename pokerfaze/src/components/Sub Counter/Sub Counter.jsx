import './Sub Counter.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SubCounter = () => {
    const [subNumberString, setSubNumberString] = useState('');

    useEffect (() => {
        const getSubCount = async () => {
            const URL = 'https://corsanywhere.herokuapp.com/https://www.youtube.com/c/PokerFaceYoutube/about';
            try {
                const response = await axios.get (URL);
                const text = response.data;
                // (?<="subscriberCountText":{"accessibility":{"accessibilityData":{"label":")
                // (this is what we want = 3.26k subscribers) = (.+?)
                // (?="}},"simpleText":")
                const regex = '(?<="subscriberCountText":{"accessibility":{"accessibilityData":{"label":")(.+?)(?="}},"simpleText":")';
                const result = text.match(regex)[0];
                setSubNumberString(result);
            }
            catch (error) {
                console.log(error);
            }
        }
        getSubCount();
    }, [subNumberString]);
    
    return (
        <>
            <h1>{subNumberString}</h1>
        </>
    );
}

export default SubCounter;