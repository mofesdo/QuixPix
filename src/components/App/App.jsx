import { useState } from 'react'

import './App.css'

import Header from "../Header/Header"
import Main from '../Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="title">Hi</h1>
    <Header/>
    <Main/>
    </>
  )
}

export default App
