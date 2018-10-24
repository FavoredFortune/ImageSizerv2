'use strict';

//dependencies
const express = require ('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const https = require ('https');
const gm = require('gm');
const fs = require('fs');
const path = require ('path');
const pg = require('pg');


//application setup
const app = express();
const PORT = process.env.PORT || 3000;

//database set up
const DATABASE_URL = 'postgres://localhost:5432/raw_image';

// Initialize Firebase
// var config = {
//   apiKey: 'AIzaSyBb8tDj-oO_fBoGX1KP0MTDO4GRcv5KJm4',
//   authDomain: 'photoapp-c643e.firebaseapp.com',
//   databaseURL: 'https://photoapp-c643e.firebaseio.com',
//   projectId: 'photoapp-c643e',
//   storageBucket: 'photoapp-c643e.appspot.com',
//   messagingSenderId: '170890289058'
// };
// firebase.initializeApp(config);

//for access to cross origin resource sharing
app.use(cors());

//test connection
app.get('/', (request,response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});

//request original image
app.get(`${DATABASE_URL}/{rawImagePath}/rawImageName`, (request,response)=>{
  gm(`${DATABASE_URL}/{rawImagePath}/rawImageName`)
    .write('./tmp.jpg', (error)=>{
      if(error){
        console.log(error);
      } else{
        response.sendFile('./tmp.jpg');
      }
    });
  //deletes temporary file downloaded
  fs.unlinkSync('./tmp.jpg');
});


//request resize image
app.get(`${DATABASE_URL}/{rawImagePath}/rawImageName`, (request,response)=>{
  gm(`${DATABASE_URL}/{rawImagePath}/rawImageName`)
    .write('./tmp.jpg', (error)=>{
      if(error){
        console.log(error);
      } else{
        response.sendFile('./tmp.jpg');
      }
    });
  //deletes temporary file downloaded
  fs.unlinkSync('./tmp.jpg');
});