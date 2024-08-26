import Head from "./Head"
import Bandw from "../assets/cats/bandw.jpg"
import Bell from "../assets/cats/bell.jpg"
import Chud from "../assets/cats/Chud.jpg"
import Frame from "../assets/cats/frame.jpg"
import Ginger from "../assets/cats/ginger.jpg"
import Mama from "../assets/cats/mama.jpg"
import Onbed from "../assets/cats/onbed.jpg"
import Sleep from "../assets/cats/sleep.jpg"
import Smurf from "../assets/cats/smurf.jpg"
import Tiny from "../assets/cats/tiny.jpg"
import { useNavigate } from "react-router-dom"

function Cats(){
    const navigate=useNavigate();
    return(
        <>
        <Head />
        <div className="dogs-container">
          <div>
             <img src={Bandw} className="dog-img"></img>
             <div className="dog-desc">
             <h2 className="dog-name">Oliver</h2>
             <p>⭐Male</p>
             <p>⭐3 Years old</p>
             <p>⭐Scaredy cat</p>
             <button onClick={()=>{navigate('/book',{state:"Lucy"})}} className="card-btn" >Book</button>
             </div> 
          </div>
          <div>
             <img src={Bell} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Milo</h2>
                <p>⭐Male</p>
                <p>⭐1 Year old</p>
                <p>⭐Curious cat</p>
                <button onClick={()=>{navigate('/book',{state:"Bob"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
             <img src={Chud} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Oreo</h2>
                <p>⭐Male</p>
                <p>⭐9 months old</p>
                <p>⭐Like to Sleep on floor</p>
                <button onClick={()=>{navigate('/book',{state:"Max"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
             <img src={Frame} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Molly</h2>
                <p>⭐Female</p>
                <p>⭐4 years old</p>
                <p>⭐Like to be patted  </p>
                <button onClick={()=>{navigate('/book',{state:"Lily"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
             <img src={Ginger} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Ginger</h2>
                <p>⭐male</p>
                <p>⭐2 Years old</p>
                <p>⭐Over playful</p>
                <button onClick={()=>{navigate('/book',{state:"Bella"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={Mama} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Luna</h2>
                <p>⭐Female</p>
                <p>⭐4 Years old</p>
                <p>⭐Protective Mother</p>
                <button onClick={()=>{navigate('/book',{state:"Jack"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={Onbed} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Toby</h2>
                <p>⭐Male</p>
                <p>⭐12 months old</p>
                <p>⭐Like to sleep on the lap </p>
                <button onClick={()=>{navigate('/book',{state:"Luke"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={Sleep} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Simba</h2>
                <p>⭐Male</p>
                <p>⭐6 months old</p>
                <p>⭐Tiny paws</p>
                <button onClick={()=>{navigate('/book',{state:"Luck"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={Smurf} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Dusty</h2>
                <p>⭐Male</p>
                <p>⭐1 Year old</p>
                <p>⭐Chubby boy</p>
                <button onClick={()=>{navigate('/book',{state:"Jax"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={Tiny} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Ash</h2>
                <p>⭐Male</p>
                <p>⭐3 months old</p>
                <p>⭐Love to play Hide & Seek</p>
                <button onClick={()=>{navigate('/book',{state:"Bill"})}} className="card-btn" >Book</button>
             </div>
          </div>
        </div>
        </>
    )
}

export default Cats