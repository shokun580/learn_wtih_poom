const express = require("express");
var app = express();
const route = require("./routes/route_index");
const bodyParser = require("body-parser");
const cors = require("cors");


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use(cors({
  origin: '*'
}));

app.use('/test' ,route);


app.use(express.json());

app.use(bodyParser.json());