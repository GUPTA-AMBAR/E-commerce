import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Login from './Pages/login';
import { UseDealProvider, UseForgetProvider, UseLoginProvider, UseProductsProvider, UseReviewProvider, UseShopProvider, UseSignupProvider } from './Store/store'; 
import ForgetPassword from './Pages/ForgetPassword';
import Register from './Pages/Register';
import Contact from './Pages/Contact'

function App() {
  return (
    <UseLoginProvider>
      <UseForgetProvider>
        <UseSignupProvider>
          <UseReviewProvider>
            <UseDealProvider>
              <UseProductsProvider>
                <UseShopProvider>
            <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='blog' element={<Blog />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route index path='/login' element={<Login />} />
            <Route index path='/forget' element={<ForgetPassword />} />
            <Route index path='/signup' element={<Register />} />
            <Route index path='/learn more' element={<About/>} />
            <Route index path='/learnMore' element={<Blog/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UseShopProvider>
      </UseProductsProvider>
      </UseDealProvider>
      </UseReviewProvider>
      </UseSignupProvider>
      </UseForgetProvider>

    </UseLoginProvider>
  );
}

export default App;





