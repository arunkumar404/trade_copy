import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const CustomTab = () => {
  const [tabData, setTabData] = useState([6,1])
  return (
    <Tabs
      value={1}
      sx={{
        '& .MuiTab-root': {
          color: '#ffffff',
          textTransform: 'none',
          minWidth: '9rem',
        },
        '& .MuiTabs-flexContainer': {
          justifyContent: 'center',
          gap: '2rem',
          marginTop:'1rem'
        },
        '& .Mui-selected': {
          color: '#28609b !important',
        },
      }}
    >
      <Tab label={`Holdings (${tabData[0]})`} />
      <Tab label={`Positions (${tabData[1]})`} />
    </Tabs>
  )
}

export default CustomTab
