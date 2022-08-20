import React, { useContext, useEffect } from "react"
import {NavLink} from "react-router-dom"
import products from "./products"
import { ContextCart } from "./ContextCart"
import "./App.css"
function App2()
{
    
    const obj=useContext(ContextCart)
    useEffect(()=>
    {
        {console.log("App2")}
        obj.callreducer({type:"total-quantity"})
    },[obj.arr])
    return(
        <>
        <div className="container">
                {products.map((product)=>
                <div className="card" key={product.id }>
                <img src={product.img} alt="image not found"/>
                <div>price:{product.price}</div>
                <div>{product.name}</div>
                <button onClick={()=>obj.callreducer({type:"add-item",payload:product})}>Add To Cart</button>
                </div>
                )}
        </div>
        <NavLink to="/context/cart"><div>Cart<div>{obj.quantity}</div></div></NavLink>
        
        </>
    )
}
export default App2