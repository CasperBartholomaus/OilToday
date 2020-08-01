const express = require('express');
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROUTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
require("./routes")(app);

app.listen(3000, () => console.log('Server listening on port 3000!'));