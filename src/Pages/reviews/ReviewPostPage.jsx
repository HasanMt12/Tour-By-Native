import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ReviewPostPage = () => {
     const { ServiceName, price, image, _id,  duration } = useLoaderData();
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
        <div>
           
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <img src={image} alt="" className="object-cover w-full sm:px-12 md:px-16 xl:col-span-2 h-full  dark:bg-gray-500" />
		<div className="w-11/12 px-6 py-16 rounded-md  dark:bg-gray-900  rounded-md xl:col-span-3">
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Your opinion matters!</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-50">How was your experience?</span>
			</p>
			<form onSubmit={handlePostReview} className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<input name="fullName" type="text" placeholder="First Name" className="w-9/12 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" />
				</div>
                <div>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="w-9/12 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" readOnly />
                </div>
                <div>
                    <textarea name="feedback" type="text" placeholder="Your feedback" className="w-9/12 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
                </div>
				
                
				<button type="submit" className="w-6/12 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
                
            </form>
		</div>
		
	</div>
</section>
        </div>
    );
};

export default ReviewPostPage;