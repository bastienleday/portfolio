import { useState, useEffect } from 'react'

import './App.css'
import Home from './components/Home'
import Loader from './components/Loader.jsx'



function App() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])


  return loading ? <Loader /> : <Home />
}

export default App
