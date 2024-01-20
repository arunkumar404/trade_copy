import React from 'react'
import styles from './InfoBox.module.css'
import DetailItem from './DetailItem'

const InfoBox = () => {
  return (
    <div className={styles.infoBoxContainer}>
      <DetailItem
        textTop='Total P&L'
        textBottom='7,375.00'
        topsize='.8rem'
        bottomSize='1.2rem'
      />
      <div className={styles.minorDetails}>
        <DetailItem
          textTop='Realised P&L'
          textBottom='7,375.00'
          topsize='.7rem'
          bottomSize='1.1rem'
        />
        <div className={styles.dividerVertical} />
        <DetailItem
          textTop='Unrealised P&L'
          textBottom='0.00'
          topsize='.7rem'
          bottomSize='1.1rem'
        />
      </div>
    </div>
  )
}

export default InfoBox