import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppartmentDesc from '../components/AppartmentDesc';
import ImageBanner from '../components/ImageBanner';
import '../'

function About ()  {
    return (
        <div>
            <Navbar />
            <div className='about'>
            <ImageBanner />
            <AppartmentDesc />
            <AppartmentDesc />
            <AppartmentDesc />
            <AppartmentDesc />
            </div>
                <Footer />
        </div>
    );
};

export default About;