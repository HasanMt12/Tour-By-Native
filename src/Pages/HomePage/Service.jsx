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
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
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