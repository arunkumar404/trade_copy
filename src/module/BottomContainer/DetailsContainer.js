import React from 'react'
import styles from './BottomContainer.module.css'
import { useInputContext } from '../../context'

const DetailsContainer = () => {
  const {
    quantity,
    sellAvg,
    buyAvg,
    itemName,
    itemNameTotal,
    division,
    ltp,
    changeButton,
  } = useInputContext()

  const isNegative = itemNameTotal < 0

  return (
    <div>
      <p className={styles.longPress}>
        Long Press on the scrip to Square off All Order
      </p>
      <div className={styles.firstLine}>
        <p className={styles.detailShorts}>Qty. {quantity} </p>
        <p className={styles.detailMedium}>Sell Avg. {sellAvg} </p>
        <button className={`${styles.buttonMis} ${styles.toUpperCase}`}>
          {changeButton}
        </button>
      </div>
      <div className={styles.secondLine}>
        <p className={`${styles.textLeft} ${styles.toUpperCase}`}>{itemName}</p>
        <p
          className={`${styles.textRightBottom} ${
            isNegative && styles.negative
          }`}
        >
          {itemNameTotal}
        </p>
      </div>
      <div className={styles.thirdLine}>
        <p className={`${styles.detailShorts} ${styles.toUpperCase}`}>
          {division}
        </p>
        <p className={`${styles.detailMedium} ${styles.moveleft}`}>
          Buy Avg. {buyAvg}{' '}
        </p>
        <p className={styles.detailShorts}>LTP {ltp} </p>
      </div>
    </div>
  )
}

export default DetailsContainer
