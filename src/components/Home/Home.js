import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import BusinessSummary from '../BusinessSummary/BusinessSummary'
import Banner from '../Home/Banner'
import Reviews from '../Reviews/Reviews'
import Tools from '../Tools/Tools'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Home
