import React from 'react'
import styles from './InfoBox.module.css'

const DetailItem = ({ textTop, textBottom, topsize, bottomSize }) => {
  return (
    <div className={styles.detailItemContainer}>
      <p className={styles.textTop} style={{ fontSize: topsize }}>
        {textTop}
      </p>
      <div
        className={styles.textBottom}
        style={{ fontSize: bottomSize }}
      >{`₹ ${textBottom}`}</div>
    </div>
  )
}

export default DetailItem