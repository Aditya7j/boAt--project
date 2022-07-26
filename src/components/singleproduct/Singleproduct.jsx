import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { addProduct } from "../../redux/action"
import Earbuds from "../earbuds/Earbuds"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import "./Singleproduct.css"

const Singleproduct = () => {

  const {id} =useParams();
  const [products,setProducts] = useState([]);
  const [showImg,setShowImg] =useState("");
  const dispatch = useDispatch();

  
  useEffect(()=>{
    const getData = async()=>{
      await axios.get(`https://boat-app-project1.herokuapp.com/products/${id}`).then((res)=>{
        setProducts(res.data)
      })
    }
    getData();
  },[id])

  const handleadd = (x)=>{
    dispatch(addProduct(x))
  }


  return (
    <>
    <Navbar/>
    <div className="singelproduct">
      <div className="homecontdiv">
        <Link className="singlelink" to="/"><span className="singlespan"><a className="singlea" href="home">Home / </a></span></Link> 
        <span className="singlespan1"><a className="singlea1" href="boAt">boAt Rockerzz</a></span>
      </div>
     
   

    <div className="singleimgaediv">
        <div className="singleleftimage">
          <div><img onClick={()=>setShowImg(products.img1)}  className="singleleftslideimg" src={products.img1} alt="" /></div>
          <div><img onClick={()=>setShowImg(products.img2)}  className="singleleftslideimg" src={products.img2} alt="" /></div>
          <div><img onClick={()=>setShowImg(products.img3)}  className="singleleftslideimg" src={products.img3} alt="" /></div>
          <div><img onClick={()=>setShowImg(products.img4)}  className="singleleftslideimg" src={products.img4} alt="" /></div>
          <div><img onClick={()=>setShowImg(products.img5)}  className="singleleftslideimg" src={products.img5} alt="" /></div>
          <div><img onClick={()=>setShowImg(products.img6)}  className="singleleftslideimg" src={products.img6} alt="" /></div>
        </div>
        <div className="singlecenterimage">
           {showImg===""?<img className="singlecenterimagecontent" src={products.img1} alt="" />: <img className="clickimg" src={showImg} alt =""/>}
        </div>
        <div className="singletiitlediv">
          <div>
            <h1 className="titletag1">{products.title}</h1>
            <p className="desctag1">{products.desc}</p>
            <span className="ratingtag1">{products.rating} | {products.review} reviews <b className="b"> ☀ </b></span>
          </div>

          <div>
              <div> <img onClick={()=>setShowImg(products.img1)} className="imagetag1" src={products.img1} alt="" /></div>
              <div> <img onClick={()=>setShowImg(products.img2)} className="imagetag1" src={products.img2} alt="" /></div>
              <div> <img onClick={()=>setShowImg(products.img3)} className="imagetag1" src={products.img3} alt="" /></div>
              <div> <img onClick={()=>setShowImg(products.img4)} className="imagetag1" src={products.img4} alt="" /></div>
              <div> <img onClick={()=>setShowImg(products.img5)} className="imagetag1" src={products.img5} alt="" /></div>
          </div>

          <div>
          <p className="emip">3 interest-free EMIs of ₹ 599.67 with <span className="axio">axio</span></p>
            <hr className="intehr" />
            <p className="payp">Pay later & avail cashback with <span className="zest">zest</span></p>
          </div>
        </div>

        <div className="singletotaldiv">
            <div>
                <span className="pricetagspan">₹ {products.price}</span>
                <span className="price1tagspan">₹ {products.price1}</span> <br />
                <span className="savetagspan">You Save :₹ {products.save} ({products.discount}%)</span>
                <span className="inclusivetagspan">Inclusive of all taxes</span>
                <hr className="allhr" /> <br />
                <span className="stockspan">In Stock <span className="currentlyspan">Currently in 99 carts</span></span>
                <button onClick={()=>{handleadd(products)}} className="crybuttontag1">Add to cart</button> <br />
                <button className="crybuttontag2">Buy Now</button>
            </div>
        </div>
    </div>

    <div className="replacediv">
        <div>
            <img className="replacedivimage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-1b.png?v=1654855622" alt="" />
            <p className="replacedivp">1 Year Warranty</p>
        </div>
        <div>
            <img className="replacedivimage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-3b.png?v=1654855622" alt="" />
            <p className="replacedivp">7 Days Replacement</p>
          </div>
        <div>
            <img className="replacedivimage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-2b.png?v=1654855622" alt="" />
            <p className="replacedivp">Free Shipping</p>
        </div>
        <div>
            <img className="replacedivimage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-4b.png?v=1654855622" alt="" />
            <p className="replacedivp">Secure Checkout</p>
          </div>
    </div>
    <div className="SPECIFICATIONS">
        <h2 className="specifich">DESCRIPTION</h2>
        <h2 className="specifich1">SPECIFICATIONS</h2>
        <h2 className="specifich1">REVIEWS ({products.review})</h2>
    </div>

    <div className="rebelrockerz">
        <h1 className="rebelrockh">TRebel Rockerz 550 Bluetooth Headphones for Women</h1>
        <p className="rebelrockp">Ladies, the time hath come to reach the wall of fame. Make your hustle shine like a diamond 
        with TRebel Rockerz 550 — an audio partner that’s made to suit your vibe. Let your hustle <br /> never stop with its 20 hours 
        of powerful playback and never settle for less with the sheer audio power of 50mm Dynamic Drivers. Block the voices 
        that don’t matter with its physical <br /> noise isolation. With a 500mAh battery, TRebel Rockerz 550 will be your cheerleader 
        through thick & thin. There’s no point in waiting — match your mood with the best wireless <br /> headphones for women.</p>
    </div>

    <div className="dynamicinner">
        <div className="dynamicinnerdiv1">
            <img className="dynamicimage" src={products.img1} alt="" />
            <h2 className="dynamicinnerh">50mm Dynamic Drivers: Immersive Audio</h2>
            <p className="dynamicinnerp">Its 50mm dynamic drivers help pump out immersive audio all day long.</p>
        </div>
        <div className="dynamicinnerdiv2">
            <h2 className="dynamicdiv2h">Superior Playback: Up to 20 Hours of <br /> Music Bliss</h2>
            <p className="dynamicdiv2p">The mighty 500mAh battery capacity offers a superior playback time of up to 20 <br /> hours.</p>
            <img className="dynamicdiv2image" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_477b0686-02b2-4289-9e53-d663dfb08e37_600x.png?v=1645016541" alt="" />
        </div>
    </div>

    <div className="physicaldiv">
        <div>
            <img className="physicaldivimage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_64418f3b-a4ed-4c4f-ab6c-0519147aea99.png?v=1646721442" alt="" />
        </div>
        <div>
          <h2 className="physicalh">Physical Noise Isolation</h2>
          <p className="physicalp">It comes with a physical Noise Isolation feature for pure audio bliss.</p>
        </div>
    </div>

      <div className="modeldetails">
        <div className="modeldetailsdiv1">
          <div className="modeltablerow1">
            <ul className="modeltableul">
              <li className="modeltableli">Headphone Type</li>
              <li className="modeltableli">Driver Type</li>
              <li className="modeltableli">Driver Size</li>
              <li className="modeltableli">Impedance</li>
              <li className="modeltableli">Sensitivity (dB)</li>
              <li className="modeltableli">Frequency Response</li>
              <li className="modeltableli">Battery Capacity (mAh)</li>
              <li className="modeltableli">Playback Time</li>
              <li className="modeltableli">Charging Time</li>
              <li className="modeltableli">Standby Time</li>
              <li className="modeltableli">Bluetooth Version</li>
              <li className="modeltableli">Country Of Origin</li>
              <li className="modeltableli">Compatibility</li>
              <li className="modeltableli">Bluetooth Range</li>
            </ul> 
          </div>
          <div className="modeltablerow2">
            <ul className="modeltableul1">
              <li className="modeltableli">Over-Ear</li>
              <li className="modeltableli">Moving Coil Driver</li>
              <li className="modeltableli">50mm</li>
              <li className="modeltableli">32Ω</li>
              <li className="modeltableli">90dB±3DB</li>
              <li className="modeltableli">20Hz-20KHz</li>
              <li className="modeltableli">500 mAh</li>
              <li className="modeltableli">20 hours</li>
              <li className="modeltableli">2.5 hours</li>
              <li className="modeltableli">180 hours</li>
              <li className="modeltableli">V5.0</li>
              <li className="modeltableli">China</li>
              <li className="modeltableli">All Bluetooth Devices</li>
              <li className="modeltableli">10M</li>
            </ul>
          </div>
        </div>
        <div className="modeldetailsdiv2">
            <img className="modeltableimgg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/4_7894cf18-6383-41b0-8208-16b03cf3ffd6.png?v=1646721442" alt="" />
        </div>
      </div>

      <div className="designeddiv">
        <div className="designeddiv1">
          <img  className="designedimgge" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/450im_600x.png?v=1639990280" alt="" />
        </div>
        <div className="designeddiv2">
          <h2 className="designedh">Ergonomically Designed Over-Ear Headphone</h2> <br />
          <p  className="designedp">It has been ergonomically designed and structured as an over-ear headphone to provide the 
          best user experience.</p>
        </div>
        <div className="designeddiv3">
            <img className="designedadimgg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Voice-Assistant-Panel_1-Year_3e5ba7e2-2538-4f60-972a-7a9fd0c7f382.png?v=1617609236" alt="" />
        </div>
      </div>

      <div className="activatediv"></div>
      <div className="trendsdiv">
          <h1 className="trendsdivh">You may also like</h1>
        <Earbuds/>
      </div>
      <div className="India">
        <p className="indiap">India's fastest growing audio & wearables brand. The most incredible range of wireless <span className="white">earphones,</span>
        <span className="white"> earbuds, </span> <span className="white">headphones,</span> <span className="white">smart watches,</span> <span className="white">and home audio.</span>
        <br /> From workouts to adventures, boAt will get you sailing!</p>
    </div>
    <Footer/>
    </div>
    
  </>
  )
}

export default Singleproduct