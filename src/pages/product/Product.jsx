import "./Product.css"
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { productslide } from "../../data";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action";

const Product = () => {

    const [product,setProduct] = useState([]);
    const dispatch = useDispatch();

    const getData = async(url)=>{
        await axios.get(url).then((res)=>{
            setProduct(res.data)
        })
    }

    useEffect(()=>{
        getData("https://boat-app-project1.herokuapp.com/products")
    },[])

    const handleadd = (x)=>{
        dispatch(addProduct(x))
    }

    const handlesortasc = ()=>{
        getData("https://boat-app-project1.herokuapp.com/products/sort/asc")
    }

    const handlesortdsc = ()=>{
        getData("https://boat-app-project1.herokuapp.com/products/sort/dsc")
    }
  return (
    <>
    <Navbar/>
    <div className="productfront">
        <Link className="link" to="/">
        <span className="productfrontspan1"><a className="productfronta1" href="Home">Home /</a></span></Link>
        <span className="productfrontspan"><a className="productfronta" href="Wire"> Wireless Headphones</a></span>
    </div>

    <div className="mainproductdiv">
        <h1 className="mainproductdivh">Wireless Headphones</h1>
        <div className="filterdiv">
            <a className="mainproductdiva" href="show">Show Filters</a>
            <button onClick={handlesortasc} className="sortingasc">Low to High</button>
            <button onClick={handlesortdsc} className="sortingasc">High to Low</button>
        </div>

        <div className="rockerzdiv">
            {product.map((e)=>(
                <>
                <div className="rockerz" key={e.id}>
                <Link to ={`/products/${e._id}`} >
                <div className="rockerzinner1">
                    <img className="rockerzinnerimg" src={e.img1} alt="" />
                </div></Link>
                <div className="rockerzinner2">
                    <h4 className="rockerzinner2h">{e.title}</h4>
                    <span className="star">*</span> <span className="ratingspan">{e.rating}|{e.review} reviews</span>
                    <hr />
                    <span className="pricespan">₹ {e.price} </span> <span className="pricespan2">₹ {e.price1}</span> <br />
                    <span className="savespan">You Save: <span className="discountspan">₹ {e.save}({e.discount}%)</span></span> <br />
                    <button onClick={()=>handleadd(e)} className="addbutton">ADD TO CART</button>
                </div>
            </div>
                </>
            ))}
        </div>

        <div className="productdesc">
            <h1 className="desch">Rockerz – Enjoy the Vibe With the Best Wireless Headphones</h1>
            <div className="productabout">
                <p className="productaboutp">Effortless. Simple. Powerful. boAt Rockerz Wireless series brings high-fidelity audio paired with premium 
                   design to experience sound like no other. From deep, rich bass to clean highs, you’ll hear every note  <br /> with 
                   a new sense of clarity. boAt Rockerz come with premium dynamic drivers tweaked as per boAt’s high quality 
                   standards.</p> <br /><br />

                <p className="productaboutp">The Rockerz series is expertly crafted to give the best sounding experience whether it is playing games, 
                    talking on a call or enjoying media, all while offering a balanced experience. These wireless <br /> earphones 
                    can last for hours with boAt’s proprietary ASAP™ Fast Charge technology that charges the earbuds within 
                    a short time if it ever runs low on battery.  </p> <br /><br />

                <p className="productaboutp">With the latest Bluetooth technology, instant pairing and switching between devices has never been easier. 
                    Setup and pair your bluetooth earphones with a single tap and start the day with high energy as <br /> Rockerz 
                    instantly pairs as soon as it's switched on.</p> <br /><br />

                <p className="productaboutp">With Qualcomm’s latest chipsets built in, Rockerz offers real-time experience with 
                    low latency and extended battery usage. Featuring Enx noise cancellation technology, the technology suppresses 
                    and <br /> cancels out ambient noise for clear voice capture, delivering the best possible sound quality on 
                    headphones, earphones with mic etc. Passive noise cancelling earphones take immersion to the next level <br /> with 
                    crisp and clear audio along withone touch Google or Siri activation that makes life easier.</p> <br /><br />

                <p  className="productaboutp">Keeping up with the latest trends, these bluetooth earphones are meticulously 
                    designed and crafted with premiumness, comfort and durability in mind while being protected by an IPX 
                    rating that is <br /> resistant to water and splashes. Sweating it out in the gym or playing ambient sounds for 
                    a quiet reading session, Rockerz has it covered, all in style.</p> <br /><br />

                <p className="productaboutp">Our headphones feature soft ear cups to lightweight premium neckband fit that reduce pressure and offer 
                    unrivaled comfort for a premium, snug fit. Whether you are out for an excursion or just enjoying <br /> me-time; 
                    pushing oneself at the gym or at work from home, the Rockerz series are the perfect companion. Keeping up 
                    with the latest trends, Rockerz earphones are available in a variety of colours to <br /> choose from. Drawing from 
                    industry experience, boAt brings to you the best headphones, earphones and neckbands the industry has to 
                    offer. </p> <br />
            </div>
        </div>

        <div className="productslide">
            {productslide.map((e)=>(
                <>
                    <div className="productslider">
                        <img className="productsliderimg" src={e.img} alt="" /><br />
                        <p className="productslidertitle">{e.title}</p> 
                        <button className="productsliderbutton">Read more</button>
            </div>
                </>
            ))}
        </div>
        <Footer/>
    </div>
    </>
    
  )
}

export default Product