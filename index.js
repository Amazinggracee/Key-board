let keyLength = document.querySelectorAll("button").length;

for(let i= 0; i<keyLength; i++ ){
document.querySelectorAll("button")[i].addEventListener("click", run)
}
function run(){
 

  
  
  let piano = this.classList[1];
  anim(piano);
  
  if(piano == "C"){
    let audio = new 
  
  

Audio("https://dl.dropboxusercontent.com/s/7lnp62b6l48pith/GrandPianoShort_25_C4_78_SP.wav");
    audio.play();
  }
  else if(piano == "D"){
    let audio = new Audio("https://dl.dropboxusercontent.com/s/ps6jbtmrblypiaj/GrandPianoShort_51_D6_78_SP.wav");
    audio.play();

  }
  else if(piano == "E"){
    let audio = new Audio("https://dl.dropboxusercontent.com/s/vr1nhl3zwzqrf21/GrandPianoLong_05_E2_78_SP.wav");
    audio.play();

  }
  else if(piano == "F"){
    let audio = new Audio("https://dl.dropboxusercontent.com/s/8v648dui51usfik/F_Piano_412_SP_02.wav");
    audio.play();

  }
  else if(piano == "G"){
    let audio = new Audio("https://dl.dropboxusercontent.com/s/wu2jk3k2dsnhj8m/G_SinglePianoNote_SP_417.wav");
    audio.play();

  }
  else if(piano == "A"){
    let audio = new Audio("https://dl.dropboxusercontent.com/s/zfw1v7ms5w1kd9f/GrandPianoLong_70_A7_78_SP.wav");
    audio.play();

  }
  else if(piano == "B"){
    let audio = new Audio("https://dl.dropboxusercontent.com/s/luqez2oe0b3rv2b/GrandPianoShort_48_B5_78_SP.wav");
    audio.play();

  }
  //
  else{
    alert("Sing a song.");
  }

    
}

//Another listener call amimation (anim).

for(let i= 0; i<keyLength; i++ ){
document.querySelectorAll("button")[i].addEventListener("keypress", function(event){
let sourceKey = event.key;
  anim(sourceKey)
  
let useKey = sourceKey.toUpperCase();

switch(useKey){
  case "C":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/7lnp62b6l48pith/GrandPianoShort_25_C4_78_SP.wav");
    audio.play();
    
    break;
    
      case "D":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/wu2jk3k2dsnhj8m/G_SinglePianoNote_SP_417.wav");
    audio.play();
    
    break
    
          case "E":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/vr1nhl3zwzqrf21/GrandPianoLong_05_E2_78_SP.wav");
    audio.play();
    
    break;
    
    
    
     case "F":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/8v648dui51usfik/F_Piano_412_SP_02.wav");
    audio.play();
    
    break;
    
         case "G":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/wu2jk3k2dsnhj8m/G_SinglePianoNote_SP_417.wav");
    audio.play();
    
    break;
    
             case "A":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/zfw1v7ms5w1kd9f/GrandPianoLong_70_A7_78_SP.wav");
    audio.play();
    
    break;
    
          case "B":
 var audio = new Audio("https://dl.dropboxusercontent.com/s/luqez2oe0b3rv2b/GrandPianoShort_48_B5_78_SP.wav");
    audio.play();
    
    
}
  
})
}



function anim(target){
  document.querySelectorAll("." + target)[0].classList.add("pressed");
  
  
  setTimeout(function(){
document.querySelectorAll("." + target)[0].classList.remove("pressed");
}, 800);
  
  
}
