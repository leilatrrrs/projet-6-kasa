import React from 'react';
import "../styles/gallery.scss"
import {NavLink} from "react-router-dom";
import "../styles/accomodationcard.scss"

export function  AccomodationCard  () {
    return (
        <div className='appartement'>
            <NavLink to="/Accomodation" >
                <div className="accomodation-card-image">
                    <img src="https://picsum.photos/340/285" alt="image appartement" />
                </div>
            <div className='appartement-desc'>Titre de la location</div>
            </NavLink>
        </div>
    );
};

export default AccomodationCard;