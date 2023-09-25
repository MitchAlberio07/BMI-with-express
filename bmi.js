const express = require('express');

const app = express();
app.use(express.urlencoded ({extended: true}));

app.get('/', function (req, res) {
    res.sendFile (__dirname + "/index.html");
});

app.post ("/", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result = weight / (height * height) ;

    if (result < 18.5){
         res.send("The BMI is " + result + " Underweight");
       } else if (result < 25) {
         res.send("The BMI is " + result + " Normal");
       } else if (result < 30) {
         res.send("The BMI is " + result + " Overweight");
       } else {
        res.send("The BMI is " + result + " Obese");
}
});

//adding port
app.listen(3000, function () {
    console.log ("Server started on port 3000")
}); 
