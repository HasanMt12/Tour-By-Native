import React from 'react';
import Service from './Service';
import Banner from './Banner';
import Section from './Section';
import useTitle from '../../hooks/useTitle';
import Gallery from './Gallery';
import Offer from './Offer';
import Contuct from './Contuct';
const Home = () => {
  useTitle('Home')
    return (
      <div>
        <Banner></Banner>,
        <Service></Service>
      <Section></Section>
      <Gallery></Gallery>
      <Offer></Offer>
      <Contuct></Contuct>
        
      </div>
      

    );
};

export default Home;