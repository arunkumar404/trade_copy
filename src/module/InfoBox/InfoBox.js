import React from 'react'
import styles from './InfoBox.module.css'
import DetailItem from './DetailItem'
import { useInputContext } from '../../context'

const InfoBox = () => {

    const { totalPLNumber, realisedPLNumber, unrealisedPLNumber } =
      useInputContext()

  return (
    <div className={styles.infoBoxContainer}>
      <DetailItem
        textTop='Total P&L'
        textBottom={totalPLNumber}
        topsize='.8rem'
        bottomSize='1.2rem'
      />
      <div className={styles.minorDetails}>
        <DetailItem
          textTop='Realised P&L'
          textBottom={realisedPLNumber}
          topsize='.7rem'
          bottomSize='1.1rem'
        />
        <div className={styles.dividerVertical} />
        <DetailItem
          textTop='Unrealised P&L'
          textBottom={unrealisedPLNumber}
          topsize='.7rem'
          bottomSize='1.1rem'
        />
      </div>
    </div>
  )
}

export default InfoBox