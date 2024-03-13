import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppartmentDesc from '../components/AppartmentDesc';
import ImageBanner from '../components/ImageBanner';
import AccomodationHeader from '../components/AccomodationHeader';
import { useLocation } from 'react-router-dom';

function Accomodation () {

    const location = useLocation()
    const [flat,setFlat] = useState(null)

    useEffect (fetchApartmentData, [])

    function fetchApartmentData (){
        fetch("data.json")
        .then((response) => response.json())
        .then((flats) => {
            const flat = flats.find((flat) => flat.id === location.state.apartmentId)
            
            setFlat(flat);
        })
        .catch(console.error)
    }

    if (flat == null) return <div>Chargement...</div>
        
    

    return (
        <div>
          
            <Navbar/>
            <div className='accomodation-page'>
{/*             selected flat: {JSON.stringify(flat)} */}
               <ImageBanner pictures={flat.pictures} />  
                    <AccomodationHeader flat ={flat}/>
                   <div className="accomodation-desc-area">
                        <AppartmentDesc  title ="Description" content={flat.description}/>
                        <AppartmentDesc title= "Équipement" content ={flat.equipments.map((equipment) =>
                            <li>{equipment}</li>
                            )}/>
                </div>
                 
            </div>
            <Footer/>  
        </div>
    );
};

export default Accomodation;