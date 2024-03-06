import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppartmentDesc from '../components/AppartmentDesc';
import AccomodationBanner from '../components/AccomodationBanner';
import AccomodationHeader from '../components/AccomodationHeader';

function Accomodation () {
    return (
        <div>
            <Navbar/>
            <div className='accomodation-page'>
               <AccomodationBanner />
                    <AccomodationHeader />
                   <div className="accomodation-desc-area">
                        <AppartmentDesc />
                        <AppartmentDesc />
                </div>
                 
            </div>
            <Footer/>  
        </div>
    );
};

export default Accomodation;