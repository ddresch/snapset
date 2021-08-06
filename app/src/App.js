// Polyfills
import './utils/BigInt.js'

import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Camera from './components/camera'

const ipfsGateway = 'ipfs.dweb.link'

function App() {
  const [url, setUrl] = useState(logo)
  return (
    <div className="App">
      <header className="App-header">
        <img src={url} className="App-logo" alt="logo" />
      </header>
      <Camera
        getUrl={metadata => {
          const [, , hash, name] = metadata.data.image.href.split('/')
          const httpsUrl = ({ hash, name }) =>
            `https://${hash}.${ipfsGateway}/${name}`
          setUrl(
            httpsUrl({
              hash,
              name,
            })
          )
        }}
      />
    </div>
  )
}

export default App
