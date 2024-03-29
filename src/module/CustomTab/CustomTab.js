import { Tab, Tabs } from '@mui/material'
import React from 'react'
import { useInputContext } from '../../context'

const CustomTab = () => {
  const { holdingNumber, positionsNumber } = useInputContext()

  return (
    <Tabs
      value={1}
      sx={{
        '& .MuiTab-root': {
          color: '#ffffff',
          textTransform: 'none',
          minWidth: '8.5rem',
        },
        '& .MuiTabs-flexContainer': {
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1rem',
        },
        '& .Mui-selected': {
          color: '#28609b !important',
        },
        '& .MuiTabs-indicator': {
          top: '90%',
          
        },
      }}
    >
      <Tab label={`Holdings (${holdingNumber})`} />
      <Tab label={`Positions (${positionsNumber})`} />
    </Tabs>
  )
}

export default CustomTab
