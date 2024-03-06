import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
                <Navbar/>
                <main>
               <Banner/>
               <Gallery/>
                </main>
                <Footer/>
        </div>
    );
};

export default Home;