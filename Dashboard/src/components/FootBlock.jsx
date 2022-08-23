import {useState} from 'react'
import './FootBlock.css'

export default function FootBlock (){
  const [istoogle, setistoogle] = useState(false);
  
  const toogle = () => {
    setistoogle(!istoogle);
  }

  return (
    <>
       <div className='foot-container'>
          <h1 className="foot-h1">Traveling via Delhi,
Dehradun or Chandigarh?</h1>
         <h1 className="foot-h1">Rent while you transit 
& save even more!</h1>
         
         <div className="foot-element">
          <h1 className="foot-h1">Save upto <strong>
20%</strong></h1>
          <button className="foot-button" onClick={() => toogle()}>Know More</button>
        </div>

         {istoogle &&
          <div className="popup-container">
            <button className="popup-background" onClick={() => toogle()} />
              <div className="foot-pop-container">
                <div className="foot-pop-container-element">
                  <h1>
How does the delivery & pick-up works?</h1>
                  <p>The delivery can be done at the point of your arrival like railway station, airport, bus terminals etc. or a point of your choice within the city limits.
<br/><br/>
Similarly when you return, the pick-up will be arranged from the point of your arrival. If the point of delivery and pickup is not same, just inform our support team and they will do the needful.
<br/><br/>
Please note that you need to have at least 2 hours for smooth delivery & pick-up.</p>
                </div>
                <h1 style={{fontSize: "2rem"}}>Why should you consider this?</h1>
              </div>
          </div>
         }
         
       </div>      
    </>
  );
}