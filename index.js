
for( let i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",gotc);
 
}
function gotc(){
    let b=this.innerHTML;
    buttonAnimation(b);
    
let sound;
    switch (b) {
        case "w":
        sound=new Audio("./sounds/tom-1.mp3");
        break;
        case "a":
         sound=new Audio("./sounds/tom-2.mp3");
        break;
        case "s":
       sound=new Audio("./sounds/tom-3.mp3");
        break;
        case "d":
        sound=new Audio("./sounds/tom-4.mp3");
        break;
        case "j":
         sound=new Audio("./sounds/snare.mp3");
        break;
        case "k":
        sound=new Audio("./sounds/crash.mp3");
        break;
        case "l":
        sound=new Audio("./sounds/kick.mp3");
        break;

        default: console.log("earror");
            
    }
    sound.play();
}

document.addEventListener("keydown",function(event){
    let b=event.key;
    let s;
    buttonAnimation(b);
   switch (b) {
        case "w":
        s=new Audio("./sounds/tom-1.mp3");
        break;
        case "a":
         s=new Audio("./sounds/tom-2.mp3");
        break;
        case "s":
       s=new Audio("./sounds/tom-3.mp3");
        break;
        case "d":
        s=new Audio("./sounds/tom-4.mp3");
        break;
        case "j":
         s=new Audio("./sounds/snare.mp3");
        break;
        case "k":
        s=new Audio("./sounds/crash.mp3");
        break;
        case "l":
        s=new Audio("./sounds/kick.mp3");
        break;

        default: break;
            
    }
    s.play();
});

 function buttonAnimation(but){
   let ab=document.querySelector("."+but);
   ab.classList.add("pressed");
   setTimeout(function (){ ab.classList.remove("pressed");},200);
 }
