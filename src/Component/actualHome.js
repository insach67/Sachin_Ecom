import React, { useContext,useState } from "react"
import { NavLink } from "react-router-dom"
import "./actualHome.css"
import StarRating from "../Test/StarRating";
import products from "../Data/AppleData";
import { ContextCart } from "./ContextCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Test/NavBar"
import fp from "../Data/FeaturedProducts"
import Footer from "../Test/Footer"
function Home()
{
    const [arr,setArr]=useState(products.slice(0,5))
    const [state,setArr1]=useState({arr1:fp.slice(0,3)})
    const [state2,setArr2]=useState({arr2:fp.slice(0,1)})
    const [index,setIndex]=useState(0)
    const obj=useContext(ContextCart)
    function handleChange(sign)
    {
        if(sign==="+")
        {
            if(index<9)
        {
            setIndex((prevState)=>prevState+1)
            
            setArr1(()=>
            {
                return{
                    arr1:fp.slice((index+1)*3,((index+1)*3)+3)
                }
            })
            }
        }
        else
        {
            if(index>0)
            {
                setIndex((prevState)=>prevState-1)
                setArr1(()=>
                {
                    return{
                        arr1:fp.slice((index-1)*3,((index-1)*3)+3)
                    }
                })
            }
        }
    }
    function handleChange2(sign)
    {
        if(sign==="+")
        {
            if(index<29)
        {
            setIndex((prevState)=>prevState+1)
            
            setArr2(()=>
            {
                return{
                    arr2:fp.slice(index+1,index+2)
                }
            })
            }
        }
        else
        {
            if(index>0)
            {
                setIndex((prevState)=>prevState-1)
                setArr2(()=>
                {
                    return{
                        arr2:fp.slice(index-1,index)
                    }
                })
            }
        }
    }
    function handleClick(id)
    {
        var a=document.querySelectorAll(".checkid")
        for(var i=0;i<=a.length-1;i++)
        {
            if(a[i].getAttribute("id")===id)
            {
                a[i].style.color="rgba(50, 101, 240, 0.966)"
                a[i].style.textDecoration="underline"
            }
            else{
                a[i].style.color="inherit"
                a[i].style.textDecoration="none"
            }
        }
        const updatedArr=products.slice(id*5,(id*5)+5)
        setArr(updatedArr)
    }
    function handleClick2(event)
    {
        var id=event.target.value
        const updatedArr=products.slice(id*5,(id*5)+5)
        setArr(updatedArr)
    }
    
    return(
        <>
        <div className="home-container">
        <NavBar></NavBar>
        <div className="main-image" style={{height:"400px"}}></div>
        <div style={{textAlign:"center",fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"1.4rem",marginTop:"60px",marginBottom:"20px"}}>BEST SELLER</div>
        <div className="best-seller">
            <div className="checkid" id="0" onClick={()=>handleClick("0")}>All</div>
            <div className="checkid" id="1" onClick={()=>handleClick("1")}>Mac</div>
            <div className="checkid" id="2" onClick={()=>handleClick("2")}>iPhone</div>
            <div className="checkid" id="3" onClick={()=>handleClick("3")}>iPad</div>
            <div className="checkid" id="4" onClick={()=>handleClick("4")}>iPod</div>
            <div className="checkid" id="5" onClick={()=>handleClick("5")}>Accessories</div>
        </div>
        <div className="best-seller2">
            <select onChange={(event)=>handleClick2(event)}>
                <option value="0">All</option>
                <option value="1">Mac</option>
                <option value="2">iPhone</option>
                <option value="3">iPad</option>
                <option value="4">iPod</option>
                <option value="5">Accessories</option>
            </select>
        </div>
        {console.log(arr)}
        <div className="best-item-container">
                {
                arr.map((product,index)=>
                <div className="best-item" key={index}>
                <div className="hot">DEALS</div>
                <div className="cart-hover">
                    <FontAwesomeIcon className="icon-hover1" style={{marginRight:"10px"}} icon={faHeart} ></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon-hover2" icon={faShoppingCart} onClick={()=>obj.callreducer({type:"add-item",payload:product})}></FontAwesomeIcon>
                </div>
                <div className="image">
                <img style={{width:"99px",height:"196px"}} src={product.img} alt="not found"/>
                </div>
                <div className="name-design">{product.name}</div>
                <div>
                <StarRating key={index}/>
                </div>
                <div>
                <span style={{color:"red",marginRight:"5px"}}>${product.price}</span>
                <span style={{color:"grey",textDecoration:"line-through"}}>{product.discount}</span>
                </div>
                </div>
                )
                }
        </div>
        <div className="load"  style={{color:"rgb(44, 162, 216)",textDecoration:"underline",textAlign:"center",fontWeight:"bolder",fontSize:"1.2rem",margin:"60px 0px"}}><NavLink style={{color:"inherit"}} to="/app/AirPods & Wireless">Load More</NavLink></div>
        <div style={{height:"400px"}} className="cover-image">
            <div className="iPhone">iPhone 13 Plus</div>
            <div className="performance">Performance and design. Taken right to the edge.</div>
            <div className="shop-now"><NavLink style={{color:"inherit"}} to="/app/AirPods & Wireless">SHOP NOW</NavLink></div>
        </div>
        <div className="shipping">
            <div className="inside-shipping">
                <div className="logo"><i className="fas fa-shipping-fast fa-3x"></i></div>
                <div className="para">FREE SHIPPPING</div>
                <div className="para-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </div>
            </div>
            <div className="inside-shipping">
                <div className="logo"><i className="fas fa-dollar-sign fa-3x"></i></div>
                <div className="para">100% REFUND</div>
                <div className="para-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </div>
            </div>
            <div className="inside-shipping">
                <div className="logo"><i className="fas fa-headset fa-3x "></i></div>
                <div className="para">SUPPORT 24/7</div>
                <div className="para-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </div>
            </div>
        </div>
        <div className="featured-pro" style={{}}>FEATURED PRODUCTS</div>
        <div className="featured-container">
        <div className="inside-featured-container" onClick={()=>handleChange("-")}><i className="fas fa-less-than fa-3x"></i></div>
        {console.log(state.arr1)}
        {console.log(index)}
        <div className="featured-products inside-featured-container">
            {
                state.arr1.map((item,index)=>
                {
                    return(
                        <div className="featured-item" key={index}>
                            <div><img style={{width:"60px",height:"100px"}} src={item.img}></img></div>
                            <div style={{width:"70%",margin:"10px 0px",fontSize:"0.9rem"}}>
                                <div>{item.name}</div>
                                <div>
                                <StarRating key={item.id}/>
                                </div>
                                <div>
                                <span style={{color:"red",marginRight:"5px"}}>${item.price}</span>
                                <span style={{color:"grey",textDecoration:"line-through"}}>{item.discount}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="inside-fetaured-container" onClick={()=>handleChange("+")}><i className="fas fa-greater-than fa-3x"></i></div>
        </div>
        <div className="featured-container2">
        <div className="inside-featured-container" onClick={()=>handleChange2("-")}><i className="fas fa-less-than fa-3x"></i></div>
        <div className="featured-products inside-featured-container">
            {
                state2.arr2.map((item,index)=>
                {
                    return(
                        <div className="featured-item" key={index}>
                            <div><img style={{width:"60px",height:"100px"}} src={item.img}></img></div>
                            <div style={{width:"70%",margin:"10px 0px",fontSize:"0.9rem"}}>
                                <div>{item.name}</div>
                                <div>
                                    <StarRating key={item.id}></StarRating>
                                </div>
                                <div>
                                <span style={{color:"red",marginRight:"5px"}}>${item.price}</span>
                                <span style={{color:"grey",textDecoration:"line-through"}}>{item.discount}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="inside-fetaured-container" onClick={()=>handleChange2("+")}><i className="fas fa-greater-than fa-3x"></i></div>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}
export default Home