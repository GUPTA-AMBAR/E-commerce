import React from 'react'
import Banner from '../components/Banner'
import FeaturedProduct from '../components/FeaturedProduct'
import MidBanner from '../components/MidBanner'
import CustomerReview from '../components/CustomerReview'
import HotDeals from '../components/HotDeals'

function Home() {
  return (
    <>
    <Banner/>
    <br />
    <FeaturedProduct/>
    <br />
    <br />
    <MidBanner/>
    <br />
    <br />
    <HotDeals/>
    <br />
    <br />
    <br />
    <CustomerReview/>
    <br />
    </>
  )
}

export default Home