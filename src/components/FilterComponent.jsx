import React from 'react'
import {Slider} from "@material-ui/core";
import { useState } from "react";
import  '../styles/Filter.css'

function FilterComponent() {
    const[min,setMin]=useState(0)
    const[max,setMax]= useState(200000)
const[val,setVal]= useState([4000,50000]);

const updateVal = (e,[min,max]) =>{
    setMin(min)
    setMax(max)
    setVal([min,max])
    console.log([min,max]);
}
  return <>
     <div className='filterBox'>
        <div className='oneLine'><span className='left brands'>Brands</span><span className='right viewall'>View All</span></div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> Samsung</label></div> <span className='right' >45</span> </div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> Apple</label></div> <span className='right' >21</span> </div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> Oppo</label></div> <span className='right' >70</span> </div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> Vivo</label></div> <span className='right' >56</span> </div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> Mi</label></div> <span className='right' >23</span> </div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> OnePlus</label></div> <span className='right' >46</span> </div>
        <div className='companyNameLine'> <div className='left'><input type="checkbox" /><label> Lava</label></div> <span className='right' >78</span> </div>
        <hr className='hr'></hr>
        <div className='left price'>Price</div>
        <div className="pricerange left"> <span className='FCspan'>&#8377; {min} </span><span className='FCspan'>- &#8377; {max}</span></div>
                    <Slider id='slidercomp' value={val} max={100000} onChange={updateVal} />
                    <div className='lastLine'><span className='left range'>&#8377;0</span> <span className='right range'>&#8377;2 Lakh</span></div>

        
     </div>

  </>
}

export default FilterComponent