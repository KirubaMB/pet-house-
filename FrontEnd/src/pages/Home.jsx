import Cat from '../assets/cat.png'
import Cat2 from '../assets/cat (1).png'
import Dog from '../assets/dog.png'
import Whale from '../assets/whale.png'
import Head from './Head'


function Home(){
    return(
        <>   
        <Head />
        <div className="welcome-container">
    <h1 className="welcome">Welcome to Maddy's pet house </h1>
    <div>
        <a href="/login"><button className="login-btn">SignIn</button></a>
        <a href="/register"><button  className="reg-btn">SignUp</button></a>
    </div>
    <img src={Cat} className="cat" alt="cat" />
    <img src={Cat2} className="cat2" alt="cat"/>
    <img src={Dog} className="dog" alt="cat"/>
    <img src={Whale} className="whale" alt="cat"/>
   </div>

        </>
    )
}

export default Home