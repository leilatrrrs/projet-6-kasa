import React, { useEffect, useState } from 'react';
import "../styles/accomodationcard.scss"
import AccomodationCard from './AccomodationCard';



function Gallery() {
    const [apartments, setApartments] = useState([]);

    useEffect(fetchApartments, [])

    function fetchApartments() {
    fetch("data.json")
        .then((response) => response.json())
        .then((response) => setApartments(response))
        .catch(console.error)
}
    return (
        <div className='grid'>
            {apartments.map ((apartment) => (
             <AccomodationCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
            ))}
           
        </div>
    );
}

export default Gallery;

