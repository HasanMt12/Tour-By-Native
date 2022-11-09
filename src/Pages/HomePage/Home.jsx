import React from 'react';
import Service from './Service';
import Banner from './Banner';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
    return (
      <div>
        <Banner></Banner>,
        <Service></Service>
     
        
      </div>
      

    );
};

export default Home;