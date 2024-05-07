import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import LoginPage from './views/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
