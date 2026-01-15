import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import ShopGames from '../components/ShopGames'
import ShopItems from '../components/ShopItems'
import JoinNow from '../components/JoinNow'
import ForBusiness from '../components/ForBusiness'
import Footer from '../components/Footer'
import BlueChatBox from '../components/BlueChatBox'
import MarqueBox from '../components/MarqueBox'
const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <BlueChatBox />
      <ShopGames />
      <ShopItems />
      <JoinNow />
      <ForBusiness />
      <Footer />

    </div>
  )
}

export default Home
