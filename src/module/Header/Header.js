import React from 'react'
import brief from '../../asset/images/brief.png'
import styles from './Header.module.css'
import { FaChevronDown } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerItemLeft}>
        <img src={brief} alt='brief' className={styles.brief} />
        <p className={styles.head}>Portfolio</p>
      </div>
      <FaChevronDown style={{color:'#ffffff'}} />
    </div>
  )
}

export default Header
