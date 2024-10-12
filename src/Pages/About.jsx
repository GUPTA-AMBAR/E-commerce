import React from 'react'
import aboutBanner from '../components/images/aboutbanner.jpg';
import aboutimage from '../components/images/aboutimage.jpg';
import aboutvideo from '../components/images/aboutvideo.mp4';
import CustomerReview from '../components/CustomerReview';

  function About() {
  return (
    <>
  <div class="container">
    <br />
    <img className="d-block w-100" src={aboutBanner} alt="First slide"  />
  </div>
  <br />
  <br />
  <div className="row w-100">
  <div className="col-lg-6 my-4" >
    <img src={aboutimage} alt="image"  style={{height:"450px", width:"650px",marginLeft:"20px"}}/>
  </div>
  <div className="col-lg-6 my-4 d-flex align-items-center">
    <div>
      <h3 >Who Are We?</h3>
      <br />
      <p style={{color:"green"}}>"Welcome to <b>ShopTrove</b>, your one-stop shop for all your needs! We are committed to providing you with a seamless shopping experience, offering a wide range of high-quality products at unbeatable prices. Whether you're looking for the latest trends or everyday essentials, we've got you covered. With secure payment options and fast shipping, shopping with us is not just convenient—it's smart. Join our community today and enjoy exclusive deals and personalized recommendations, all from the comfort of your home!"</p>
      <br />
      <br />
      
    </div>
  </div>
</div>
<br />
<br />

<div>
  <h1 style={{color:"red",textAlign:"center"}}>Download Our App !</h1>
</div>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <iframe src={aboutvideo} frameBorder="0" style={{ height: "450px", width: "650px" }}/>
</div>

<div>
  <h1 style={{color:"red",textAlign:"center"}}>What Are Customer Says !</h1>
</div>
<br />
<CustomerReview/>
  </>

  )
}

export default About;