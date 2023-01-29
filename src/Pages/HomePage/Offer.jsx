import React from 'react';

const Offer = () => {
    return (
        <div className='my-4 '>
            <div className="p-6 py-12 my-8  bg-slate-100/80 text-gray-900 rounded shadow-lg">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">50% Off Up to
				
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Next</span>
				<span className="font-bold text-lg">Trip</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block border bg-sky-900 text-gray-100 hover:bg-transparent border-sky-600 hover:text-sky-900 focus:outline-none focus:ring active:text-sky-500">Book Now</a>
		</div>
	</div>
</div>
        </div>
    );
};

export default Offer;