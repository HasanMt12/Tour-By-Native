import React, { useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';
import { Link } from 'react-router-dom';

const Service = () => {
     const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
    <div>
        <section className="py-6 bg-gray-800 text-gray-100">
	        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Tour Packages</h1>
                <p className="text-xl font-bold leading-none text-center sm:text-2xl">A comprehensive, up-to-date travel guide for your selected destination showing you the best do and see activities, restaurants, cafés, nightlife, shopping and much more.</p>
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
            <Link to='/allServices'><button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">See more...</button></Link>
	        </div>
        </section>
    </div>
    );
};

export default Service;