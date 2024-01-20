import React, { useState } from 'react'
import { useInputContext } from '../../context'
import styles from './DetailsInput.module.css'

const DetailsInput = () => {
  const {
    setHoldingNumber,
    setPositionsNumber,
    setTotalPLNumber,
    setRealised,
    setUnrealised,
    setQuantity,
    setSellAvg,
    setBuyAvg,
    setItemName,
    setItemNameTotal,
    setDivision,
    setLtp,
    setGrandTotal,
  } = useInputContext()

  const [inputFields, setInputFields] = useState({
    holdingNumber: '',
    positionsNumber: '',
    totalPLNumber: '',
    realised: '',
    unrealised: '',
    quantity: '',
    sellAvg: '',
    buyAvg: '',
    itemName: '',
    itemNameTotal: '',
    division: '',
    ltp: '',
    grandTotal: '',
  })

  const handleInputChange = (event) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setHoldingNumber(inputFields.holdingNumber)
    setPositionsNumber(inputFields.positionsNumber)
    setTotalPLNumber(inputFields.totalPLNumber)
    setRealised(inputFields.realised)
    setUnrealised(inputFields.unrealised)
    setQuantity(inputFields.quantity)
    setSellAvg(inputFields.sellAvg)
    setBuyAvg(inputFields.buyAvg)
    setItemName(inputFields.itemName)
    setItemNameTotal(inputFields.itemNameTotal)
    setDivision(inputFields.division)
    setLtp(inputFields.ltp)
    setGrandTotal(inputFields.grandTotal)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.details_form}>
      <h2 className={styles.title}>Inputs</h2>
      <div className={styles.gridContainer}>
        {Object.keys(inputFields).map((key) => (
          <div key={key} className={styles.form_group}>
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type='text'
              id={key}
              name={key}
              value={inputFields[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <button type='submit' className={styles.submit_btn}>
        Submit
      </button>
    </form>
  )
}

export default DetailsInput
