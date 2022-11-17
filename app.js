var express = require('express');  
var app = express();  

app.use(express.static('public'));

 app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});


app.listen(2000, function (err) {
    if (err) { console.error(err); }
    else { console.log("Server started"); }
});
