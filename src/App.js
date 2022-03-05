import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import './App.css';
import Singlecard from './component/Singlecard';
// import {useSate} from re
const cardimages=[
{"src":"/img/img1.png",matched:false},
{"src":"/img/img2.png",matched:false},
{"src":"/img/img2 copy.png",matched:false},
{"src":"/img/img2 copy 2.png",matched:false},
{"src":"/img/img3.png",matched:false},
{"src":"/img/img4.png",matched:false},
{"src":"/img/img5.png",matched:false},
{"src":"/img/img6.png",matched:false}


]


function App() {
  const[cards,setCards] =useState([])
  const[turns,setTurns]= useState(0)
  const[choiceone,setChoiceone]=useState(null)
  const[choicetwo,setChoiceTwo]=useState(null)
  const[disabled,setdisabled]=useState(false)



  //shuffle cards
  const shufflecards=()=>{
    const shuffledCards=[...cardimages,...cardimages]
    .sort(() =>Math.random() - 0.5)
    .map((card)=> ({...card,id:Math.random()}))
    setChoiceTwo(null)
    setChoiceone(null)
    setCards(shuffledCards)
    
    setTurns(0)
  }

  //handle a choice
  const handlechoice=(card)=>{
    if(choiceone){
      setChoiceTwo(card)
      console.log("hey")
    }
    else{
      setChoiceone(card)
    }
  }
//
useEffect(()=>{
  if(choiceone && choicetwo){
    setdisabled(true)
    if(choiceone.src === choicetwo.src){
      console.log("MAtch")


      setCards(prevCards =>{
        return prevCards.map(card=>{
          if(card.src===choiceone.src){
            return{...card,matched:true}}
          
          else{
            return card}
          
        })
      })

     resetTurns()
    }
    else{
      console.log("Not match")
      setTimeout(()=>resetTurns(),1000) 
    }
  }
},[choiceone,choicetwo])
  //reset choices
  const resetTurns=()=>{
    setChoiceTwo(null)
    setChoiceone(null)
    setTurns(prevTurns =>prevTurns+1)
    setdisabled(false)
  }

useEffect(()=>{
shufflecards()
},[])

  return(
    <>

    <div className="App">
      <h1>Avtaar Memory Game</h1>
      {/* <Button onClick={shufflecards}>NEw game</Button> */}
      <Button variant="success" onClick={shufflecards}>New game</Button>
        <div className="card-grid"  >
          {
            cards.map(card=>(
             <Singlecard 
             key={card.id} 
             card={card} 
             handlechoice={handlechoice}
             flipped ={card === choiceone || card  === choicetwo || card.matched}
             disabled={disabled}
             />
            )
            )
          }
          <h3>
            Turn: {turns}
          </h3>
        </div>
    </div>
    
  

    </>
  )
}

export default App;
