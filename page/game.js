
import React from 'react';

import '../App.css';

import { StatusBar } from 'expo-status-bar';

 
function Game() {
    /*let image = document.querySelector('#image');

    if(screen.classList.contains('waiting')){
        
    }
    let a=new Date();
    let b= new Date();*/
  return (
    
   
    
    <div className="App">
     
     <div id="heart">
      <div id="ht1">
        
      </div>
      <div id="ht2">
        
      </div>
      <div id="ht3">
        
      </div>
      <div id="ht4">
        
      </div>
      <div id="ht5">
        
      </div>
        
      
     </div>

     <div id="timeCont"> 
     <p id="time">00:00 </p>
     </div>
    <div id="imgBox">
     <div id="image">


     </div>
     </div>

     <div id="start">
        <button class="start" type="button">start</button>
     </div>
    </div>
  );
}

export default Game;
