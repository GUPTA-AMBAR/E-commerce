import {React,useContext} from 'react';
import hotdeal1 from './images/hotdeal1.jpg';
import hotdeal2 from './images/hotdeal2.jpg';
import styles from './HotDeal.module.css';
import { useDeal } from '../Store/store';
import { useNavigate } from 'react-router-dom';

function HotDeals() {

  const {handleDeal} = useContext(useDeal);
  const navigate = useNavigate();

  const handleDealClick=()=>{
    handleDeal();
    navigate('/learnMore');
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="row">
        <div className="col-sm-6">
          <div className={`card ${styles.card1}`}>
          <img className="card-img-top" src={hotdeal1} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Hot Deals</h5>
              <br />
              <h5 className="card-title">Buy One Get One Free</h5>
              <br />
              <p className="card-text">The latest best collection in our closet</p>
              <p className="card-text">Feel cute with our outfits</p>
              <button type="button" className="btn btn-danger" onClick={handleDealClick}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className={`card ${styles.card1}`}>
          <img className="card-img-top" src={hotdeal2} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Hot Deals</h5>
              <br />
              <h5 className="card-title">Buy One Get One Free</h5>
              <br />
              <p className="card-text">The latest best collection in our closet</p>
              <p className="card-text">Feel cute with our outfits</p>
              <button type="button" className="btn btn-danger" onClick={handleDealClick}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
