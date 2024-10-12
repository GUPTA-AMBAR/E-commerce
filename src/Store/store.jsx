import React, { createContext, useState, useContext } from 'react';

// Create a context for login state
export const useLogin = createContext(null);

export const UseLoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  // Toggle login state
  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <useLogin.Provider value={{ login, handleLogin}}>
      {children}
    </useLogin.Provider>
  );
};



// create a context for forget password
export const useForget = createContext(null);

export const UseForgetProvider = ({ children }) => {
  const [forget, setForget] = useState(false);

  // Toggle forgetpassword state
  const handleForget = () => {
    setForget(forget);
  };

  return (
    <useForget.Provider value={{ forget, handleForget}}>
      {children}
    </useForget.Provider>
  );
};


// create a context for signup  password
export const useSignup = createContext(null);

export const UseSignupProvider = ({ children }) => {
  const [signup, setSignup] = useState(false);

  // Toggle forgetpassword state
  const handleSignup = () => {
    setSignup(signup);
  };

  return (
    <useSignup.Provider value={{ signup, handleSignup}}>
      {children}
    </useSignup.Provider>
  );
};


// create a context for learn more function in review section  password
export const useReview = createContext(null);

export const UseReviewProvider = ({ children }) => {
  const [review, setReview] = useState(false);

  // Toggle forgetpassword state
  const handleReview = () => {
    setReview(review);
  };

  return (
    <useReview.Provider value={{ review, handleReview}}>
      {children}
    </useReview.Provider>
  );
};




// create a context for learn more function in deal section  password
export const useDeal = createContext(null);

export const UseDealProvider = ({ children }) => {
  const [deal, setDeal] = useState(false);

  // Toggle forgetpassword state
  const handleDeal = () => {
    setDeal(deal)
    };

  return (
    <useDeal.Provider value={{ deal, handleDeal}}>
      {children}
    </useDeal.Provider>
  );
};




// create a context for learn more function in products section  password
export const useProducts = createContext(null);

export const UseProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(false);

  // Toggle forgetpassword state
  const handleProducts = () => {
    setProducts(products);
    };

  return (
    <useProducts.Provider value={{ products, handleProducts}}>
      {children}
    </useProducts.Provider>
  );
};



// create a context for learn more function in shop section  password
export const ShopContext = createContext(null);
export const useShop = () => useContext(ShopContext);
export const UseShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);

  // Toggle forgetpassword state
  const handleShop = (products) => {
    setShop(products);
    };
    console.log(shop)
  return (
    <ShopContext.Provider value={{ shop, handleShop}}>
      {children}
    </ShopContext.Provider>
  );
};
