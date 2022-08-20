import React, { useContext, useEffect, useState } from "react"
import {NavLink} from "react-router-dom"
import products from "../Data/data"
import { ContextCart } from "../Component/ContextCart"
import "../Component/App1.css"
import category from "../Test/Category"
import FilterMobile from "../Component/FilterComponents/FilterMobile"
import StarRating from "./StarRating"
import NavBar from "./NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHeart, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer"
function App(props)
{
    
    const obj=useContext(ContextCart)
    const [pname,setName]=useState(props.match.params.name)
    const [index,setIndex]=useState(0)
    const [color,setColor]=useState("no")
    const [brand,setBrand]=useState("none")
    const[state,setState]=useState({arr:products,sort:"",input:0})
    function sortProducts(event)
    {
        const sortValue=event.target.value
        setState((prevState)=>
        {
            return{
                ...prevState,
                sort:sortValue,
                arr:prevState.arr.slice().sort((a,b)=>
                sortValue==="Lowest"?
                ((a.price>b.price)?1:-1):
                sortValue==="Highest"?
                ((a.price<b.price)?1:-1):
                ((a.id>b.id)?1:-1)
                )
            }
        })
    }
    function filterMobileView()
    {
        var a=document.querySelector(".side-container")
        a.classList.toggle("toggle")

    }
    function filterProducts(name,id)
    {
        var a=document.querySelectorAll(".color-highlight1")
        for(var i=0;i<=a.length-1;i++)
        {
            if(a[i].getAttribute("id")===id)
            {
                a[i].style.color="blue"
            }
            else
            a[i].style.color="inherit"
        }
        var a=document.querySelectorAll(".color-highlight3")
        for(var i=0;i<=a.length-1;i++)
        {
            a[i].style.color="inherit"
        }
        var a=document.querySelectorAll(".color-highlight2")
        for(var i=0;i<=a.length-1;i++)
        {
            a[i].style.border="2px solid Black"
        }
        setName(name)
        setColor("no")
        setBrand("none")
        const updatedArr=products.filter((product)=>
        {
            if(product.type===name)
            return {...product}
        })
        setState((prevState)=>
        {
            return{
                sort:"",
                arr:updatedArr.slice(0,5),
                input:0
            }
        })
    }
    
    function filterBrandProducts(name,id)
    {
        console.log(pname)
        var a=document.querySelectorAll(".color-highlight3")
        for(var i=0;i<=a.length-1;i++)
        {
            if(a[i].getAttribute("id")===id)
            {
                a[i].style.color="blue"
            }
            else
            a[i].style.color="inherit"
        }
        setBrand(name)
        var updatedArr=0
        if(color==="no")
        {
            if(state.input===0)
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.type===pname && product.brand===name)
                    return {...product}
                })
            }
            else
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.type===pname && product.brand===name && product.price>=state.input)
                    return {...product}
                })
            }
        }
        
        if(color!=="no")
        {
            if(state.input===0)
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.type===pname && product.brand===name && product.color===color)
                    return {...product}
                })
            }   
            else
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.type===pname && product.brand===name && product.color===color && product.price>=state.input)
                    return {...product}
                })
            }
        }
        
        console.log(updatedArr)
        setState((prevState)=>
        {
            return{
               ...prevState,
                sort:"",
                arr:updatedArr.slice(0,5),
            }
        })
    }
    function filterpriceProducts(event)
    {
        const input=event.target.value
        var updatedArr=0
        console.log(pname)
        if(color==="no")
        {
            if(brand==="none")
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.price>=input && product.type===pname)
                    return {...product}
                })
            }
            else
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.price>=input && product.type===pname && product.brand===brand)
                    return {...product}
                })
            }
        }
        if(color!=="no")
        {
            if(brand==="none")
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.price>=input && product.type===pname && product.color===color)
                    return {...product}
                })
            }
            else
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.price>=input && product.type===pname && product.color===color && product.brand===brand)
                    return {...product}
                })
            }
        }
        setState((prevState)=>
        {
            
            return{
                arr:updatedArr.slice(0,5),
                input:input,
                sort:"",
            }
        })
    }
    function filterColorProducts(name,id)
    {
        var a=document.querySelectorAll(".color-highlight2")
        for(var i=0;i<=a.length-1;i++)
        {
            if(a[i].getAttribute("id")===id)
            {
                a[i].style.border="2px solid blue"
            }
            else
            a[i].style.border="2px solid black"
        }
        console.log(a)
        console.log(pname)
        var updatedArr=0
        setColor(name)
        if(brand==="none")
        {
            if(state.input===0)
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.color===name && product.type===pname)
                    return {...product}
                })
            }
            else
            {

                updatedArr=products.filter((product)=>
                {
                    if(product.color===name && product.type===pname && product.price>=state.input)
                    return {...product}
                })
            }
        }
        if(brand!=="none")
        {
            if(state.input===0)
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.color===name && product.type===pname && product.brand===brand)
                    return {...product}
                })
            }
            else
            {
                updatedArr=products.filter((product)=>
                {
                    if(product.color===name && product.type===pname && product.brand===brand && product.price>=state.input)
                    return {...product}
                })
            }
        }
        console.log(updatedArr)
        setState((prevState)=>
        {    return{
                ...prevState,
                sort:"",
                arr:updatedArr.slice(0,5),
            }
        })
        
    }

    function Array()
    {
        console.log(color)
        if(color==="no" && state.input===0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
            {
                if(product.type===pname)
                return product
            })
        }
        if(color==="no" && state.input===0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
            {
                if(product.type===pname && product.brand===brand)
                return product
            })
        }
        if(color==="no" && state.input!==0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.price>=state.input)
            return product
        })
        }
        if(color!=="no" && state.input===0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color)
            return product
        })
        }
        
        if(color!=="no" && state.input===0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.brand===brand)
            return product
        })
        }
        if(color!=="no" && state.input!==0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.price>=state.input)
            return product
        })
        }
        if(color==="no" && state.input!==0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.brand===brand && product.price>=state.input)
            return product
        })
        }
        if(color!=="no" && state.input!==0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.price>=state.input && product.brand===brand)
            return product
        })
        }
        
        var a=(updatedArr.length/5)
        console.log(a)
        var array=[]
        for(var i=0;i<a;i++)
        array[i]=i
        console.log(array)
        return array

    }
    function handleClick(i)
    {
        if(color==="no" && state.input===0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
            {
                if(product.type===pname)
                return product
            })
        }
        if(color==="no" && state.input===0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
            {
                if(product.type===pname && product.brand===brand)
                return product
            })
        }
        if(color==="no" && state.input!==0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.price>=state.input)
            return product
        })
        }
        if(color!=="no" && state.input===0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color)
            return product
        })
        }
        
        if(color!=="no" && state.input===0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.brand===brand)
            return product
        })
        }
        if(color!=="no" && state.input!==0 && brand==="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.price>=state.input)
            return product
        })
        }
        if(color==="no" && state.input!==0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.brand===brand && product.price>=state.input)
            return product
        })
        }
        if(color!=="no" && state.input!==0 && brand!=="none")
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.price>=state.input && product.brand===brand)
            return product
        })
        }
        setState((prevState)=>
            {
                return{
                    ...prevState,
                    sort:"",
                    arr:updatedArr.slice(i*5,(i*5)+5)
                }
            })
    }
    function brandHandle()
    {
        const pd=category.filter((item)=>
            {
                return item.subCategory===pname
            }
            )
        
        return pd[0]    
    }
    useEffect(()=>
    {
        console.log("useEffect1")
        var updatedArr=products.filter((product)=>
        {
            if(product.type===pname)
            return product
        })
        console.log(updatedArr)
        setState((prevState)=>
        {
            return{
                ...prevState,
                arr:updatedArr.slice(0,5)
            }
        })
        
    },[])
    useEffect(()=>
    {
        console.log("useEffect2")
        //all setStates and callreducer runs together in one go and runs once for re-rendering
        obj.callreducer({type:"total-quantity"})
    },[obj.arr])
    return(
        <>
       {console.log(state.arr)}
       
        <div className="page2">
            <NavBar></NavBar>
        <div className="page2-container">
            <div className="side-container toggle">
                <div className="outside-category">
                    <div style={{fontWeight:"700"}}>ACCESSORIES</div>
                    <div className="category">
                        {
                            category.map((item)=>
                                <div style={{cursor:"pointer"}} className="sub-category" key={item.id}>
                                <div className="color-highlight1" id={`${item.id}`} onClick={()=>filterProducts(item.subCategory,`${item.id}`)}>{item.subCategory}</div>
                                <div>{item.quantity}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="outside-category">
                    <div style={{fontWeight:"700"}}>COLOR</div>
                    <div className="colors" style={{cursor:"pointer"}}>
                        <div className="color-highlight2" id="1"onClick={()=>filterColorProducts("Blue","1")}><i style={{color:"Blue",paddingTop:"2px"}} className="fa fa-circle fa-lg"></i></div>
                        <div className="color-highlight2" id="2"onClick={()=>filterColorProducts("Red","2")}><i style={{color:"Red",paddingTop:"2px"}} className="fa fa-circle fa-lg"></i></div>
                        <div className="color-highlight2" id="3"onClick={()=>filterColorProducts("Yellow","3")}><i style={{color:"Yellow",paddingTop:"2px"}} className="fa fa-circle fa-lg"></i></div>
                        <div className="color-highlight2" id="4"onClick={()=>filterColorProducts("White","4")}><i style={{color:"White",paddingTop:"2px"}} className="fa fa-circle fa-lg"></i></div>
                        <div className="color-highlight2" id="5"onClick={()=>filterColorProducts("Black","5")}><i style={{color:"Black",paddingTop:"2px"}} className="fa fa-circle fa-lg"></i></div>
                        <div className="color-highlight2" id="6"onClick={()=>filterColorProducts("Green","6")}><i style={{color:"Green",paddingTop:"2px"}} className="fa fa-circle fa-lg"></i></div>
                    </div>
                </div>
                <div className="outside-category">
                    <div style={{fontWeight:"700"}}>{`PRICES > $${state.input}`}</div>
                    <input type="range"style={{width:"95%"}} min={0} max={1500} step={100} value={state.input} onChange={(event)=>filterpriceProducts(event)}/>
                </div>
                <div className="outside-category">
                <div style={{fontWeight:"700"}}>BRAND</div>
                    <div className="category">

                    {brandHandle().brand.map((item,index)=>
                            {
                                return(
                                    <div style={{cursor:"pointer"}} className="sub-category" key={index}>
                                    <div className="color-highlight3" id={`${index}`} onClick={()=>filterBrandProducts(item,`${index}`)} >{item}</div>
                                    <div>{brandHandle().brandQuantity[index]}</div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div style={{textAlign:"center"}} className="outside-category more">MORE</div>
            </div>
            <div className="main-container">
                
                <div className="page2-image">
                    <div style={{fontSize:"2rem",paddingLeft:"20px",marginTop:"20px",marginBottom:"20px",color:"white"}}>iPhone 8</div>
                    <div style={{paddingLeft:"20px",marginTop:"10px",marginBottom:"20px",color:"white"}}>Performance and design. Taken right to the edge.</div>
                    <div style={{borderBottom:"2px solid white",fontWeight:"900",display:"inline-block",marginBottom:"20px",marginLeft:"20px",color:"white"}}>SHOP NOW</div>
                </div>
                
                <div className="outside-shopping-container">
                <FilterMobile filterMobileView={filterMobileView} sortProducts={sortProducts} arr={state.arr} sort={state.sort}/>
                <div className="shopping-container">
                {state.arr.length===0?`No Item available for ${pname}`:
                state.arr.map((product,index)=>
                <div className="shopping-product" key={product.id}>
                <div className="selectOption">
                <FontAwesomeIcon className="icon-hover3" style={{marginRight:"10px"}} icon={faHeart} ></FontAwesomeIcon>
                <FontAwesomeIcon className="icon-hover4" icon={faShoppingCart} onClick={()=>obj.callreducer({type:"add-item",payload:product})}></FontAwesomeIcon>       
                </div>    
                <div className="image" onClick={()=>obj.callreducer({type:"add-item",payload:product})}>
                <img style={{width:"120px",height:"160px"}} src={product.img} alt="not found"/>
                </div>
                <div className="Name">{product.name}</div>
                <div className="Rating">
                    <StarRating key={index}/>
                </div>
                <div >
                    <span style={{color:"red",marginRight:"5px"}}>${product.price}</span>
                    <span style={{color:"grey",textDecoration:"line-through"}}>{product.discount}</span>
                </div>
                </div>
                )
                }
                </div>
                </div>
                <div className="page-change">
                { 
                        Array().map((item,index)=>
                            <span className="page-change-span" onClick={()=>handleClick(index)} key={index+1}>{index+1}</span>   
                        )     
                }
                </div>  
            </div>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}
export default App

/*{brandCategory().brand.map((item,index)=>
                            {
                                return(
                                    <div style={{cursor:"pointer"}} className="sub-category" key={index}>
                                    <div className="color-highlight3" id={`${index}`} onClick={()=>filterProducts(item,`${index}`)}>{item}</div>
                                    </div>
                                )
                            })} */




/* if(color==="no" && state.input===0)
        {
            var updatedArr=products.filter((product)=>
            {
                if(product.type===pname)
                return product
            })
            setState((prevState)=>
            {
                return{
                    sort:"",
                    input:20,
                    arr:updatedArr.slice(i*5,(i*5)+5)
                }
            })
        }
        if(color!=="no" && state.input===20)
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color)
            return product
            setState((prevState)=>
            {
                return{
                    sort:"",
                    input:20,
                    arr:updatedArr.slice(i*5,(i*5)+5)
                }
            })
        })
        }
        if(color==="no" && state.input!==20)
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.price>=state.input)
            return product
            setState((prevState)=>
            {
                return{
                    ...prevState,
                    sort:"",
                    arr:updatedArr.slice(i*5,(i*5)+5)
                }
            })
        })
        }
        if(color!=="no" && state.input!==20)
        {
            var updatedArr=products.filter((product)=>
        {
            if(product.type===pname && product.color===color && product.price>=state.input)
            return product
            setState((prevState)=>
            {
                return{
                    ...prevState,
                    sort:"",
                    arr:updatedArr.slice(i*5,(i*5)+5)
                }
            })
        })
        }
        */