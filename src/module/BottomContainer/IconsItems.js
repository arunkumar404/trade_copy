import React from 'react'
import styles from './BottomContainer.module.css'
import search from '../../asset/images/search.png'
import tune from '../../asset/images/tune.png'
import analytics from '../../asset/images/analytics.png'

const IconsItems = () => {
  return (
    <div className={styles.totalIconsContainer}>
      <div className={styles.leftPart}>
        <img src={tune} alt='brief' className={styles.icon} />
        <img src={search} alt='brief' className={styles.icon} />
      </div>
      <div className={styles.rightPart}>
        <img src={analytics} alt='analytics' className={styles.iconAnalytics} />
        <p className={styles.textRight}>Analytics</p>
      </div>
    </div>
  )
}

export default IconsItems
