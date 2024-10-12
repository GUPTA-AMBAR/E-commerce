import React from 'react'
import review1 from './images/review1.jpg';
import review2 from './images/review2.jpg';
import review3 from './images/review3.jpg';
import review4 from './images/review4.jpg';
import { useReview } from '../Store/store';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';




function CustomerReview() {

  const { handleReview } = useContext(useReview);
        const navigate = useNavigate();
      
        const handleReviewClick = () => {
          handleReview(); 
          navigate('/learn more'); 
        };


  return (

    <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={review1} alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Amazing quality and fast shipping! Will definitely shop here again.</p>
      <br />
      <a className="card-text" ><b className="text-muted" onClick={handleReviewClick}>Learn more</b></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={review2} alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">The fabric is so soft and the fit is perfect. Highly recommend this t-shirt!</p>
      <br />
      <a className="card-text" ><b className="text-muted" onClick={handleReviewClick}>Learn more</b></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={review3} alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Great customer service and the products exceeded my expectations. Five stars!</p>
      <br />
      <a className="card-text" ><b className="text-muted" onClick={handleReviewClick}>Learn more</b></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={review4} alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Great shopping experience! Fast delivery and excellent customer service.</p>
      <br />
      <a className="card-text" ><b className="text-muted" onClick={handleReviewClick}>Learn more</b></a>
    </div>
  </div>
</div>
  )
}

export default CustomerReview