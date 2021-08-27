var sm = document.getElementById("Farm");
var paper = sm.getContext("2d");

var gross = {
  url: "tile.png",
  loadOk: false
};

var cow = {
  url: "vaca.png",
  loadOk: false
};

var chicken = {
  url: "pollo.png",
  loadOk: false
};

var pig = {
  url: "cerdo.png",
  loadOk: false
};

numCow = aleatory(5, 9);
numPig = aleatory(1, 2);

gross.object = new Image();
gross.object.src = gross.url;
gross.object.addEventListener("load", drawGross);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", drawCow);

chicken.object = new Image();
chicken.object.src = "pollo.png";
chicken.object.addEventListener("load", drawChicken);

pig.object = new Image();
pig.object.src = "cerdo.png";
pig.object.addEventListener("load", drawPig);

/*var farmer = new Image();
farmer.src = "farmer2.png";
farmer.addEventListener("load", drawFarmer);*/

function drawGross()
{
  gross.loadOk = true;
  draw();
}

function drawCow()
{
    cow.loadOk = true;
    draw();
}

function drawChicken()
{
    chicken.loadOk = true;
    draw();
}

function drawPig()
{
    pig.loadOk = true;
    draw();
}

function draw()
{
  if(gross.loadOk)
  {
    paper.drawImage(gross.object, 0, 0);
  }
  if(cow.loadOk)
  {
    for(var v = 0; v < numCow; v ++)
    {
      var x = aleatory(0, 5);
      var y = aleatory(0, 4);
      var x = x * 70;
      var y = y * 70;
      paper.drawImage(cow.object, x, y);
    }

  }
  if(chicken.loadOk)
  {
    paper.drawImage(chicken.object, 370, 370);
  }
  if(pig.loadOk)
  {
    for(var p = 0; p < numPig; p ++)
    {
      var xx = aleatory(0, 5);
      var yy = aleatory(0, 4);
      var xx = xx * 70;
      var yy = yy * 70;
      paper.drawImage(pig.object, xx, yy);
    }
  }
}

function aleatory(min, max)
{
  var result;
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
