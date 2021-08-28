class Farmsauros
{
  constructor(name, kind, life, power)
  {
    this.images = new Image();
    this.name = name;
    this.kind = kind;
    this.life = life;
    this.power = power;

    this.images.src = images[this.name];
  }

  speak()
  {
    alert(this.name);
  }

  show()
  {
    document.body.appendChild(this.images);
    document.write("<p>");
    document.write("<strong>" + this.name + "</strong> <br />");
    document.write("Life: " + this.life + "<br />" );
    document.write("Kind: " + this.kind + "<br />");
    document.write("Power: " + this.power + "<hr />");
    document.write("</p>");
  }
}
