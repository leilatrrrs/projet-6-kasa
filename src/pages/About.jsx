import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppartmentDesc from '../components/AppartmentDesc';
import Banner from '../components/Banner';
import '../styles/about.scss'

function About ()  {
    return (
        <div>
            <Navbar />
                <div className='about'>
                    <Banner isHomePage={false} />
                    <AppartmentDesc title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                    <AppartmentDesc title="Respect"content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <AppartmentDesc title="Service"content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question."/>
                    <AppartmentDesc title="Responsabilité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
                </div>
            <Footer />
        </div>
    );
};

export default About;