import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser } from "react-icons/fa";
const ReviewsCard = ({review}) => {
    const {user} = useContext(AuthContext)
    const {serviceName,price,feedback,email,rating} = review;

    return (
        <div className=''>
           
              <div className="container my-6  w-full max-w-lg p-6 mx-auto  rounded-md divide-gray-700 bg-gray-700 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
                {user?.photoURL ? (
                  <img
                    className="object-cover w-12 h-12 rounded-full"
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt="/"
                  />
                ) : (
                  <FaUser className="object-cover w-8 h-10 rounded-full"></FaUser>
                )}
              </div>
			<div>
				<h4 className="font-bold">{email}</h4>
				
			</div>
			<div>
				<h4 className="font-bold text-sky-500">rating by user:  <span className='text-orange-500'>{rating}</span></h4>
				
			</div>
		</div>
		
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-200">
		<p className='text-gray-900 font-bold'> Feedback : <span className='text-sky-400'>{feedback}</span></p>
		
	</div>
    <div className="flex justify-between pb-4 border-bottom">
		
	</div>
</div>
        </div>
    );
};

export default ReviewsCard;