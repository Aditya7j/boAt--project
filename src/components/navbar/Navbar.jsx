import "./navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser,faGift} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import {ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from '@material-ui/core';
import swal from "sweetalert";
Modal.setAppElement('#root');



const Navbar = () => {
    const quantity = useSelector(store=>store.cart.length);
    const cart = useSelector(store=>store.cart);
    let total =0;
    let off=0;
    let total1=0;
    let pre=0;
    const navigate = useNavigate()

    const [modalopen,setModalopen] =useState(false);
    const [paymentmodalopen,setPaymentmodalopen] = useState(false);
    const [slidedownmodel,setSlidedownmodel] =useState(false);
    const [shopmodal,setShopmodal] =useState(false)
    const [loginmodal,setLoginmodal] =useState(false);

    let Token = localStorage.getItem("token");
   

    const handleModal = ()=>{
        setModalopen(true)
    }

    const handleclose = ()=>{
        setModalopen(false);
    }

    const paymentmodalopenn =()=>{
        
        if(!Login){
            navigate("/login")
          }
          else{
            setPaymentmodalopen(true)
          }
    }
    const payclose =()=>{
        setPaymentmodalopen(false);
    }

    const handleslide =()=>{
        setSlidedownmodel(true)
    }

    const handleshop =()=>{
        setShopmodal(true)
    }

    const handlelogin = ()=>{
        setLoginmodal(true)
    }


    const handlelogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.reload()
    }

    const Login = ()=>{
        navigate("/login")
    }
    const name = localStorage.getItem("name");

    const handleSuccess =()=>{
        if(total === 0){
            swal({
                title:"Nothing to Pay",
                dangerMode:true,
                text:"Add items to cart"
            })
        }
        else{
            swal({
                title: "Payment Success!",
                text: "Hurray!",
                icon: "success",
              })
              navigate("/")
        }    
    }
  return (
    <>
    {cart.map((e)=>{
            total += e.price
            off += Math.abs(e.price -1150);
            total1 = total - (off)+50; 
            console.log(off)
})}
    <div className="navbar">
        
        <Link to="/">
        <div className="leftnav">
            <img className="leftimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229" alt="" />
        </div></Link>
        <div className="centernav">
            <ul className="centerul">
                <li onClick={handleshop} className="centerli"><a className="centera" href="#">Shop <i className="fas fa-angle-down"></i></a></li>
                <Modal className="shopmodal"  isOpen={shopmodal} style={{overlay:{backgroundColor:"transparent",position:"absolute"}}} onRequestClose={()=>setShopmodal(false)} >
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_480x.png?v=1612338251" alt="" />
                    <Link to="/products">
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_480x.png?v=1612338387" alt="" /></Link>
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_480x.jpg?v=1648546494" alt="" />
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_480x.png?v=1612338356" alt="" />
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_480x.png?v=1612338436" alt="" />
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_480x.png?v=1622452897" alt="" />
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_480x.jpg?v=1648545875" alt="" />
                    <img className="shopmodalimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_480x.png?v=1615033153" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_480x.png?v=1612338560" alt="" className="shopmodalimg1" />
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_480x.png?v=1624859990" alt="" className="shopmodalimg" />
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_480x.png?v=1626094103" alt="" className="shopmodalimg" />

                </Modal>
                <li className="centerli"><a className="centera" href="daily">Daily Deals</a></li>
                <li className="centerli"><a className="centera" href="off">Offer Zone</a></li>
                <li onClick={handleslide} className="centerli"><a className="centera" href="#">More <i className="fas fa-angle-down"></i> </a></li>
                <Modal className="slidemodal" isOpen={slidedownmodel} style={{overlay:{backgroundColor:"transparent",position:"absolute"}}} 
                    onRequestClose={()=>setSlidedownmodel(false)}>
                    <ul className="slidemodalul">
                        <li className="slidemodalli">Gifting</li>
                        <li className="slidemodalli">Do What Floats Your boAt</li>
                        <li className="slidemodalli">Blogs</li>
                        <li className="slidemodalli">Meet the boAtheads</li>
                        <li className="slidemodalli">Corporate Orders</li>
                        <li className="slidemodalli">Earn Rs.100</li>
                        <li className="slidemodalli">Careers</li>
                        <li className="slidemodalli">Social Responsibility</li>
                    </ul>
                </Modal>
            </ul>

        </div>
        <div className="rightnav">
            <input className="rightinput" type="text" placeholder="Search..." />
            
            <FontAwesomeIcon onClick={handlelogin} className="righticon" icon={faUser}></FontAwesomeIcon>

            <Modal className="loginmodaldiv" isOpen={loginmodal} onRequestClose={()=>setLoginmodal(false)} style={{overlay:{backgroundColor:"transparent",position:"absolute"}}}>
                <div className="loginmodalinnerdiv">

                    <p className="loginmodalp">Hi, {name?name:"boAtheads"}</p>
                    
                   <b className="loginmodalb"><i onClick={()=>setLoginmodal(false)} className="fas fa-close"></i></b> 
                </div>
                 <button onClick={()=>{Token?handlelogout():Login()}}  className="loginmodalbutton">{Token?"Logout":"Login"}</button>
            </Modal>
            <FontAwesomeIcon className="righticon" icon={faGift}></FontAwesomeIcon>
            <Badge onClick={handleModal} className="righticon" badgeContent={quantity} color="secondary" >
                <ShoppingCartOutlined />
            </Badge>
                 <Modal className="modaldiv" isOpen={modalopen} onRequestClose={()=>setModalopen(false)} 
                 style={{overlay:{backgroundColor:"transparent",}}}>
                 <div className="modaltitlediv">
                     <h2 className="modaltitleh">Your Cart({quantity} items)</h2>
                     <b className="fascloseb"><i onClick={handleclose} className="fas fa-close"></i></b>
                 </div>
                 <div className="modeldescdiv">
                     <p className="modaldescp">Free Shipping sitewide | <b>Cash On Delivery</b> available for order value upto <b>₹3000</b>
                     </p>
                 </div>
                 
                 <div className="modalscrolldiv">
                    {cart.map((e)=>(
                        <div className="modalscrolldiv1">
                        <img className="modalscrollimg" src={e.img1} alt="" />
                        <p className="modalscrollp">{e.title}</p>
                        <span className="modalscrollspan">Rs {e.price}.00</span>
                        <span className="modalscrollspan1">Rs {e.price1}.00</span>
                    </div>    
                    ))}
                                            
                 </div>
                 
                 <div className="modaltotaldiv">
                     <div className="modalship">
                         <span className="modalshipspan"><b className="shipb">Shipping:</b></span>
                         <span className="modalshipspan"><b className="shipb">FREE</b></span>
                     </div>
                     <span className="modalshipspann"><b className="shiptotal">Total:</b></span>
                     <span className="modalshipspann1"><b className="shiptotal">Rs {total}.00</b></span> <br /> <br />
                     <a className="continueaa" href="continue">Continue Shopping  <b className="fas"><i className="fas fa-chevron-right"></i></b></a>
                     <br /> <br />
                     <button onClick={paymentmodalopenn} className="modalbutton1">cash on delivery/upi</button> <br />
                     <Modal className="paymodal" isOpen={paymentmodalopen} style={{overlay:{backgroundColor:"transparent",position:"absolute"}}}>
                         <div className="paymodaldiv1">
                            <img className="paymodalimg" src="https://cdn.gokwik.co/merchant/155/logo1632914610996.jpeg" alt="" /> <br />
                            <span className="payspan"><b  className="paycircle"> .1 </b><b className="payb">Mobile</b></span>
                            <span className="payspan1"><b className="paycircle1"> 2 </b><b className="payb">Address</b></span>
                            <span className="payspan2"><b className="paycircle1"> 3 </b><b className="payb">Pay</b></span>
                            <hr />
                            <br />
                            <p className="enternumber">Enter Mobile Number</p> <br />
                            <div className="mobileinput">
                                <span className="plusnineon">+91</span>
                                <input className="mobileplace" type="number" placeholder="Enter Number"/>
                            </div>
                            <br /><br /><br />
                            <button className="mobilebutton">Continue →</button> <br />
                            <img className="mobowiki" src="https://pdp.gokwik.co/assets/icons/footer-logo.svg" alt="" />
                         </div>
                         <div className="paymodaldiv2">
                            <div className="circlecross">
                            <b className="closepaydiv">
                                    <i onClick={payclose} className="fas fa-close"></i> 
                                </b> 
                            </div>

                            <div className="ordersummary">
                                <div className="shoppingorder">
                                    <ShoppingCartOutlined className="ordershopimg" />
                                    <b className="orderb">Order Summary</b>
                                </div>
                            {cart.map((e)=>(
                                
                            <div className="shoppingorderslider">
                                 <img className="shoppingsliderimg" src={e.img1} alt="" />
                                 <p className="shoppingsliderp">{e.title}</p>
                                 <p className="shoppingsliderp1">Price: <b className="boAtb">Rs {e.price}.00</b> </p><br />
                                 <hr />
                             </div>  
                            ))}
                            </div>

                            <div className="innershoplist">
                                <span className="innerspanshop">Subtotal</span> <b className="hiddenb">..................</b> <span className="one">₹{total}.00</span> <br />
                                <span className="innerspanshop">Coupon Discount</span> <b className="hiddenb">....</b> <span className="one">₹{off}.00</span> <br />
                                <span className="innerspanshop">Prepaid Discount</span><b className="hiddenb">.....</b> <span className="one">₹{pre}.00</span> <br />
                                <span className="innerspanshop1">Shipping</span>  <b className="hiddenb">........................,.</b> <span className="one">₹50.00</span> <br />
                            </div>
                            <span className="innerspanshop2">To Pay</span>  <b className="hiddenb">....................</b> <span className="two">₹{total1}.00</span> <br /> <br />
                            <button onClick={handleSuccess} className="lastbtn">Pay</button>
                         </div>
                        
                     </Modal>
                     <button className="modalbutton2">pay  via card/others</button>
                     
                 </div>
             </Modal>
        </div>
    </div>
    </>
  )
}

export default Navbar