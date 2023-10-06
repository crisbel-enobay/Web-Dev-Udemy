function whosPaying(names){
    var nameIndex = Math.floor(Math.random() * names.length);
    return names[nameIndex] + " is going to buy lunch today!";
}
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);