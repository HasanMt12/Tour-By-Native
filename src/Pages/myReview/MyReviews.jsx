import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './ReviewCard';




const MyReviews = () => {

    useTitle('My reviews')
      const { user } = useContext(AuthContext);
       const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://service-review-server-side-sable.vercel.app/review?email=${user?.email}`)
    
         .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleRemove = id =>{
        const proceed = window.confirm('Are you sure, you want to remove');
        if(proceed){
            fetch(`https://service-review-server-side-sable.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('remove successfully');
                    const remaining = reviews.filter(r => r._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
            
      
            {
                reviews.map(r=> <ReviewCard
                key={r._id}
                r={r}
                handleRemove={handleRemove}
                >
                       
                </ReviewCard>
                )
            }
                   
                    
        </div>
    );
};

export default MyReviews;