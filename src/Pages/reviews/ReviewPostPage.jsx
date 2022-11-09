import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ReviewPostPage = () => {
     const { ServiceName, price, image, _id,  duration ,service} = useLoaderData();
    const { user } = useContext(AuthContext);

      const handlePostReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = user?.email || 'unregistered';
        const feedback = form.feedback.value;
        

        const review = {
            service: _id,
            serviceName: ServiceName,
            service,
            price,
            customer: name,
            email,
            feedback,
           
        }


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged)
                {
                    alert('hoise')
                    form.reset();     
                }
            })
                
            .catch(er => console.error(er));


      }

    return (
       
           
	
       
		<div className="w-11/12 px-6 py-16 rounded-md  dark:bg-gray-900  rounded-md ">
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Your opinion matters!</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-50">How was your experience?</span>
			</p>
			<form onSubmit={handlePostReview} className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<input name="fullName" type="text" placeholder="First Name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" />
				</div>
                <div>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" readOnly />
                </div>
                <div>
                    <textarea name="feedback" type="text" placeholder="Your feedback" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
                </div>
				
                
				<button type="submit" className="w-6/12 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
                
            </form>
		</div>
		
	

        
    );
};

export default ReviewPostPage;