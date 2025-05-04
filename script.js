let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let bulb = document.querySelector(".bulb");
let span = document.querySelector("span");
let h2 = document.createElement("h2")

btn.onclick = function(){
   body.classList.toggle("on");


//    if(this.classList.toggle('on')){
//       body.style.background = 'black';
//       bulb.style.background = 'orange';
//       span.style.background = 'orange';
//       body.style.transition = '1s';
     
//   }else{
//       body.style.background = 'rgb(0, 0, 0)';
//       body.style.transition = '1s'; 
//       bulb.style.background = ' cornsilk';
//       bulb.style.background = 'cornsilk';

// }

}