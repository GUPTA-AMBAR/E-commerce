import {React,useContext} from 'react';
import styles from "./FeaturedProduct.module.css";
import men from './images/menswear.jpg';
import women from './images/womenswear.jpg';
import festivalsell from './images/festivelsell.webp';
import { useProducts } from '../Store/store';
import { useNavigate } from 'react-router-dom';

function FeaturedProduct() {

  const {handleProducts} = useContext(useProducts);
  const navigate = useNavigate();

  const handleShopClick=()=>{
    handleProducts();
    navigate('/shop');
  }

  return (
    <>
      <div>
        <center style={{ color: 'red' }}>
          <h1>Featured Products</h1>
        </center>
        <br />
        <center>
          <h6>All Weather New Designs</h6>
        </center>
      </div>

    <div className={`${styles.products}`}>
      <div className={`card ${styles.card1}`} style={{ width: '18rem' }}>
        <img className="card-img-top" src={men} alt="Card image cap" />
        <div className="card-body">
          <p className="card-title" style={{color:"brown"}}>gucci</p>
          <h6 className="card-text">
           Mens'Wear
          </h6>
          <hr />
          in stock
          <br />
           <i>50% off</i>
           <br />
           <b>Starting From ₹349.00  <del>₹499.00</del> </b>
           <hr /> 
           <br />
          <a href="#" className="btn btn-primary" onClick={handleShopClick}>
            View Product
          </a>
        </div>
      </div>

      <div className={`card ${styles.card1}`} style={{ width: '18rem' }}>
        <img className="card-img-top" src={festivalsell} alt="Card image cap" />
        <div className="card-body">
          <p className="card-title" style={{color:"brown"}}>H&M</p>
          <h6 className="card-text">
           Festival Sell
          </h6>
          <hr />
          in stock
          <br />
           <i>45% off</i>
           <br />
           <b>Starting From ₹899.00  <del>₹999.00</del> </b>
           <hr /> 
           <br />
          <a href="#" className="btn btn-primary" onClick={handleShopClick}>
            View Product
          </a>
        </div>
      </div>

      <div className={`card ${styles.card1}`} style={{ width: '18rem' }}>
        <img className="card-img-top" src={women} alt="Card image cap" />
        <div className="card-body">
          <p className="card-title" style={{color:"brown"}}>Lyra</p>
          <h6 className="card-text">
           Women's Wear
          </h6>
          <hr />
          in stock
          <br />
           <i>70% off</i>
           <br />
           <b>Starting From ₹599.00  <del>₹699.00</del> </b>
           <hr /> 
           <br />
          <a href="#" className="btn btn-primary" onClick={handleShopClick}>
            View Product
          </a>
        </div>
      </div>

      {/* <div className={`card ${styles.card1}`} style={{ width: '18rem' }}>
        <img className="card-img-top" src={children} alt="Card image cap" />
        <div className="card-body">
          <p className="card-title" style={{color:"brown"}}>Zara</p>
          <h6 className="card-text">
           Children's Wear
          </h6>
          <hr />
          in stock
          <br />
           <i>64% off</i>
           <br />
           <b>Starting From ₹249.00  <del>₹499.00</del> </b>
           <hr /> 
           <br />
          <a href="#" className="btn btn-primary">
            View Product
          </a>
        </div>
      </div> */}

      </div>
    </>
  );
}

export default FeaturedProduct;
