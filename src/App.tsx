import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { LoginContext } from './Contexts/LoginContext'

function App() {
  const [userName, setUserName] = useState("")
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <LoginContext.Provider value={{ userName, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </>
  )
}

export default App

