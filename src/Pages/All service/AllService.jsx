import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    useTitle('All service')
    const [allServices, setAllServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-side-gray.vercel.app/allServices')
        .then(res =>res.json())
        .then(data => setAllServices(data))
    }, []);
    return (
        <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
		    <div className="my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {
                    allServices.map(allService =>
                    <AllServiceCard
                        allService={allService}
                        key={allService._id}
                    >

                    </AllServiceCard>)
                }
            </div>
            
	        </div>
        </section>
    </div>
    );
};

export default AllService;