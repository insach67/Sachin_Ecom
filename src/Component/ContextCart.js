import React, {  useReducer,createContext } from "react"
import {BrowserRouter,Route} from "react-router-dom"
import App from "../Test/testApp"
import Cart from "./Cart"
import Home from "./actualHome"
export const ContextCart=createContext()
const istate={
    items:[],
    totalQuantity:0,
    totalPrice:0
}
export const reducer=(state,action)=>
{
    
    if(action.type==="increment")
    {
        const updatedState=state.items.map((item)=>
        {
            if(item.id===action.payload)
            {
                return{
                    ...item,
                    quantity:item.quantity+1
                }
                
            }
            return{...item}
        })
        return {
            ...state,
            items:updatedState
        }  
    }   
    if(action.type==="decrement")
    {
        const updatedState=state.items.map((item)=>
        {
            if(item.quantity<=0)
            return {...item}
            if(item.id===action.payload)
            {
                return{
                    ...item,
                    quantity:item.quantity-1
                }
            }
            return{...item}
        })
        return{
            ...state,
            items:updatedState
        }
    }
    if(action.type==="remove-item")
    {
        const updatedState=state.items.filter((item)=>
        {
            if(item.id!==action.payload)
            return {...item}

        })
        return{
            ...state,
            items:updatedState
        }
    } 
    if(action.type==="add-item")
    {
        const flag=state.items.some((item)=>
        {
            if(item.id===action.payload.id)
            return true
        })
        if(flag===false)
        {
        return{
            ...state,
            items:[
                ...state.items,
                action.payload
            ]
        }
        }
        else
        return state  //Since this state is same as the previous state,it won't run the useReducer hook again and thus no rendering will happen again.It is like useState hook  where rendering happens only on state and props change.
    }
    if(action.type==="total-price")
    {
        const totalprice=state.items.reduce((accumulator,item)=>
        {
            return accumulator+(item.price*item.quantity)
        },0)
        return{
            ...state,
            totalPrice:totalprice
        }
    }
    if(action.type==="total-quantity")
    {
        const totalquantity=state.items.length
        return{
            ...state,
            totalQuantity:totalquantity
        }
    }
}
function CartState(props)
{
    const [state,dispatch]=useReducer(reducer,istate)
    return(
        <>
        <ContextCart.Provider value={{arr:state.items,quantity:state.totalQuantity,price:state.totalPrice,callreducer:dispatch}}>
             {/*console.log("parentprovider")*/} {/* To check if this also runs when we keep changing the path without updating anything*/}
            <BrowserRouter>      
                <Route exact path="/" component={Home}/>           {/*Only the BrowserRouter runs when we keep changing the path without changing any state */}
                <Route exact path="/app/:name" component={App}/>
                <Route exact path="/cart" component={Cart}/>
            </BrowserRouter>
        </ContextCart.Provider>
        </>
    )
}
export default CartState
/*<Route exact path="/"component={Home}/> */