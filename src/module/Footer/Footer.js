import React from 'react'
import styles from './Footer.module.css'
import footerIcon1 from '../../asset/images/footerIcon1.png'
import footerIcon2 from '../../asset/images/footerIcon2.png'
import footerIcon3 from '../../asset/images/footerIcon3.png'
import footerIcon4 from '../../asset/images/footerIcon4.png'
import footerIcon5 from '../../asset/images/footerIcon5.png'
import { useInputContext } from '../../context'

const Footer = () => {

    const { grandTotal } = useInputContext()

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <p className={styles.textLeft}>MTM</p>
        <p className={styles.textRightBottom}>{grandTotal}</p>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.iconNtextContainer}>
          <img
            src={footerIcon1}
            alt='footerIcon1'
            className={styles.footerIconNormal}
          />
          <p className={styles.textWithIcon}>Watchlist</p>
        </div>
        <div className={styles.iconNtextContainer}>
          <img
            src={footerIcon2}
            alt='footerIcon2'
            className={styles.footerIconNormal}
          />
          <p className={styles.textWithIcon}>Orders</p>
        </div>
        <div className={styles.iconNtextContainer}>
          <img
            src={footerIcon3}
            alt='footerIcon3'
            className={styles.footerIconNormal}
            style={{ width: '23px', height: '26px' }}
          />
          <p className={styles.textWithIcon}>Dashboard</p>
        </div>
        <div className={styles.iconNtextContainer}>
          <div className={styles.selectedIconContainer}>
            <img
              src={footerIcon4}
              alt='footerIcon4'
              className={styles.footerIconSelected}
            />
          </div>
          <p className={styles.textWithIconSelected}>Portfolio</p>
        </div>
        <div className={styles.iconNtextContainer}>
          <img
            src={footerIcon5}
            alt='footerIcon5'
            className={styles.footerIconNormal}
            style={{ width: '23px', height: '26px' }}
          />
          <p className={styles.textWithIcon}>735312</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
