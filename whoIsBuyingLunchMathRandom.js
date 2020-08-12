function whosPaying(names){
var n = Math.random();
n = Math.floor(n * names.length);
return names[n] + " is going to buy lunch today!";
}

whosPaying(["Angela" , "Ben" , "Jenny" , "Michael" , "Chloe"])
