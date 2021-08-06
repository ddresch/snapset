// Polyfills
import './utils/BigInt.js'

import React from 'react'
import './App.css'
import Camera from './components/camera'

function App() {
  return (
    <div className="App">
      <Camera />
    </div>
  )
}

export default App
