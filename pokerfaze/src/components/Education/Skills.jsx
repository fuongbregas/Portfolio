import './Skills.css';
import React, {useState, useEffect} from 'react';

const Education = ({title, description}) => {
    const [description_array, setDescription] = useState([]);

    useEffect(() => {
        const checkDescription = (description) => {
            var text_array = description.split(/\r?\n/);
            //console.log(text_array);
            setDescription(text_array);
        }

        checkDescription(description);
    }, [description]);

    return (
        <div className = 'skill'>
            <div className = 'title'>{title}</div>
            {description_array.map (each_description => (
                <div className = 'description' key = {title+each_description}>
                    <p className = 'description_text'>{each_description}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;