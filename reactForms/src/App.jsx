import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YoutubeForm from './components/YoutubeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   
     <YoutubeForm />
    
  )
}

export default App
