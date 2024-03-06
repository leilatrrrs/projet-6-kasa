import React from 'react';
import "../styles/gallery.scss"
import {NavLink} from "react-router-dom";

function Appartement  () {
    return (
        <div className='appartement'>
            <NavLink to="/Accomodation" >
            <div className='appartement-desc'>Titre de la location</div>
            </NavLink>
        </div>
    );
};

export default Appartement;