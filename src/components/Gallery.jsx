import React from 'react';
import "../styles/appartement.scss"
import Appartement from './Appartement';

function Gallery()  {
    return (
        <div className='grid'>
           <Appartement/>
           <Appartement/>
           <Appartement/>
           <Appartement/>
           <Appartement/>
           <Appartement/>
          
        </div>
    );
};

export default Gallery;