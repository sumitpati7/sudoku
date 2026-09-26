import { Outlet } from 'react-router'
import Navbar from '@components/Navbar'
import { useState } from 'react'

const startNewGame = () => {
  console.log("START NEW GAME")
}

const openSettings = () => {
  console.log("OPEN SETTINGS")
}

export default function App() {
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | 'Expert'>('Easy')
  return (
    <div className='bg-surface-container-lowest'>
      <Navbar
        difficulty={difficulty}
        onDifficultyChange={(d) => setDifficulty(d)}
        time="11:15"
        mistakes={0}
        onNewGame={startNewGame}
        onSettings={openSettings}
      />
      <Outlet />
    </div>
  )
}