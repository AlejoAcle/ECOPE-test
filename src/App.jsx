import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { UsersList } from './components/UserList'
import { UserDetails } from './components/UserDetails'

function App() {
  

  return (
    <Router>
      <Routes>
      <Route  exact path="/" Component={UsersList} />
      <Route path='/users/:userId' Component={UserDetails} />
      </Routes>
    </Router>
   
  )
}

export default App
