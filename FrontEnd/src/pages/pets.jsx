import '../index.css'
import { Link } from 'react-router-dom'
import Head from './Head'
import Cat from '../assets/cats/ginger.jpg'
import Twins from '../assets/dogs/twins.jpg'
import { useLocation } from 'react-router-dom'
function Pets(){
  const location=useLocation();
  const user_data=location.state;

  if(!user_data || !user_data.name){
    return <h1>Error Username</h1>
  }

    return(
        <>
        <Head />
        <h1 className='welcome_user'>Welcome to maddy's pet house, <strong>{user_data.name}</strong></h1>
        <div className="big-container">
          <div className='sub-container'>
          <div className='layer'>
            <Link to="/dogs"><img src={Twins} alt="kiss dog" className='intro-dog' /></Link>
            </div> 
              <div className='layer2'>
               <Link to="/cats"><img src={Cat} alt="cat" className='intro-cat' /></Link>
              </div>
          </div>
            
        </div>
        </>
    )
}

export default Pets