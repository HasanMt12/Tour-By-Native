import React, {  useEffect, useState } from 'react';
import AllReviewsCard from './AllReviewsCard';



const Reviews = ({id}) => {
   
    
     const [reviews, setReviews] = useState([])
     console.log(reviews);
    useEffect(() => {
        fetch(`https://service-review-server-side-gray.vercel.app/allReview?service=${id}`)
      
            .then(res => res.json())
            .then(data => setReviews(data))
            
    }, [id])
    return (
        <div>
           
            
            {
                reviews.map( review=>
                <AllReviewsCard
               key={id}
               review={review}
                >
                
                </AllReviewsCard>)
            }
            
        </div>
    );
};

export default Reviews;