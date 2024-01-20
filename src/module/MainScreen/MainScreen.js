import React from 'react'
import Header from '../Header/Header'
import CustomTab from '../CustomTab/CustomTab'
import InfoBox from '../InfoBox/InfoBox'
import BottomContainer from '../BottomContainer/BottomContainer'
import Footer from '../Footer/Footer'
import styles from './MainScreen.module.css'

const MainScreen = () => {
  return (
    <div className={styles.mainScreen}>
      <Header />
      <CustomTab />
      <InfoBox />
      <BottomContainer />
      <Footer />
    </div>
  )
}

export default MainScreen