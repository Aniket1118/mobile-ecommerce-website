import React from 'react'
import errorImg from "../Images/errorImg.png"
import mobile from "../Images/Bitmap.png"
import "../styles/Error.css"
function ErrorPage() {
  return <>
    <div className='nav'></div>

<div className='OPorderInfo'>
<div className='OPup'>
<img src={errorImg}  className="OPsucessTick"  alt="error" />
<p className='EPline1'>Oh uh</p>
<p className='OPline2'>Order Failed</p>
</div>
<div className='OPInfos'>

</div>

<div className='OPnumberOfItems'>2 items</div>

<div className='OPdown'>
  <div className='OPleft'>
  <div className='OPsmallImgContainer'><img className='OPsmallImg' src={mobile} alt="error" /> 
   </div>
   <span  className='OPdeviceName' >Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)
   <br />
   <span   className='OPmobilecolor' >midnight black</span>
   <br />
   <span className='OPmobilePrice'> &#8377;20000</span>
   
   </span>
 
  </div>
  <div className='OPright'>
  <div className='OPsmallImgContainer'><img className='OPsmallImg' src={mobile} alt="error" /> 
   </div>
   <span  className='OPdeviceName'>Apple iPhone 13 Pro (128GB ROM, 6GB RAM, MNE23HN/A, Alpine Green)
   <br />
   <span  className='OPmobilecolor'>midnight black</span>
   <br />
   <span  className='OPmobilePrice'>₹113,900</span>
   
   </span>
  </div>
</div>
<div className='OPlastrow'>
  <button className='OPbtn' >
   <span className='OPbtntext' > Try Again</span>
  </button>
</div>

</div>

<div className='OPrightDiv'>
<div className='OPdelieverTo'>
<div className='OPspanDeliever' >Deliever to</div>
<div className='OPnameOfBuyer'>Vijay Bisht</div>
<div className='OPbuyerAddress'>101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306</div>

</div>
<br />
<div className='OPbillDetails'>
<div  className='OPspanDeliever'>Bill Details</div>

<div className='OPlines'>
<span className='OPitem'  >Item Total</span> <span>112278</span> 
</div>
<div className='OPlines'><span className='OPitem'  >taxes and charges</span> <span className='OPitem' >250</span></div>

<hr />
<div className='OPlines'><span>Total Amount</span> <span className='OPspanTotal' >1,2580.00</span>
</div>
<div className='OPbtnRow'>
  <button className='OPbillDetailBtn' >
   <span className='OPbtntext' > Try Again</span>
  </button>
</div>


</div>
</div>



<div className='testing'>
</div>
  </>
}

export default ErrorPage