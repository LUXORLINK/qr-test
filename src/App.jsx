import { useState } from 'react'
import './App.css'
import QRCode from 'qrcode'
import LiveQrCode from './components/live-qr-code'
import BasicInput from './ui/basic-input'

export const App = () => {
 const [qrText, setQrText] = useState('')
 const [qrCode, setQrCode] = useState('')

 const generateQrCode = () => {
  QRCode.toDataURL(
    qrText,
    {
      width:900,
      height:3,
    },
    (err, url) => {
      if (err) return console.log(err) 
        setQrCode(url)
    }
  )
 }

 const handleQrCode = (e) => {
  setQrText(e.target.value)
  generateQrCode()
 }

  return (
    <>
       <LiveQrCode value={qrText}/>

       <BasicInput 
        label='qr-kode-text'
        type='text' 
        value={qrText}
        onChange={handleQrCode} 
        style={{margin:20}} 
        />
        <br />
        <a href={qrCode} download={`${qrText}.png`}>download</a>

    </>
  )
}

export default App
