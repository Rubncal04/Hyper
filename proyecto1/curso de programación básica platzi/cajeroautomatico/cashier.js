class Bills
{
  constructor(v, n)
  {
    this.cash = v;
    this.numbers = n;
  }
}

function moneyGiven()
{
  var c = document.getElementById("cash");
  money = parseInt(c.value);

  for(var bi of box)
  {
    if(money > 0)
    {
      div = Math.floor(money / bi.cash);
      if(div > bi.numbers)
      {
        paper = bi.numbers;
      }
      else
      {
        paper = div;
      }

      given.push(new Bills(bi.cash, paper));
      money -= (bi.cash * paper);

    }
  }

  if(money > 0)
  {
    result.innerHTML = "I'm a bad Atm";
  }
  else
  {
    for(var e of given)
    {
      if(e.numbers > 0)
      {
        result.innerHTML += e.numbers + " bills $" + e.cash + "<br />";
      }
    }
  }
}

var given = [];
var box = [];
box.push(new Bills(100, 5));
box.push(new Bills(50, 15));
box.push(new Bills(20, 10));
box.push(new Bills(10, 35));

var money = 0;
var div = 0;
var paper = 0;

var result = document.getElementById("result");
var b = document.getElementById("extract");
b.addEventListener("click", moneyGiven);
