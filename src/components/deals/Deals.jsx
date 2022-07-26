import "./deals.css"

const Deals = () => {
  return (
    <>
    <h1 className="besth">Deals of The Day</h1>
    <div className='best'>
        <div className="bestdiv">
            <div className="bestimg">
                <img className="bestimgg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114" alt="" />
            </div>
            <div className="bestcont">
                <p className="bestp">boAt Rockerz 235 V2</p>
                <hr />
                <span className="bestspan">₹999</span><span className="bestspan1">₹2,990</span>
                <p className="bestp1">You save: ₹1991(67%)</p>
                <button className="bestbutton1">ADD TO CART</button>
            </div>
        </div>
        <div className="bestdiv">
            <div className="bestimg">
            <img className="bestimgg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/101_400x.png?v=1655788494" alt="" />
            </div>
            <div className="bestcont">
                <p className="bestp">boAt Airpods 101 Made in India</p>
                <hr />
                <span className="bestspan">₹1,199</span><span className="bestspan1">₹2,990</span>
                <p className="bestp1">You save: ₹1791(60%)</p>
                <button className="bestbutton1">ADD TO CART</button>
            </div>
        </div>
        <div className="bestdiv">
        <div className="bestimg">
            <img className="bestimgg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_400x.png?v=1657869596" alt="" />
        </div>
            <div className="bestcont">
                <p className="bestp">boAt Airpods 141</p>
                <hr />
                <span className="bestspan">₹1,499</span><span className="bestspan1">₹4,490</span>
                <p className="bestp1">You save: ₹2991(67%)</p>
                <button className="bestbutton1">ADD TO CART</button>
            </div>
        </div>
        <div className="bestdiv">
            <div className="bestimg">
            <img className="bestimgg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216" alt="" />
            </div>
            <div className="bestcont">
                <p className="bestp">boAt Strom</p>
                <hr />
                <span className="bestspan">₹2,499</span><span className="bestspan1">₹5,990</span>
                <p className="bestp1">You save: ₹3491(58%)</p>
                <button className="bestbutton1">ADD TO CART</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Deals