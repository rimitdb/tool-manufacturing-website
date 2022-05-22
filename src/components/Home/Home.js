import React from 'react'
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
    </div>
  )
}

export default Home
