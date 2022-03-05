import './Singlecard.css'
import React from 'react'

export default function Singlecard({card,handlechoice,flipped,disabled}) {
const handleclick=()=>{
  if(!disabled)
  {handlechoice(card)}
}

  return (
         <div className="card"  >
              <div className={flipped? "flipped" :"" }>
                <img src={card.src} alt="cardfront" className="front" />
                <img  src="./img/sample.png" 
                alt="cardback" 
                className="back"
                 onClick ={handleclick} 
                  />
                  </div>
              </div>


            )
  }
      
