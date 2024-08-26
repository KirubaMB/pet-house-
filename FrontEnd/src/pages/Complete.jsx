import { useLocation } from "react-router-dom"
import Head from "./Head";
import Insta from "../assets/instagram (1).png"
import Wapp from "../assets/whatsapp.png"
import Git from "../assets/github.png"
import Phone from "../assets/telephone.png"

function Complete(){
    const location=useLocation();
    const data=location.state
    return(
        <>
        <Head />
        <div className="end-container">
        <div className="thanks">
         <h1><strong className="maj">Subject:</strong> Your Private Petting Session is Confirmed! 🐾</h1>
         <h2>Dear <strong className="maj">{data.name}</strong>,</h2>
         <h4>Thank you for booking a private petting session with us! <br />
          We're thrilled to have you and your furry friend(s) join us for some special one-on-one time.</h4>
           <div className="book-dtl">
                <h2>Details of your booking:</h2>
                <p>Date: {data.date}</p>
                <p>Time: {data.time}</p>
                <p>Location: maddy's pethouse,near MGR bus stand, Madurai-625007</p>
           </div>
              <p>
              We can't wait to see you and ensure that your petting experience is both relaxing and enjoyable.<br />
               If you have any special requests or need to reschedule, please don't hesitate to contact us at <strong className="maj"><a href="mailto:ajayalbertd@gmail.com">ajayalbertd@gmail.com</a></strong>.
              </p>
              <h2>Looking forward to a purr-fect time together!</h2>
              <div className="regards">
                 <h3>Best regards,</h3>
                   <p>Ajay Albert.DJ,Gokul Ganesh,Rishi Kumar</p>
                   <p>Maddy's pet house</p>
                   <p>9500760045</p>
                   <p>8525980232</p>
                   <div className="links">
                   <a href="https://www.instagram.com/madbeast2505/"><img src={Insta} className="link" /></a>
                   <a href="tel:+919500760045"><img src={Wapp} className="link"/></a>
                   <a href="tel:+919500760045"><img src={Phone} className="link"/></a>
                   <a href="https://github.com/madbeast25"><img src={Git} className="link"/></a>

                   </div>
                   
                   
         
              </div>
            </div>
        
        </div>
        
        </>
    )
}

export default Complete