import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ReviewCard = ({r,handleRemove}) => {
      const { user } = useContext(AuthContext);

    const {price, _id,feedback} = r;
    return (
        <div className="container my-6 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={user?.photoUrl? user?.photoUrl: <p>{price}</p> } alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{user?.displayName}</h4>
				<span className="text-xs text-gray-400"></span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
		
		</div>
	</div>
	<div className="p-4 space-y-2 text-gray-200 font-bold txt-2xl">
		<p className=''>Your feedback :  <span className='text-sky-600'>{feedback}</span></p>
		
	</div>
    <div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<p  className="mb-0 capitalize text-gray-100"></p>
            <button onClick={() => handleRemove(_id)} >delete</button>
		</div>

		
		 <Link to={`/update/${_id}`}>
			<button>update</button>
			</Link>
	</div>
</div>
    );
};

export default ReviewCard;