import { createContext, useContext, useState } from 'react'

const InputContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [holdingNumber, setHoldingNumber] = useState('')
  const [positionsNumber, setPositionsNumber] = useState('')
  const [totalPLNumber, setTotalPLNumber] = useState('')
  const [realisedPLNumber, setRealised] = useState('')
  const [unrealisedPLNumber, setUnrealised] = useState('')
  const [quantity, setQuantity] = useState('')
  const [sellAvg, setSellAvg] = useState('')
  const [buyAvg, setBuyAvg] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemNameTotal, setItemNameTotal] = useState('')
  const [division, setDivision] = useState('')
  const [ltp, setLtp] = useState('')
  const [grandTotal, setGrandTotal] = useState('')

  return (
    <InputContext.Provider
      value={{
        holdingNumber,
        setHoldingNumber,
        positionsNumber,
        setPositionsNumber,
        totalPLNumber,
        setTotalPLNumber,
        realisedPLNumber,
        setRealised,
        unrealisedPLNumber,
        setUnrealised,
        quantity,
        setQuantity,
        sellAvg,
        setSellAvg,
        buyAvg,
        setBuyAvg,
        itemName,
        setItemName,
        itemNameTotal,
        setItemNameTotal,
        division,
        setDivision,
        ltp,
        setLtp,
        grandTotal,
        setGrandTotal,
      }}
    >
      {children}
    </InputContext.Provider>
  )
}

export const useInputContext = () => useContext(InputContext)
