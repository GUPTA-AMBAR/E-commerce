// import React from 'react'
// import styles from "./Cards.module.css";

// const Cards=({data})=> {
//   return( 
// <div className={`cards-container ${styles.cardsContainer}`}>
//   {data.map((currentItem, index) => {
//     if (!currentItem.image) {
//       return null;
//     } else {
//       return (
//         <div className={`card ${styles.card1}`} style={{ width: "18rem" }} key={index}>
//           <img className="card-img-top" src={currentItem.image} alt="Card image cap" />
//           <div className="card-body">
//             <h5 className="card-title">{currentItem.title}</h5>
//             <br />
//             <p style={{ color: "green" }}> Rating : {currentItem.rating.rate}</p>
//             <b style={{ color: "red" }}>{currentItem.price}</b>
//             <br />
//             <br />
//             <button
//               className="btn btn-primary"
//               style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
//             >
//               Add Cart
//             </button>
//           </div>
//         </div>
//       );
//     }
//   })}
// </div>
//   )
// }

// export default Cards














import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ data = [] }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No products found.</p>; // Fallback if no data is available
  }

  return (
    <div className={`cards-container ${styles.cardsContainer}`}>
      {data.map((currentItem, index) => {
        if (!currentItem.image) {
          return null; // Skip items with no image
        }
        return (
          <div className={`card ${styles.card1}`} style={{ width: '18rem' }} key={index}>
            <img className="card-img-top" src={currentItem.image} alt="Product image" />
            <div className="card-body">
              <h5 className="card-title">{currentItem.title}</h5>
              <p style={{ color: 'green' }}>Rating: {currentItem.rating?.rate}</p>
              <b style={{ color: 'red' }}>${currentItem.price}</b>
              <button className="btn btn-primary" style={{ textAlign: 'center' }}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
