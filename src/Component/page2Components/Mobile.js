import React,{useContext, useState} from "react"
import { ContextCart } from "../ContextCart"
import products from "../products"
import "../App1.css"
import FilterMobile from "../FilterComponents/FilterMobile"
function Mobile(props)
{
    const obj=useContext(ContextCart)
    const [state,setState]=useState({arr:products})
    function sortProducts(event)
    {
        const sortValue=event.target.value
        setState((prevState)=>
        {
            return{
                arr:products.slice().sort((a,b)=>
                sortValue==="Lowest"?
                ((a.price>b.price)?1:-1):
                sortValue==="Highest"?
                ((a.price<b.price)?1:-1):
                ((a.id>b.id)?1:-1)
                )
            }
        })
    }
    return(
        <>
        {console.log("mobile")}
        <FilterMobile sortProducts={sortProducts} arr={state.arr} />
        <div className="shopping-container">
            {console.log(state)}
            {state.arr.map((product)=>
            <div className="shopping-product" key={product.id}>
            <div className="image" onClick={()=>obj.callreducer({type:"add-item",payload:product})}>
            <img style={{width:"99px",height:"196px"}} src={product.img} alt="image not found"/>
            </div>
            <div>{product.name}</div>
            <div>Rating</div>
            <div>${product.price}</div>
            </div>
            )
            }
        </div>
        </>
    )
}
export default Mobile