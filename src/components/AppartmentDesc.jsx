import React, { useState } from 'react';
import "../styles/appartmentdesc.scss";

export default function AppartmentDesc(props) {
    const [isContentVisible, setIsContentVisible] = useState(true);

    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    const contentClass = (isContentVisible ? "visible" : "hidden") + " desc-content";
    const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

    return (
        <div className="accomodation-desc">
            <p className="desc-header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    );
}
