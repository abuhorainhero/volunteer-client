import React from 'react';
import { Link } from 'react-router-dom';
import "./Volunteer.css";

const Volunteer = (props) => {
    const { id, title, image } = props.volunteer;

    return (
            <Link to={`/volunteer/${title}`} className=" col-md-3 mt-5" >
                <img style={{maxWidth: '100%', maxHeight: '100%'}} src={image} alt=""/>
                <h4 id='title'>{title}</h4>
            </Link>
    );
};

export default Volunteer;