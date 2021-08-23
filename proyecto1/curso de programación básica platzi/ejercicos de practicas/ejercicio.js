var c = document.getElementById('picturie');
var lienzo = c.getContext("2d");

function lines(color, xinicial, yinitial, xend, yend) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinitial);
	lienzo.lineTo(xend, yend);
	lienzo.stroke();
	lienzo.closePath();
}

line = parseInt(prompt("Enter the number of lines you want to see: "));
var l = 0;
var xi, yf;

while(l < line)
{
	xi = 10 * (l+1);
	yf = 10 * l
	lines("darkgreen",xi, 400, 0, yf);
	l += 1;
}
