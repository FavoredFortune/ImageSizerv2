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
const superagent = require('superagent');


//application setup
const app = express();
const PORT = process.env.PORT || 3000;

//database set up
//note nixed firebase - can't get it working
//switched to postgresSQL local database
const DATABASE_URL = 'postgres://localhost:5432/raw_image';

const client = new pg.Client(DATABASE_URL);
client.connect();
client.on('error',error => console.error(error));

app.use(cors());

//test connection
app.get('/', (request,response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});

//request original image
app.get(`${DATABASE_URL}/:rawFileName/:rawFilePath`, (request,response)=>{
  var {rawFileName, rawFilePath} = request.params;
  var file = client.query(`SELECT rawImageName FROM raw_image WHERE rawFileName='fileRawName' AND rawFilePath='fileRawPath';`);
  gm(file)
    .write(`./${rawFileName}.jpg`, (error)=>{
      if(error){
        console.log(error);
      } else{
        response.sendFile(`./${rawFileName}.jpg`);
      }
    });
});

//request resize or crop image
app.get(`${DATABASE_URL}/:rawFileName/:rawFilePath/:width/:height/:format`, (request,response)=>{
  var {rawFileName, rawFilePath,width, height, format} = request.params;
  var file = client.query(`SELECT rawImageName FROM raw_image WHERE rawFileName='fileRawName' AND rawFilePath='fileRawPath';`);

  //in case value isn't passed in
  width = width || null;
  height = height || null;
  format = format || 'JPG';

  //logic cases for different sizes requests to help avoid distortion
  if(width/height < file.width){
    gm(file)
      .resize(width,height)
      .write(`./${rawFileName}_${width}_${height}.${format}`, (error)=>{
        if(error){
          console.log(error);
        } else{
          response.sendFile(`./${rawFileName}_${width}_${height}.${format}`);
        }
      });
  } else{
    gm(file)
      //crops from upper left corner as standard
      .crop(width,height, 0,0)
      .write(`./${rawFileName}_${width}_${height}.${format}`, (error)=>{
        if(error){
          console.log(error);
        } else {
          response.sendFile(`./${rawFileName}_${width}_${height}.${format}`);
        }
      });
  }
});