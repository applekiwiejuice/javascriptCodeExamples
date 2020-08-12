const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req , res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/" , function(req, res) {
  console.log(req.body.cityName);
  console.log("Post Received!");
  // API KEY REMOVED
  const apiKey = "";
  const query = req.body.cityName;
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
    https.get(url , function(response){
      console.log(response.statusCode);

      response.on("data" , function(data) {

        const weatherData = JSON.parse(data);
        const weatherDescription = weatherData.weather[0].description;
        const temp = weatherData.main.temp;
        const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png";
        console.log(weatherDescription);
        res.write("<h1>The Temperature in " + query + " now is</h1>" + "<h1>" +  temp + " Degrees Celsius</h1>");
        res.write("<h1>The Weather in " + query + " now is</h1>" + "<h1>" +  weatherDescription.toUpperCase() + "</h1>" );
        res.write("<img src=" + icon + ">");
        res.send();
      })
    })
});




app.listen(3000, function(){
  console.log("Server Running on 3000");
});


// Notes:

// app.get("/" , function(req , res) {
//   res.send("Test");
// });

// const object = {
//   name: "nikko" ,
//   age: 35
// }
//
// JSON.stringify(object);
// console.log(object);
