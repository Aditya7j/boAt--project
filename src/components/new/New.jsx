import "./New.css"

const New = () => {
  return (
    <>
    <h1 className="newh">New Launches</h1>
    <div className="new">
        <div className="new1">
            <div className="newimgcont">
                {/* <img className="newimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/blue.jpg?v=1657955575" alt="" /> */}
            
            </div>
            <div className="newcontent">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Vector_Smart_Object_6085a897-ef0f-41c5-9690-3de81a71112f.png?v=1642419136" alt="" />
                <p className="bluep">Bluetooth Eabuds</p>
                <h2 className="blueh">boAt Airpods 131 Pro</h2>
                <button className="bluebtn">Special Launch Price</button>
                <h2 className="bluehh">Rs.1299</h2>
                <span className="bluespan">DESCRIPTION</span>
                <span className="bluespan1">FEATURES</span>
                <p className="blueppp">Enter the Pro life with Airpods 131 Pro and its legacy of great sound <br /> pumped from its 11mm
                    drivers.Groove to  the boAt Signature Sound for <br /> 45 hours with your favourite Airpods pro-
                    ed up. <span className="transpan">.........</span> <span className="readspan">...Read more</span>
                </p>
                <br />
                <button className="explorebtn">EXPLORE MORE</button>
                <button className="cartbtn">ADD TO CART</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default New