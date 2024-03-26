import React, { useState } from 'react';
import "../styles/appartmentdesc.scss";

export default function AppartmentDesc(props) {
    const [isContentVisible, setIsContentVisible] = useState(true); 
    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div className="accomodation-desc">
            <div className={`desc-header ${isContentVisible ? '' : 'collapsed'}`} onClick={toggleContent}>
                <span>{props.title}</span>
                <i className={`fas fa-chevron-${isContentVisible ? 'up' : 'down'}`}></i>
            </div>
            <p className={isContentVisible ? "visible desc-content" : "hidden desc-content"}>
                         {props.content}
            </p>
        </div>
    );
}
