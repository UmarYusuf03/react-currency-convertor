import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: 'url(https://www.moneydigest.com/img/gallery/heres-how-much-money-really-exists-in-the-world/l-intro-1704559079.jpg)'}}>
      <h1>Test</h1>
    </div>
  )
}

export default App
