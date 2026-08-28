const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 150, 80);

ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.strokeRect(250, 50, 150, 80);

ctx.beginPath();
ctx.arc(550, 90, 40, 0, Math.PI * 2);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.ellipse(700, 90, 70, 35, 0, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(200, 300);
ctx.strokeStyle = "purple";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(400, 150);
ctx.lineTo(500, 200);
ctx.lineTo(400, 250);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 180);
ctx.lineTo(700, 180);
ctx.lineTo(650, 280);
ctx.closePath();
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 350);
ctx.lineTo(200, 320);
ctx.lineTo(250, 400);
ctx.lineTo(150, 430);
ctx.closePath();
ctx.strokeStyle = "brown";
ctx.lineWidth = 4;
ctx.stroke();