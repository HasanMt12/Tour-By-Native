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
    const data = 
    {
      ServiceName, price, duration, picture, details
    }

    fetch('https://service-review-server-side-sable.vercel.app/allServices', {
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
<div className='w-9/12 mx-auto bg-grey-200'>
  <h3 className='text-sky-500 '> * You need to add service must provide valid photo URl</h3>
      <form onSubmit={handleServicePost} className="self-stretch mx-auto m-6 space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<input name="ServiceName" type="text" placeholder="title name"  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-5" />
				</div>
                <div>
                    <input  name="duration" type="number" placeholder="duration" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-5"  />
                </div>
                <div>
                    <input name="price" type="number" placeholder="price" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-5" required />
                </div>
                <div>
                    <input name="picture" type="url" placeholder="image url only"  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-5"  />
                </div>
                <div>
                    <input name="details" type="text" placeholder="details"  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-5" required />
                </div>
			<button type="submit" className="w-6/12 py-2 font-semibold rounded bg-violet-400 text-gray-900">Add service</button>
                
            </form>
</div>
  );
};

export default AddService;





