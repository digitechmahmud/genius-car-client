import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from './About/About';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;