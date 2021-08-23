var text = document.getElementById("text_box");
var bottom = document.getElementById("bottom_box");

bottom.addEventListener("click", drawByClick);


var d = document.getElementById("picturie");
var lienzo = d.getContext("2d");

function lines(color, xinitial, yinitial, xend, yend) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinitial,yinitial);
	lienzo.lineTo(xend,yend);
	lienzo.stroke();
	lienzo.closePath();
}
var line = 30;
var l = 0;
var yi, xf;

while(l < line)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	lines("blue",0,yi,xf,300);
	l += 1;
}

lines("darkblue",1,1,1,299)
lines("darkblue",1,299,299,299)

function drawByClick()
{ 
	alert("don´t touch here " + text.value);
}

//esta es la forma en ciclo for teniendo en cuentas las demás líneas de código

//for(l = 0; l < line; l ++)
//{
//	yi = 10 * l;
//	xf = 10 * (l + 1);
//	lines("blue",0,yi,xf,300);
//	l += 1;
//}