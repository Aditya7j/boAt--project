import "./bottomslider.css"
import { bottomslider } from "../../data"

const Bottomslider = () => {
  return (
    <div className="bottomslider">
        {bottomslider.map((e)=>(
            <>
            <div className="bottomimgcont" key={e.id}>
            
            <img className="bottomimg" src={e.img} alt="" />
        </div>
        <div className="bottomcontent">
            <h2 className="bottomh"> <span className="bottommeet">Meet th</span>e bo<span className="bottomspan">A</span>theads</h2>
            <p className="bottomra">{e.name}</p>
            <h3 className="bottomfire">{e.title1}</h3>
            <p className="bottomwhen">When you hear the crowd roar, be assured that it’s KL Rahul making his way to <br /> the field. 
                Our hardcore boAthead, KL Rahul, hits it with his performance as well as <br /> his fashion statement. 
                On or off field, Rahul always makes <br /> #MoveOfTheChampions.</p>
        </div>
        </>
        ))}
        
    </div>
  )
}

export default Bottomslider