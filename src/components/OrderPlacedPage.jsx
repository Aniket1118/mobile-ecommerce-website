import React from 'react'
import "../styles/OrderPlacedPage.css"
import sucessTick from "../Images/sucessTick.png"
import dot from "../Images/dot.png"
import mobile from "../Images/Bitmap.png"

function OrderPlacedPage() {
  return <>

  <div className='nav'></div>

    <div className='OPorderInfo'>
    <div className='OPup'>
    <img src={sucessTick}  className="OPsucessTick"  alt="error" />
    <p className='OPline1'>Congratulations!!!</p>
    <p className='OPline2'>Order Placed Sucessfully</p>
    </div>
<div className='OPInfos'>
<div className='OPvoline'>
        <div className='OPorderdiv'>
            <span className='OPorderNo'>Order No.</span>
            <span className='OPorderNum'>597365</span>
        </div>
        <img className='OPdot' src={dot}  alt="error" />
       <div className='OPnextLine'>
       <div className='OPdateDiv'>
            <span className='OPdatespan'>Date:</span>
            <span className='OPdateNum'>29July 2018</span>
        </div>
        <img className='OPdot' src={dot}  alt="error" />
        <div className='OPPaymentDiv'>
            <span className='OPpaySpan'>Payment:</span>
            <span className='OPcod'>Cash on Delievery</span>
        </div>
       </div>
    </div>




{/* <p className='OPline3'><span className='OPorderNo'>Order No.</span><span className='OPorderNum'>4757532490967</span>
    <img className='OPdot' src={dot}  alt="error" />
   <span className='OPwrapper1'> <span className='OPdate'>Date:</span><span className='OPdateAndYear'>29 July 2022</span></span>
    <img className='OPdot' src={dot}  alt="error" />
  <span className='OPwrapper2'>
  <span className='OPpayment'>Payment</span>
    <span className='OPcod'>Cash on Delivery</span> 
  </span>
    </p> */}
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
       <span className='OPbtntext' > continue shopping</span>
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
       <span className='OPbtntext' > continue shopping</span>
      </button>
    </div>


</div>
  </div>



    <div className='testing'>
    </div>
  </>
   
  
}

export default OrderPlacedPage