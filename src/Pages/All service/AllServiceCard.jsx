import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCard = ({allService}) => {
     const { ServiceName, price, image, picture, duration ,details } = allService;
    return (
          <div className="max-w-sm p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 cursor: zoom-in" />
                            <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <p className="mb-0 capitalize dark:text-gray-100">Duration : {duration} hours</p>
                        </div>
                            <p >Price: $ {price}</p>
                        </div>
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                        </div>
                        <div className="space-y-2">
                            <p className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">{ServiceName}</h3>
                            </p>
                            <p className="leading-snug dark:text-gray-400">
                            {
                        details.length > 100 ?
                            <p>{details.slice(0, 100) + '...'} 
                            <Link to="/login" className='font-semibold text-blue-600  text-lg '> Details</Link> </p>
                            :
                            <p>{details}</p>
                    }

                            </p>
                        </div>
                    </div>
                </div>
    );
};

export default AllServiceCard;