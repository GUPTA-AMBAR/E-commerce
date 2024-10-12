import React, { useContext } from 'react';
import { useShop } from '../Store/store';
import Cards from '../components/Cards';

const Shop = () => {
  const {shop} = useShop();
  // const location = useLocation();
  // const shop = location.state?.products || []; 
  return (
      <div>
      <h2>Shop</h2>
      {shop && shop.length > 0 ? (<Cards data={shop} />) : (<p>Loading product.!</p>)}
    </div>
  );
};

export default Shop;
