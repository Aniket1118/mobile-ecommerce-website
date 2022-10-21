import React from 'react'
import "../styles/SingleMobile.css"
import redmiphone from "../Images/Bitmap.png"

function SingleMobile() {
  return <>
<div className='SMcontainer'>
<img className='img' src={redmiphone} alt='error' />
<div className='SMcashback'>12% Cashback</div>
<div className='SMphoneName'>Samsung Galaxy Note 10 Plus(Aura Black , 256 GB)</div>
<div className='SMprice'>
<span className='SMactualprice'>&#8377;37,500</span>
<span className='SMcutprice'>&#8377;39000</span>
<span className='SMoffer'>16% Off</span></div>
<span className='SMEMIoffer'>EMI Starts at @ &#8377;1356</span>
</div>
  </>


  
}

export default SingleMobile