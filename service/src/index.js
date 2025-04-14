const express = require("express");
var app = express();
const route = require("./routes/route_index");


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/test' ,route);


