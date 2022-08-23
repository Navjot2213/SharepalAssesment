import {useState} from 'react'
import './WhatsappLogo.css'

export default function WhatsappLogo(){
  const [istoogle, setistoogle] = useState(false);
  
  const toogle = () => {
    setistoogle(!istoogle);
  }
  return (
    <>
     <img className='whatsapp-logo' onClick={()=> toogle()} src="https://ik.imagekit.io/faskf16pg/Branding/Main/whatapp-sharepal_6GcbqnN5e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657830361133" />
   
      { istoogle &&
        <div className="popup-container">
            <button className="popup-background" onClick={() => toogle()} />
              <div className="whatsapp-pop-container">
                <div className="whatsapp-info">
                  <img src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png"/>
                  <div className="whatsapp-info-text">
                    <h3>Whatsapp Us</h3>
                    <p>We are here to help you with all your queries :)</p>
                  </div>
                </div>
                
                <div className="whatsapp-form">
                  <input placeholder="Your Name" />
                  <div className="mobile-no">
                  <select style={{minWidth: "60px"}}>
                    <option>91</option>
                  </select>
                  <input placeholder="Enter Whatsapp Number" />
                  </div>
                  <select>
                    <option style={{display: "none"}}>How can we help?</option>
                    <option>Need help with New Order</option>
                    <option>Need help with Existing Order</option>
                  </select>
                  <button>
                    <h2><i class="fa fa-whatsapp" style={{fontSize: "28px"}}/> Whatsapp Us</h2>
                  </button>                    
                </div>
              
              </div>
         </div>
      }
    </>
  );
}