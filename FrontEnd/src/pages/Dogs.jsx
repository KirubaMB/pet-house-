import Head from "./Head"
import Mani from '../assets/dogs/bis.jpg'
import black from '../assets/dogs/black.jpg'
import cheemps from '../assets/dogs/cheemps.jpg'
import husky from '../assets/dogs/husky.jpg'
import kisses from '../assets/dogs/kisses.jpg'
import twins from '../assets/dogs/twins.jpg'
import wheenar from '../assets/dogs/weeni.jpg'
import white from '../assets/dogs/white.jpg'
import Dark from '../assets/dogs/dark.jpg'
import Cooler from '../assets/dogs/cooler.jpg'
import { useNavigate } from "react-router-dom"

function Dogs(){
   const navigate=useNavigate();
    return(
        <>
        <Head />
        <div className="dogs-container">
          <div>
             <img src={Mani} className="dog-img"></img>
             <div className="dog-desc">
             <h2 className="dog-name">Lucy</h2>
             <p>⭐Female</p>
             <p>⭐2 Years old</p>
             <p>⭐Love to play with frisbee</p>
             <button onClick={()=>{navigate('/book',{state:"Lucy"})}} className="card-btn" >Book</button>
             </div> 
          </div>
          <div>
             <img src={black} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Bob</h2>
                <p>⭐Male</p>
                <p>⭐3 Years old</p>
                <p>⭐Friendly toward people</p>
                <button onClick={()=>{navigate('/book',{state:"Bob"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
             <img src={cheemps} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Max</h2>
                <p>⭐Male</p>
                <p>⭐11 months old</p>
                <p>⭐Like to take bath</p>
                <button onClick={()=>{navigate('/book',{state:"Max"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
             <img src={twins} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Lily&Finn</h2>
                <p>⭐Female & Male</p>
                <p>⭐4 months old</p>
                <p>⭐Playful twins</p>
                <button onClick={()=>{navigate('/book',{state:"Lily"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
             <img src={Dark} className="dog-img"></img>
             <div className="dog-desc">
                <h2 className="dog-name">Bella</h2>
                <p>⭐Female</p>
                <p>⭐5 Years old</p>
                <p>⭐Silent type</p>
                <button onClick={()=>{navigate('/book',{state:"Bella"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={husky} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Jack</h2>
                <p>⭐Male</p>
                <p>⭐3 Years old</p>
                <p>⭐ Plays with its own toys </p>
                <button onClick={()=>{navigate('/book',{state:"Jack"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={kisses} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Luke</h2>
                <p>⭐Male</p>
                <p>⭐1 Year old</p>
                <p>⭐He give free kisses</p>
                <button onClick={()=>{navigate('/book',{state:"Luke"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={Cooler} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Luck</h2>
                <p>⭐Male</p>
                <p>⭐2 Years old</p>
                <p>⭐Love to give poses</p>
                <button onClick={()=>{navigate('/book',{state:"Luck"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={wheenar} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Jax</h2>
                <p>⭐Male</p>
                <p>⭐5 Years old</p>
                <p>⭐Sleepy head </p>
                <button onClick={()=>{navigate('/book',{state:"Jax"})}} className="card-btn" >Book</button>
             </div>
          </div>
          <div>
          <img src={white} className="dog-img"></img>
          <div className="dog-desc">
                <h2 className="dog-name">Bill</h2>
                <p>⭐Male</p>
                <p>⭐4 Years old</p>
                <p>⭐Love to play with Ball</p>
                <button onClick={()=>{navigate('/book',{state:"Bill"})}} className="card-btn" >Book</button>
             </div>
          </div>
        </div>
        </>
    )
}

export default Dogs