import React, { useState } from 'react';
import "../styles/imagebanner.scss";


export function ImageBanner(props) {
    
        const pictures = props.pictures;
        const [currentPicture, setCurrentPicture] = useState(0)

        const getClassName = (i) => {
             return i === currentPicture ? "show" : "";
         }

        const moveToNext = () => {
            setCurrentPicture((currentPicture + 1) % pictures.length)
        }

        const moveToPrevious= () => {
            const newCurrentPicture = currentPicture - 1
            setCurrentPicture(newCurrentPicture < 0 ? pictures.length - 1 : newCurrentPicture);
        }

        if (!Array.isArray(pictures) || pictures.length === 0) {
            return null;
        }

    return (
        <div className='accomodation-banner-img'>
            {pictures.map((pic, i) =>( 
                <img key={pic} src={pic} alt='' className={getClassName(i)} /> 
                 ))
            }  
                {pictures.length > 1 && (
                    <>
                <button className=' btn btn-right' onClick={moveToNext}><i className="fas fa-chevron-right" /></button>
                <span className='slider'>
                    {currentPicture +1} / {pictures.length}
                </span>
                <button className='btn btn-left' onClick={moveToPrevious}><i className="fas fa-chevron-left"></i></button>
                </>)}
        </div> 
    )
};

export default ImageBanner;