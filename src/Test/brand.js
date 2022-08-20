import React from "react"
import category from "./Category"
function BrandApp()
{
    return(
        <>
        {category[0].brand.map((item,index)=>
                            {
                                return(
                                    <div style={{cursor:"pointer"}} className="sub-category" key={index}>
                                    <div className="color-highlight3" id={`${index}`} >{item}</div>
                                    </div>
                                )
                            })}
        </>
    )
}
export default BrandApp