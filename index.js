'use strict';

//dependencies
const express = require ('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const https = require ('https');
// const gm = require('graphicsmagick');

//application setup
const app = express();
const PORT = process.env.PORT || 3000;

//for access to cross origin resource sharing
app.use(cors());

//test connection
app.get('/home', (request,response) => {
  response.send('Anyone home?');
});

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});