    import React from 'react'
    import "../styles/Demo.css"
    function DemoPage() {
      return <>
    <div className='voline'>
        <div className='orderdiv'>
            <span className='orderNo'>Order No.</span>
            <span className='orderNum'>597365</span>
        </div>
        <span className='dot'></span>
       <div className='nextLine'>
       <div className='dateDiv'>
            <span className='datespan'>Date:</span>
            <span className='dateNum'>29July 2018</span>
        </div>
        <div className='PaymentDiv'>
            <span className='paySpan'>Payment:</span>
            <span className='cod'>Cash on Delievery</span>
        </div>
       </div>
    </div>

      </>
      
      
    }
    
    export default DemoPage