import React, { useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';
import { Link } from 'react-router-dom';

const Service = () => {
     const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-side-sable.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
    <div>
        <section className="py-6 text-sky-900 ">
	        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
		   
            <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold text-sky-900 sm:text-4xl">Tour Packages</h2>

      <p className="mt-4 text-sky-900">
      A comprehensive, up-to-date travel guide for your selected destination showing you the best do and see activities, restaurants, cafés, nightlife, shopping and much more.
      </p>
    </div>
            <div className="my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    services.map(service => 
                    <SingleServiceCard
                        service={service}
                        key={service._id}
                    >

                    </SingleServiceCard>)
                }
            </div>
            <Link to='/allServices'><button type="button" className="px-8 py-3 font-semibold rounded-full hover:bg-transparent border border-sky-600 hover:text-sky-900 focus:outline-none focus:ring active:text-sky-500 bg-sky-900 text-gray-100">See more...</button></Link>
	        </div>
        </section>
    </div>
    );
};

export default Service;