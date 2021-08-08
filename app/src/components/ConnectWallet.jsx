import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Authereum from "authereum"
import UniLogin from "@unilogin/provider"
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider"
// App components
import { accountConnectionState, accountSignerState, accountAddressState } from '../Atoms.js'

const providerOptions = {
    walletconnect: { package: WalletConnectProvider, options: {
        infuraId: "a9a8ac40ec884877b9b38cbc765efed9",
        // bridge: "http://192.168.0.132:8545",
        rpc: {
            1337: "http://192.168.0.132:8545",                
        },
    }},
    authereum: { package: Authereum },
    unilogin: { package: UniLogin },
    burnerconnect: { package: BurnerConnectProvider }
}

const modalOptions = {
    theme: {
        background: "#1a1a1a",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "#1f1f1f"
    },
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions
}

// window.w3Modal = w3Modal

const ConnectWallet = () => {

    const [accountConnected, setAccountConnectionState] = useRecoilState(accountConnectionState);
    const setAccountSignerState = useSetRecoilState(accountSignerState);
    const [accountAddress, setAccountAddressState] = useRecoilState(accountAddressState);
    
    const web3Modal = new Web3Modal(modalOptions)

    const connect = async () => {
        const modal = await web3Modal.toggleModal()
        const connection = await web3Modal.connect();
        console.log(connection)        
        const provider = new ethers.providers.Web3Provider(connection)    
        const signer = provider.getSigner()
        const signerAddress = await signer.getAddress()
        console.log(signerAddress)
        setAccountConnectionState(true)        
        setAccountAddressState(signerAddress)
        // setAccountSignerState(signer)
    }

    const disconnect = () => {
        web3Modal.clearCachedProvider();
        setAccountConnectionState(false);
        setAccountSignerState(null)
        setAccountAddressState(null)
    }

    return (<>
        {(!accountConnected) &&
            <button onClick={connect}>Connect</button>
        }
        {(accountConnected) &&
            <>
                <button onClick={disconnect}>Disconnect</button>
                <span>{accountAddress}</span>
            </>
        }
    </>)
}

export default ConnectWallet