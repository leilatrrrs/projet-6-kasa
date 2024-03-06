import React from 'react';
import "../styles/accomodationheader.scss"

function AccomodationHeader () {
    return (
        <div className="accomodation-header">
        <div className="accomodation-title">
            <h1>Cosy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Île-de-France</h2>

            <div className="accomodation-tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
            </div>

        </div>
        <div className="accomodation-owner">
            <div className="accomodation-owner-details">
                <h3>
                    <span>Alexandre</span>
                    <span>Dumas</span>
                </h3>
                <div className="accomodation-owner-badge"></div>
            </div>
            <div className="accomodation-owner-stars">
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='off'>★</span>
                <span className='off'>★</span>
            </div>
        </div> 
    </div>
    );
};

export default AccomodationHeader;