import React from 'react';
import Service from './Service';
import Banner from './Banner';
import Section from './Section';
import useTitle from '../../hooks/useTitle';

const Home = () => {
  useTitle('Home')
    return (
      <div>
        <Banner></Banner>,
        <Service></Service>
      <Section></Section>
        
      </div>
      

    );
};

export default Home;