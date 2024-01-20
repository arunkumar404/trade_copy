import React from 'react'
import styles from './BottomContainer.module.css'

const DetailsContainer = () => {
  return (
    <div>
      <p className={styles.longPress}>
        Long Press on the scrip to Square off All Order
      </p>
      <div className={styles.firstLine}>
        <p className={styles.detailShorts}>Qty. 0 </p>
        <p className={styles.detailMedium}>Sell Avg. 97.30 </p>
        <button className={styles.buttonMis}>MIS</button>
      </div>
      <div className={styles.secondLine}>
        <p className={styles.textLeft}>NIFTY 14TH DEC 20900 PE</p>
        <p className={styles.textRightBottom}>7,375.00</p>
      </div>
      <div className={styles.thirdLine}>
        <p className={styles.detailShorts}>NFO</p>
        <p className={`${styles.detailMedium} ${styles.moveleft}`}>Buy Avg. 82.55 </p>
        <p className={styles.detailShorts}>LTP 95.90 </p>
      </div>
    </div>
  )
}

export default DetailsContainer
