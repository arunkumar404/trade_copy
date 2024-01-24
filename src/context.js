import { createContext, useContext, useState } from 'react'

const InputContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [holdingNumber, setHoldingNumber] = useState('0')
  const [positionsNumber, setPositionsNumber] = useState('0')
  const [totalPLNumber, setTotalPLNumber] = useState('7,375.00')
  const [realisedPLNumber, setRealised] = useState('7,375.00')
  const [unrealisedPLNumber, setUnrealised] = useState('0.00')
  const [quantity, setQuantity] = useState('0')
  const [sellAvg, setSellAvg] = useState('97.30')
  const [buyAvg, setBuyAvg] = useState('82.55')
  const [itemName, setItemName] = useState('NIFTY 14TH DEC 20900 PE')
  const [itemNameTotal, setItemNameTotal] = useState('7,375.00')
  const [division, setDivision] = useState('NFO')
  const [ltp, setLtp] = useState('95.90')
  const [grandTotal, setGrandTotal] = useState('7,375.00')
  const [changeButton, setChangeButton] = useState('MIS')

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
        changeButton,
        setChangeButton,
      }}
    >
      {children}
    </InputContext.Provider>
  )
}

export const useInputContext = () => useContext(InputContext)
