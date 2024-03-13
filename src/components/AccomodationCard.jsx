import React from 'react';
import "../styles/gallery.scss"
import {NavLink} from "react-router-dom";
import "../styles/accomodationcard.scss"

export function  AccomodationCard  (props) {

    return (  
    <NavLink 
    to="/Accomodation" 
    state ={{
        apartmentId: props.id
    }} >
        <div className='appartement'>
            <img src={props.imageUrl} alt="" />
            <div className='appartement-desc'>{props.title}</div>
        </div>
        </NavLink>
    );
};

export default AccomodationCard;