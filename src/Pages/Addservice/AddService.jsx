 import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
  useTitle('Add service')

   const handleServicePost = (e) => {
    const form = e.target;
    const ServiceName = form.ServiceName.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const details = form.details.value;
    const picture = form.picture.value;
    // console.log(title, price, photoURL)
    const data = {
      ServiceName, price, duration, picture, details
    }

    fetch('http://localhost:5000/allServices', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => 
      
      {
        if(data.acknowledged){
            toast.success('User added successfully');
           
        }
    })

   }
 

  return (
<div>
      <form onSubmit={handleServicePost} className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<input name="ServiceName" type="text" placeholder="title name"  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" />
				</div>
                <div>
                    <input  name="duration" type="text" placeholder="duration" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5"  />
                </div>
                <div>
                    <input name="price" type="text" placeholder="price" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
                </div>
                <div>
                    <input name="picture" type="url" placeholder="image url only"  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
                </div>
                <div>
                    <input name="details" type="text" placeholder="details"  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
                </div>
			<button type="submit" className="w-6/12 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
                
            </form>
</div>
  );
};

export default AddService;





