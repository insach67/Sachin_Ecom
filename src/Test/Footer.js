import React from "react"
import "../Component/App1.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHeart, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Footer()
{
    const footer=["About Us","Information","Privacy Polciy","Terms and Conditions"]
    return(
        <>
         <div className="divider"></div>
        <div className="second-last">
            <div className="inside-second-last">
                <div style={{fontSize:"2rem",fontWeight:"bold",padding:"10px 0px",color:"lightgray"}}>iSHOP</div>
                <div style={{fontSize:"0.9rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="inside-second-last">
                <div style={{fontSize:"1.2rem",fontWeight:"bold",padding:"16px 0px"}}>Follow Us</div>
                <div style={{paddingBottom:"5px",fontSize:"0.9rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                <div>
                    <FontAwesomeIcon style={{paddingRight:"15px",color:"rgb(26, 26, 240)"}} icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{color:"rgb(87, 200, 238)"}} icon={faTwitter}></FontAwesomeIcon>
                </div>
            </div>
            <div className="inside-second-last">
                <div style={{fontSize:"1.2rem",fontWeight:"bold",padding:"14px 0px"}}>Contact Us</div>
                <div style={{fontSize:"0.9rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
        <div className="last">
            <div>
                <div className="inside-last">Information</div>
                {
                    footer.map((item)=>
                    {
                        return <div className="items" key={item}>{item}</div>
                    })  
                }
            </div>
            <div>
                <div className="inside-last">Service</div>
                 {
                    footer.map((item)=>
                    {
                        return <div className="items" key={item}>{item}</div>
                    })  
                }
            </div>
            <div>
                <div className="inside-last">Extras</div>
                 {
                    footer.map((item)=>
                    {
                        return <div className="items" key={item}>{item}</div>
                    })  
                }
            </div>
            <div>
                <div className="inside-last">My Account</div>
                 {
                    footer.map((item)=>
                    {
                        return <div className="items" key={item}>{item}</div>
                    })  
                }
            </div>
            <div>
                <div className="inside-last">Useful Links</div>
                 {
                    footer.map((item)=>
                    {
                        return <div className="items" key={item}>{item}</div>
                    })  
                }
            </div>
            <div>
                <div className="inside-last">Our Offers</div>
                 {
                    footer.map((item)=>
                    {
                        return <div className="items" key={item}>{item}</div>
                    })  
                }
            </div>
        </div>
        </>
    )
}
export default Footer