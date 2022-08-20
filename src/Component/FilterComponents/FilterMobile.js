import React from "react"
import "../App1.css"
function FilterMobile(props)
{
   return(
    <>
    <div className="filter">
      <div className="inside-filter" id="items">{props.arr.length} Items</div>
         <div className="inside-filter" id="sort">
            <span>Sort By  </span>
            <select value={props.sort} style={{backgroundColor:"rgb(241, 240, 240)",outline:"none",border:"0"}} name="sort" onChange={(event)=>props.sortProducts(event)}>
            <option>Latest</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
            </select>    
         </div>
         <div className="inside-filter" id="grid-filter">
            <span style={{marginRight:"15px"}}><i className="fa fa-th" aria-hidden="true"></i></span> 
            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
      </div>
      <div className="inside-filter" id="normal-filter" onClick={()=>props.filterMobileView()}>
         <i className="fa fa-filter"></i>
         Filter
      </div>
   </div>
    </>
   ) 
}
export default FilterMobile