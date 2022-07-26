import "./footer.css"
import { Facebook,Twitter,Instagram, YouTube, LinkedIn } from "@material-ui/icons";

const Footer = () => {
  return (
    <>
    <div className="footer">

        <div className="footerleft">
            <img className="footerleftimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x.png?v=1600753267" alt="" />
            <p className="footerleftp">Subscribe to email alerts. We promise not to spam your inbox.</p>
                <input className="footerleftinput" type="text" placeholder="Email Address* " />
                <button className="footerleftbtn">Subscribe</button>   
                <br /><br /> 
                <Facebook className="face" />
                <Twitter className="face" />
                <Instagram className="face"/>
                <YouTube className="face"/>
                <LinkedIn className="face"/>
                <img className="logoimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054" alt="" />
                <span className="footerleftspan">DOWNLOAD THE APP</span>
                {/* <img className="footergoogelimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293" alt="" />
                <img className="footergoogelimg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293" alt="" /> */}
        </div>

        <div className="footerright">
            <div className="footerright1">
                <ul className="footerrightul">SHOP
                    <li className="footerrightli">True Wireless Earbuds</li>
                    <li className="footerrightli">Wireless Headphones</li>
                    <li className="footerrightli">Wired Headphones</li>
                    <li className="footerrightli">Wireless Speakers</li>
                    <li className="footerrightli">Home Audio</li>
                    <li className="footerrightli">Mobile Accessories</li>
                    <li className="footerrightli">Smart Watches</li>
                    <li className="footerrightli">TRebel</li>
                    <li className="footerrightli">Misfit</li>
                    <li className="footerrightli">Gift Card</li>
                    <li className="footerrightli">Rock In India</li>
                    <li className="footerrightli">Earn Rs.100</li>
                </ul>
            </div>
            <div className="footerright2">
            <ul className="footerrightul">HELP
                    <li className="footerrightli">Track Your Order</li>
                    <li className="footerrightli">Warranty & Support</li>
                    <li className="footerrightli">Return Policy</li>
                    <li className="footerrightli">Service Centers</li>
                    <li className="footerrightli">Bulk Orders</li>
                    <li className="footerrightli">FAQs</li>
                    <li className="footerrightli">Why Buy Direct</li>
                </ul>
            </div>
            <div className="footerright3">
            <ul className="footerrightul">COMPANY
                    <li className="footerrightli">About boAt</li>
                    <li className="footerrightli">News</li>
                    <li className="footerrightli">Read Our Blog</li>
                    <li className="footerrightli">Careers</li>
                    <li className="footerrightli">Security</li>
                    <li className="footerrightli">Terms of Service</li>
                    <li className="footerrightli">Privacy Policy</li>
                    <li className="footerrightli">Investor Relations</li>
                    <li className="footerrightli">Social Responsibility</li>
                </ul>
            </div>
        </div>
    </div>
    <p className="reserved">© 2022 Imagine Marketing Limited. All Rights Reserved.</p>
    </>
  )
}

export default Footer