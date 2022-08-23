import './HeadBlock.css'
import Like from '../assets/like.png'
import Delivery from '../assets/delivery.png'
import Pay from '../assets/pay.png'

export default function HeadBlock (){

  return (
    <>
       <div className='head-container'>
        <div className="head-element">
          <div className="head-img">
            <img className="head-img" alt="" src={Like} />
          </div>
          <h1 className="head-h1">Excellent Quality Products</h1>
        </div>
        <div className="vr"></div>
         
         <div className="head-element">
          <div className="head-img">
            <img className="head-img" alt="" src={Delivery} />
          </div>
          <h1 className="head-h1">Delivery Date & Return Date is FREE!!</h1>
        </div>
        <div className="vr"></div>
         
         <div className="head-element">
          <div className="head-img">
            <img className="head-img" alt="" src={Pay} />
          </div>
          <h1 className="head-h1">Pay on Delivery</h1>
        </div>
         
       </div>      
    </>
  );
}