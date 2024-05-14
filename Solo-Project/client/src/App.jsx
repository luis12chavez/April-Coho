import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import LoginPage from './views/LoginPage'
import Dashboard from './views/Dashboard'
import Header from './components/Header'
import CreatePost from './views/CreatePost'
import AccountDetail from './views/AccountDetail'
import RunDetails from './views/RunDetails'
import EditRun from './views/EditRun'

function App() {
  
  const [currentAccount, setCurrentAccount] = useState({})

  const accountUpdater = (newAccount) => {
    setCurrentAccount(newAccount)
  } 

  const [currentRun, setCurrentRun] = useState([])
  const runUpdater = (newRun) => {
    setCurrentRun(newRun)
  }

  return (
    <div class="container">
        <BrowserRouter>
          <Header currentAccount={currentAccount} runUpdater={runUpdater} />
          <Routes>
            <Route path='/' element={<LoginPage accountUpdater={accountUpdater} />}/>
            <Route path='/home' element={<Dashboard currentAccount={currentAccount} accountUpdater={accountUpdater} currentRun={currentRun} runUpdater={runUpdater}/>} />
            <Route path='/run/new' element={<CreatePost />} />
            <Route path='/users/:id/profile' element={<AccountDetail />} />
            <Route path='/run/:id/details' element={<RunDetails />} />
            <Route path='/runs/:id/edit' element={<EditRun />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
