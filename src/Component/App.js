import React, { useContext, useEffect, useState } from "react"
import { ContextCart } from "./ContextCart"
import "./App1.css"
import category from "./category"
import Mobile from "./page2Components/Mobile"
import AirPods from "./page2Components/AirPods"
import MobileCases from "./page2Components/MobileCases"
import Headphone from "./page2Components/Headphone"
import Charger from "./page2Components/Charger"
function App(props)
{
    
    const [count,setCount]=useState({value:{min:15,max:900}})
    const obj=useContext(ContextCart)
    const [name,setState]=useState("Mobile")
    function Change(event)
    {
        const val=event.target.value
      
        setCount((prevState)=>
        {
            return{
                ...prevState,
                value:{
                    ...prevState.value,
                    max:val
                }
            }
        })
    }
    useEffect(()=>
    {
        console.log("useEffect")
        obj.callreducer({type:"total-quantity"})
    },[obj.arr])
    switch(name)
    {
        case "Mobile": var child=<Mobile/>
        var length=category[0].quantity
        break
        case "AirPods":var child=<AirPods/>
        var length=category[1].quantity
        break
        case "Mobile Cases":var child=<MobileCases/>
        var length=category[2].quantity
        break   
        case "Headphones":var child=<Headphone/>
        var length=category[3].quantity
        break
        case "Charging Devices":var child=<Charger/>
        var length=category[4].quantity
        break
    }
    
    return(
        <>
        {console.log(name)}
        <div className="page2">
        <div className="page2-container">
            <div className="side-container">
                <div className="outside-category">
                    <div style={{fontWeight:"800"}}>ACCESSORIES</div>
                    <div className="category">
                        {
                            category.map((subCategory)=>
                                <div style={{cursor:"pointer"}} className="sub-category" key={subCategory.id} onClick={()=>setState(subCategory.name)}>
                                <div>{subCategory.name}</div>
                                <div>{subCategory.quantity}</div>
                            </div>
                           
                            )
                        }
                    </div>
                </div>
                <div className="outside-category">
                    <div style={{fontWeight:"800"}}>COLOR</div>
                    <div className="colors">
                        <div><i style={{color:"blue"}} className="fas fa-circle"></i></div>
                        <div><i style={{color:"red"}} className="fas fa-circle"></i></div>
                        <div><i style={{color:"yellow"}} className="fas fa-circle"></i></div>
                        <div><i style={{color:"pink"}} className="fas fa-circle"></i></div>
                        <div><i style={{color:"black"}} className="fas fa-circle"></i></div>
                        <div><i style={{color:"green"}} className="fas fa-circle"></i></div>
                    </div>
                </div>
                <div className="outside-category">
                    <div style={{fontWeight:"800"}}>PRICES</div>
                    <div>Ranger:  {count.value.min} - {count.value.max}</div>
                    <input style={{width:"70%",outline:"none"}} type="range" min={15} max={900} value={count.value} onChange={(event)=>{Change(event)}}/>
                </div>
                <div className="outside-category">
                <div style={{fontWeight:"800"}}>BRAND</div>
                    <div className="category">
                        {
                            category.map((subCategory)=>
                            <div className="sub-category" key={subCategory.id}>
                                <div>{subCategory.name}</div>
                                <div>{subCategory.quantity}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div style={{textAlign:"center"}} className="outside-category">MORE</div>
            </div>
            <div className="main-container">
                
                <div className="page2-image">
                    <div style={{fontSize:"2rem",paddingLeft:"20px",marginTop:"20px",marginBottom:"20px",color:"white"}}>iPhone 8</div>
                    <div style={{paddingLeft:"20px",marginTop:"10px",marginBottom:"20px",color:"white"}}>Performance and design. Taken right to the edge.</div>
                    <div style={{borderBottom:"2px solid white",fontWeight:"900",display:"inline-block",marginBottom:"20px",marginLeft:"20px",color:"white"}}>SHOP NOW</div>
                </div>
                
                <div className="outside-shopping-container">
                    {child}
                </div>
                <div></div>
            </div>
                
        </div>
        </div>
        </>
    )
}
export default App