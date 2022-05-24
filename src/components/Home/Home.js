import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import BusinessSummary from '../BusinessSummary/BusinessSummary'
import ContactUs from '../ContactUs/ContactUs'
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
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
