import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-3xl text-red-200'>Sudoku</div>
  )
}

export default App
