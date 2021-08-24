var keys = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

document.addEventListener("keydown", drawKeyboard);

var b = document.getElementById("pictureArea");
var paper = b.getContext("2d");
var x = 100;
var y = 100;

lines("darkblue", x - 1, y - 1, x + 1, y + 1, paper);

function lines(color, xinitial, yinitial, xend, yend,lienzo) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.linewidth = 3; //esto sirve para darle grueso a la linea
	lienzo.moveTo(xinitial,yinitial);
	lienzo.lineTo(xend,yend);
	lienzo.stroke();
	lienzo.closePath();
}

function drawKeyboard(event) 
{
	var colorie = "greenlight";
	var move = 1;
	switch(event.keyCode)
	{
		case keys.UP:
			lines(colorie, x, y, x, y - move, paper);
			y = y - move;
		break;
		case keys.DOWN:
			lines(colorie, x, y, x, y + move, paper);
			y = y + move;
		break;
		case keys.LEFT:
			lines(colorie, x, y, x - move, y, paper);
			x = x - move;
		break;
		case keys.RIGHT:
			lines(colorie, x, y, x + move, y, paper);
			x = x + move;
		break;
		default:
			console.log("other key");
		break;
	}
}







/*con este código podremos saber la tecla que eñ usuario ha oprimido muchas veces

document.addEventListener("keydown", drawKeyboard);

function drawKeyboard(event) 
{
	console.log("cursor touch");
	console.log(event);
}*/