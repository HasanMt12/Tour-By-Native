import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './ReviewCard';




const MyReviews = () => {

    useTitle('My reviews')
      const { user,logOut } = useContext(AuthContext);
       const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReview(data);
            })
            
    }, [user?.email])


    const handleRemove = id =>{
        const proceed = window.confirm('Are you sure, you want to remove');
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('remove successfully');
                    const remaining = review.filter(r => r._id !== id);
                    setReview(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h2 className="text-5xl my-6">You have {review.length} Orders</h2>
            
            {
                review.map(r=> <ReviewCard
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