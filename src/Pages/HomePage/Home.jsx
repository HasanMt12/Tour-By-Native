import React from 'react';
import Service from './Service';
import Banner from './Banner';
import Section from './Section';
import useTitle from '../../hooks/useTitle';
import Gallery from '../../hooks/useTitle';
import Offer from './Offer';
const Home = () => {
  useTitle('Home')
    return (
      <div>
        <Banner></Banner>,
        <Service></Service>
      <Section></Section>
      <Gallery></Gallery>
      <Offer></Offer>
        
      </div>
      

    );
};

export default Home;