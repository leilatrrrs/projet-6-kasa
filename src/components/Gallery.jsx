import React from 'react';
import "../styles/accomodationcard.scss"
import AccomodationCard from './AccomodationCard';


function Gallery()  {
    return (
        <div className='grid'>
         < AccomodationCard />
         < AccomodationCard />
         < AccomodationCard />
         < AccomodationCard />
         < AccomodationCard />
         < AccomodationCard />
        </div>
    );
};

export default Gallery;