import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';


const UpdateReviews = () => {

    const review = useLoaderData() 
    
    const {user} = useContext(AuthContext)
 
       
   const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
   
    const data = {
     feedback, 
     email,
      name
    }
    

    fetch(`https://service-review-server-side-gray.vercel.app/reviewRoute/${review._id}`, {
    method: "PUT",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
    })
    .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success("Review Update Successfully");
                // navigate("/review");
            }
        });
  }
    



    

    return (
        <div className='w-6/12  px-6 py-16 rounded-md'>
            <h2>this is route{review.serviceName}</h2>
            <form onSubmit={handleUpdate} className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<input  name="name" type="text" placeholder="First Name" defaultValue={review?.name} className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" />
				</div>
                <div>
                    <input  name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" readOnly />
                </div>
                <div>
                    <textarea name="feedback" type="text" placeholder="Your feedback" defaultValue={review?.feedback} className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
                </div>
				
                
				<button type="submit" className="w-6/12 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
                
            </form>
        </div>
    );
};

export default UpdateReviews;