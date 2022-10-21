import React from 'react'
import Filter from "./FilterComponent"
import SingleMobile from './SingleMobile'
import filter1 from "../Images/Group 40416.png"
import sortIcon from "../Images/Group.png"
import "../styles/productlistingpage.css"


function ProductListingPage() {
  return <>
  <div className='productionuse'> </div>
<div className='PLPcontainer'>
<div className='PLPtop'>
    <span className='PLPfilters'>Filters</span><span className='PLPallmobiles'>All Mobile Phones</span>
    <div className='PLPpricerangeSelect'>
    <div className="no2">Sort by 
                    <select name="sortby" id="sortby">
                        <option value="lowtohigh">Price-Low to high</option>
                        <option value="hightolow">Price -High to low</option>
                    </select>
                </div>
    </div>
</div>
<div className='PLPresponsivetop'>
  <div className='responsiveFilter'>
    <img src={filter1} alt="oops error bro"/>Filters
  </div>
  <div className='responsiveSortby'>
  <img src={sortIcon} alt="oops sorry bro" />Sort by

  </div>
</div>
<Filter />  
<div className='PLPallmobilesContainer'>
<SingleMobile />
<SingleMobile />
<SingleMobile />
<SingleMobile />
<SingleMobile />
<SingleMobile />


</div>

{/* <div className='pruse'></div> */}
</div>
  </>
}

export default ProductListingPage