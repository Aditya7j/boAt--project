import "./blog.css"

const Blog = () => {
  return (
    <div className='blog'>
        <h2 className="blogh">boAt Blogs</h2> 
        <div className="blogmain">
            <div className="blog1">
                <img className="blogimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Earphone_1296x_540x_25759241-1386-4661-bec0-bad7c111178f_540x.png?v=1650620291" alt="" />
                <h3 className="blogguide">Earphone Buying Guide - Everything You <br /> Need To Know</h3>
            </div>
            <div className="blog2">
                <img className="blogimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_520x500_540x_d7c9944e-0985-498b-9a89-3a54d32c9dd2_520x.png?v=1650620307" alt="" />
                <h3 className="blogguide">The Ultimate Smartwatches Guide - Get The <br /> World On Your Wrist</h3>
            </div>
            <div className="blog3">
                <img className="blogimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Storm-Pro-Blog_600x.jpg?v=1657704485" alt="" />
                <h3 className="blogguide">Smart Got Good Looking boAt Strom Pro Smartwatches is Here to Kick a Strom</h3>
            </div>
        </div>
        <button className="blogbtn">EXPLORE BLOGS</button>
    </div>
  )
}

export default Blog