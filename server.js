const express = require('express');
const app = express();

app.get("/", function (req, res) {
  var ip = req.headers["x-forwarded-for"].split(",")[0];
  
  var obj = {"ip":ip};
  
  res.end(JSON.stringify(obj));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
