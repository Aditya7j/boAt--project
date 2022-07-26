import "./brand.css"

const Brand = () => {
  return (
    <>
    <div className='brand'>
        <h2 className="brandh">Brand Promise</h2>
        <div className="branddiv">
            <div>
                <img className="brandimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367" alt="" />
                <p className="brandp">Free Shipping</p>
            </div>
            <div>
            <img className="brandimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367" alt="" />
                <p className="brandp">Exclusive Deals</p>
            </div>
            <div>
            <img className="brandimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367" alt="" />
                <p className="brandp">Secure Checkout</p>
            </div>
        </div>
    </div>
    <div className="India">
        <p className="indiap">India's fastest growing audio & wearables brand. The most incredible range of wireless <span className="white">earphones,</span>
        <span className="white"> earbuds, </span> <span className="white">headphones,</span> <span className="white">smart watches,</span> <span className="white">and home audio.</span>
        <br /> From workouts to adventures, boAt will get you sailing!</p>
    </div>
    </>
  )
}

export default Brand