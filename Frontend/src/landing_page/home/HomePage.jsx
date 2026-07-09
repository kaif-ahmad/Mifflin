import React from 'react';
import NavBar from '../NavBar';
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <NavBar></NavBar>
        <Hero></Hero>
        <Awards></Awards>
        <Stats></Stats>
        <Education></Education>
        <OpenAccount></OpenAccount>
        <Footer></Footer>
        </>
    )
};

export default HomePage;