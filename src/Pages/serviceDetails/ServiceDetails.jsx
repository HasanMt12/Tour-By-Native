import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewPostPage from '../reviews/ReviewPostPage';
import Reviews from '../reviews/Reviews';


const ServiceDetails = () => {
    const{ServiceName, price, image, _id, picture, duration ,details,service1,service2} = useLoaderData();
    
    return (
       <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
		<div className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={picture} alt="" className="w-9/12 mx-auto h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<p className="inline-block text-2xl font-semibold sm:text-3xl">{ServiceName}</p>
				<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>{price}</span>
						<span>{duration}</span>
					</div>
			</div>
			<div className="dark:text-gray-100">
				<p>{details}</p>
			</div>
            <div className="space-y-2">
			<h4 className="text-lg font-semibold">Service includes</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<p className="hover:underline">{service1}</p>
				</li>
				<li>
					<p className="hover:underline">{service2}</p>
				</li>
				
			</ul>
		</div>
		</div>
	</div>
</div>
		
        <div className="w-full  rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">	
	<div className=" w-full  shadow-xl">
    <ReviewPostPage></ReviewPostPage>
    </div>
		</div>
			</div>
			<Reviews
			id={_id}
			></Reviews>
</section>
    );
};

export default ServiceDetails;