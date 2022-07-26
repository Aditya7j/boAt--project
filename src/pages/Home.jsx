import Best from '../components/bestseller/Best'
import Deals from '../components/deals/Deals'
import Earbuds from '../components/earbuds/Earbuds'
import Grooming from '../components/grooming/Grooming'
import Navbar from '../components/navbar/Navbar'
import New from '../components/new/New'
import Slider from '../components/slider/Slider'
import Trending from '../components/trending/Trending'
import Video from '../components/video/Video'
import Watches from '../components/watches/Watches'
import Wired from '../components/wired/Wired'
import Audio from '../components/audio/Audio'
import Blog from '../components/blog/Blog'
import Bottomslider from '../components/bottomslider/Bottomslider'
import Press from '../components/press/Press'
import Smartwatch from '../components/smartwatch/Smartwatch'
import Brand from '../components/brand/Brand'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        {/* <Ad/> */}
        <Navbar/>
        <Slider/>
        <Best/>
        <Deals/>
        <Video/>
        <Watches/>
        <Trending/>
        <Earbuds/>
        <New/>
        <Wired/>
        <Grooming/>
        <Audio/>
        <Blog/>
        <Bottomslider/>
        <Press/>
        <Smartwatch/>
        <Brand/>
        <Footer/>
    </div>
  )
}

export default Home