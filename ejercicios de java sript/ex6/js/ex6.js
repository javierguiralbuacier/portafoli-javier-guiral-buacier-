let canvas = document.getElementById("canvas");
let ctx =canvas.getContext("2d");

let scale =window.devicePixelRatio;

canvas.width = 900
canvas.height =420

//cielo 
ctx.fillStyle = "#90d4ff";
ctx.fillRect(0, 0, 3000, 2011);

//mar
ctx.fillStyle = "blue";
ctx.fillRect(0, 180, 3000, 7001);


// suelo
ctx.beginPath();
ctx.ellipse(450,177,135,30,0,0,Math.PI * 2)

ctx.fillStyle = "green";
ctx.fill();

//casa
ctx.fillStyle = "black";
ctx.fillRect(410, 90, 80, 70);


ctx.fillStyle = "pink";
ctx.fillRect(425, 105, 20, 20);


ctx.fillStyle = "orange";
ctx.fillRect(455, 105, 20, 20);


ctx.fillStyle = "pink";
ctx.fillRect(440, 140, 20, 20);



//dibujar triangulo 
ctx.beginPath();
ctx.moveTo(450,55);
ctx.lineTo(400,95);
ctx.lineTo(500,95);
ctx.closePath();

ctx.fillStyle = "orange";
ctx.fill();

ctx.fillStyle = "white";
ctx.fillRect(425, 80, 50, 15);

//ponemos texto 
ctx.font = "8px Arial"
ctx.fillStyle = "black"
ctx.fillText("j+h house",435 ,90)

// sol 
ctx.beginPath();
ctx.arc(750,7,45,0,Math.PI * 2)

ctx.fillStyle = "yellow";
ctx.fill();





//arbol 
ctx.fillStyle = "brown";
ctx.fillRect(350, 140, 5, 40);

//copa del arbol 1
ctx.beginPath();
ctx.arc(352,125,15,0,Math.PI * 2);

ctx.fillStyle = "green";
ctx.fill();


//copa del arbol 2
ctx.beginPath();
ctx.arc(542,125,15,0,Math.PI * 2);

ctx.fillStyle = "green";
ctx.fill();

//arbol 2 
ctx.fillStyle = "brown";
ctx.fillRect(540, 140, 5, 40);

//palo de metal y bola 
ctx.fillStyle = "grey";
ctx.fillRect(449,47, 2, 18);


ctx.beginPath();
ctx.arc(450,47,5,0,Math.PI * 2)

ctx.fillStyle = "grey";
ctx.fill();



// fillrect -> rectangle
