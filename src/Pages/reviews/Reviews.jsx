import React, {  useEffect, useState } from 'react';
import AllReviewsCard from './AllReviewsCard';



const Reviews = ({id}) => {
   
    
     const [reviews, setReviews] = useState([])
     console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/allReview?service=${id}`)
      
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