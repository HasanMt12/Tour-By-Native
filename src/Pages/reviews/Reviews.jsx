import React, {  useEffect, useState } from 'react';
import AllReviewsCard from './AllReviewsCard';



const Reviews = ({id}) => {
   
    
     const [reviews, setReviews] = useState([])
     console.log(reviews);
    useEffect(() => {
        fetch(`https://service-review-server-side-sable.vercel.app/review?service=${id}`)
      
            .then(res => res.json())
            .then(data => setReviews(data))
            
    }, [id])


    return (
         <div className="py-5">
      <h1 className="text-center text-orange-600 font-sans text-2xl font-semibold">Here You Can See All Reviews</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-10 mx-10">
    {reviews.map((review) => (
        <AllReviewsCard key={id} review={review}></AllReviewsCard>
      ))}
    </div>
    </div>
        // <div>
             
        // {
        //         reviews.map( review=>
        //         <AllReviewsCard
        //        key={id}
        //        review={review}
        //         >
                
        //         </AllReviewsCard>)
        //     }     
        // </div>
    );
};

export default Reviews;