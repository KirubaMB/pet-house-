import { Link } from "react-router-dom"

function Head(){
    return(
        <>
    <div className="nav-bar">
    <h1 className="logo">Maddy🐥</h1>
    <ul>
        <li><Link to="/"><h3>Home</h3></Link></li>
        <li><Link to="/login"><h3>Login</h3></Link></li>
        <li><Link to="/register"><h3>Register</h3></Link></li>

    </ul>
    </div>
        
        </>
    )
}

export default Head