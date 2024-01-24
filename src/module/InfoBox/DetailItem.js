import React from 'react'
import styles from './InfoBox.module.css'

const DetailItem = ( { textTop, textBottom, topsize, bottomSize } ) => {
    const isNegative = textBottom < 0

  return (
    <div className={styles.detailItemContainer}>
      <p className={styles.textTop} style={{ fontSize: topsize }}>
        {textTop}
      </p>
      <div className={`${styles.textBottom} ${isNegative && styles.negative}`} style={{ fontSize: bottomSize }}>
        {isNegative ? `- ₹ ${textBottom * -1}` : `₹ ${textBottom}`}
      </div>
    </div>
  )
}

export default DetailItem