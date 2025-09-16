import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator2 = () => {
    const[searchParamQR, setSearchParamQR]=useState('')
    const[qrCode3, setQrCode3]=useState('')
    const[showQr, setShowQr]=useState(false)
    function handleClick(){
        if(searchParamQR===''){
            setShowQr(false)
            return
        }
        setQrCode3(searchParamQR)
        setShowQr(true)
        setSearchParamQR('')
    }
  return (
    <div className='QRCodeGenerator2Wrapper' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
       <input type='text'value={searchParamQR} placeholder='search...' onChange={(e)=>setSearchParamQR(e.target.value)}></input>
       <button onClick={handleClick}>Search</button>
     { showQr && <QRCode size={400} id='qr-code' value={qrCode3}/>}
    </div>
  )
}

export default QRCodeGenerator2
