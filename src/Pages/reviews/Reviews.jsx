import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Reviews = () => {
    
     const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
      
            .then(res => res.json())
            .then(data => setReviews(data))
            
    }, [reviews?._id])
    return (
        <div>
            <h1>ou{reviews.length}</h1>
        </div>
    );
};

export default Reviews;