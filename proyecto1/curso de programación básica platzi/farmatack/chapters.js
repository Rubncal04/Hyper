var images = [];
images["Cowsauro"] = "vaca.png";
images["Chickensour"] = "pollo.png";
images["Piggersor"] = "cerdo.png";

var collection = [];
collection.push(new Farmsauros("Cowsauro","Earth", 400, 50));
collection.push(new Farmsauros("Chickensour", "Water", 300, 60));
collection.push(new Farmsauros("Piggersor", "Fire", 500, 65));

for(var p of collection)
{
  p.show();
}
