// Libs and Polyfills
import './utils/BigInt.js'
import React, { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useRecoilValue } from 'recoil'
// App components
import appLogo from './styles/app-logo.png'
import logo from './logo.svg'
import './App.css'
import Camera from './components/Camera'
import { SnapsetContractAddress, SnapTokenContractAddress } from './constants/addresses'
import Snapset from './build/contracts/Snapset.json'
import { accountConnectionState } from './Atoms.js'
import ConnectWallet from './components/ConnectWallet.jsx'

const ipfsGateway = 'ipfs.dweb.link'

function App() {
  const [url, setUrl] = useState(logo)
  const accountConnected = useRecoilValue(accountConnectionState);

  async function createSnapset(url) {
    // let's connect the users wallet
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    const signerAddress = await signer.getAddress();
    // create the Snapset NFT
    let contract = new ethers.Contract(SnapsetContractAddress, Snapset.abi, signer)
    let transaction = await contract.createSnapset(signerAddress, url, SnapTokenContractAddress)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={appLogo} className="App-logo" alt="Snapset Logo" />        
      </header>
      {(!accountConnected) &&
        <div>
          <p>Please Connect Your Wallet</p>          
        </div>        
      }
      <ConnectWallet />
      {(accountConnected) && 
        <>
          <img src={url} alt="user taken nft" />
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
          {(url.indexOf(ipfsGateway) > -1) &&
            <button onClick={() => createSnapset(url)}>Mint NFT</button>
          }
        </>
      }          
    </div>
  )
}

export default App
