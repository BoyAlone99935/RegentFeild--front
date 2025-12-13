import React from 'react'
import atm from './assets/atm.png'
import { Bus, BusFrontIcon, BusIcon, Globe, Globe2, HeadsetIcon, HomeIcon, LucideALargeSmall, LucideFileChartColumnIncreasing, ShieldCheck } from 'lucide-react'
function Card() {
  return (
   <>
    <div className='card-gen'>
     <div className='atm'>
       <img src={atm}/>
     </div>

      <div className='oga-cont'>
        <h2 style={{textAlign : 'center'}}>A Card That Works</h2>

        <div className='inside-container'>
          <span className='get'>What you get:</span>
          <div className='card-card-cont' style={{marginTop:'1rem'}}>
            <ShieldCheck className='card-icon'/>
            <div> <span className='qstt'>Reliable Card</span>
            <span className='ansss'>A dependable card designed for seamless, secure payments.</span></div>
         </div>

          <div className='card-card-cont'>
            <HeadsetIcon className='card-icon'/>
            <div><span className='qstt'>Fast Dispute Resolution</span>
            <span className='ansss'>Our support team works fast to investigate and resolve disputes, keeping your funds protected.</span></div>
          </div>

          <div className='card-card-cont'>
            <Bus className='card-icon'/>
            <div><span className='qstt'>Fast Delivery</span>
            <span className='ansss'>Get your card quickly with instant virtual access and fast physical delivery.</span></div>
          </div>

           <div className='card-card-cont'>
            <Globe className='card-icon'/>
            <div><span className='qstt'>Online Payment</span>
            <span className='ansss'>Pay all your favourite online merchants</span></div>
          </div>
        </div>
      </div>
    </div>
    <button className='order-card'>Order Card</button>
    </>
  )
}

export default Card
