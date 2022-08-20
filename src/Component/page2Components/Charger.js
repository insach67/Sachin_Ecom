import React,{useContext} from "react"
import { ContextCart } from "../ContextCart"
import products from "../page2Components/ChargerProducts"
function Charger()
{
    const obj=useContext(ContextCart)
    return(
        <>
        {
            products.map((product)=>
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
        </>
    )
}
export default Charger