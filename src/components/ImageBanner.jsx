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

    return (
        <div className='accomodation-banner-img'>
            {pictures.map((pic, i) =>( 
                <img key={pic} src={pic} alt='' className={getClassName(i)} /> 
                 ))
            }  
                
                <button className=' btn btn-right' onClick={moveToNext}><i className="fas fa-chevron-right" /></button>
                <button className='btn btn-left' onClick={moveToPrevious}><i className="fas fa-chevron-left"></i></button>
                
        </div> 
    )
};

export default ImageBanner;