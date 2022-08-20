import React, { useState } from "react"
import {FaStar} from "react-icons/fa"
function StarRating(props)
{
    const [rating,setRating]=useState(4)
    return(
        <>
        {[...Array(5)].map((Star,index)=>
        <label key={index}>
            <input type="radio" style={{display:"none"}} value={index+1} onClick={()=>setRating(index+1)}/>
            <FaStar color={index+1<=rating?"yellow":"grey"} size={20}></FaStar>
        </label>
        )}
        </>
    )
}
export default StarRating