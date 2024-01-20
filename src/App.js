import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from './context'
import MainScreen from './module/MainScreen/MainScreen'
import DetailsInput from './module/DetailsInput/DetailsInput'

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/screen' element={<MainScreen />} />
        <Route path='/' element={<DetailsInput />} />
      </Routes>
    </ContextProvider>
  )
}

export default App
