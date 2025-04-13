const express = require("express");
var app = express();
const path = require("path");

const route = require("./routes/route_index");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api' ,route);


