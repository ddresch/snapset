import React from 'react'
import { useSetRecoilState } from 'recoil'
import { store } from '../nft.js'
import { uploadingState } from '../Atoms.js'

const Camera = ({ getUrl }) => {

  const setUploadingState = useSetRecoilState(uploadingState)

  const upload = () => {
    setUploadingState(true)
    return new Promise(async (resolve, reject) => {
      const filePicker = document.getElementById('fileInput')

      if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
        reject('No file selected.')
        return
      }

      const myFile = filePicker.files[0]
      console.log(myFile)

      const metadata = await store(myFile)
      console.log(metadata)

      setUploadingState(false)
      resolve(metadata)
    })
  }

  return (
    <input
      id="fileInput"
      type="file"
      accept="image/x-png,image/jpeg,image/gif"
      capture="environment"
      onChange={async () => {
        getUrl(await upload())
      }}
    />
  )
}

export default Camera
