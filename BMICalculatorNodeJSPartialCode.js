const express = require("express");
app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(4000 , function(){
  console.log("Server Running on 4000");
})

app.get("/", function(req ,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/" , function(req , res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  console.log(height);
  console.log(weight);
  var bmi = weight / Math.pow(height,2);
  bmi = Math.round(bmi);

  res.send("Your BMI is: "+ bmi);
});
