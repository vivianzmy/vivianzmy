const audio = new Audio("audio.mp3");
var body = document.querySelector("body")
let colors = ["magenta", "black", "lightblue", "lightpink", "#42280E", "turquoise", "lightgreen", "rebeccapurple"];


function error() {
  audio.play();
  alert("STOP. GO TO SLEEP.");

let randIndex = Math.floor(Math.random() * colors.length);
let randColor = colors[randIndex];

}

document.querySelector('.btn1').addEventListener('click', showBtn1); 
document.querySelector('.btn2').addEventListener('click', showBtn2); 
document.querySelector('.btn3').addEventListener('click', showBtn3); 
document.querySelector('.btn4').addEventListener('click', showBtn4); 
document.querySelector('.btn5').addEventListener('click', showBtn5); 
document.querySelector('.btn6').addEventListener('click', showBtn6);
document.querySelector('.btn7').addEventListener('click', showBtn7); 
document.querySelector('.btn8').addEventListener('click', showBtn8); 


document.querySelector('.btn2').style.display = 'none';
document.querySelector('.btn3').style.display = 'none'; 
document.querySelector('.btn4').style.display = 'none'; 
document.querySelector('.btn5').style.display = 'none'; 
document.querySelector('.btn6').style.display = 'none'; 
document.querySelector('.btn7').style.display = 'none'; 
document.querySelector('.btn8').style.display = 'none'; 
 
function showBtn1(e) { 
 document.querySelector('.btn2').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn2(e) { 
 document.querySelector('.btn3').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn3(e) { 
 document.querySelector('.btn4').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn4(e) { 
 document.querySelector('.btn5').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn5(e) { 
 document.querySelector('.btn6').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn6(e) { 
 document.querySelector('.btn7').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn7(e) { 
 document.querySelector('.btn8').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn8(e) { 
 document.querySelector('.buttons').style.display = 'none'; 
 e.preventDefault(); 
} 
