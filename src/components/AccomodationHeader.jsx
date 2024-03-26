import React from 'react';
import "../styles/accomodationheader.scss"

function AccomodationHeader (props) {
    const flat = props.flat;
    const name = flat.host.name;
    const [firstName, lastName] = name.split(" ")
   
    return (
        <div className="accomodation-header">
            <div className="accomodation-title">
                <h1>{flat.title}</h1>
                <h2>{flat.location}</h2>

                <div className="accomodation-tags">
                    {flat.tags.map((tag) => (
                    <span>{tag}</span>
                    ))}
                </div>
                
            </div> 
        
            <div className="accomodation-owner">
                <div className="accomodation-owner-details">
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className="accomodation-owner-badge">
                        <img src={flat.host.picture} alt="" />
                    </div>
                </div>
                <div className="accomodation-owner-stars">
                    {[1,2,3,4,5].map((number) => (
                        <span className={flat.rating >= number ? "on" : " "}>★</span>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default AccomodationHeader;