# Image Sizer

# Sooz (Suzanne) Richman - FavoredFortune

# Overview
This application allows users to upload photos and request both the original raw photo as well as different sizes of the photo back.

# Current Status
Tues October 24 12:34 - rebuilding project to try to simplify server/backed

# User Story
As a photojournalist, I want to be able to upload my large format  images to a database for others to access. I also want others who want to use my images to be able to choose what dimensions they get the photo downloaded in and in what format (JPG, PNG, etc), as well as get the original raw image.

# Instructions for use/review
- After cloning/forking the repository, please download all dependencies by typing npm i in the command line of your terminal interface within the project folder.
- You can then launch the server back end in the terminal with the command 
`node index.js` (this shows the server at localhost:3000/)
- To see the front end interface, from the same folder in the terminal type in live-server (this shows the front end at localhost:8080/)

# Technology
 - JavaScript
 - Node.js (8 LTS)
 - Homebrew
 - Handlebars
 - JQuery
 - Git
 - GitHub
 - Visual Studio Code
 - Dependencies:
    - Express
    - CORS
    - Body-parser
    - GraphicsMagick
    - FS (File Server)
    - Firebase
    - GRPC
    - Path

# Resources

- Eric Meyer for Reset CSS file(http://meyerweb.com/eric/tools/css/reset/ )
- Referenced my own project, [On This Day](On-This-Day/thisday-server)
- Proof of life refresher [Rising Stack](https://blog.risingstack.com/your-first-node-js-http-server/)
- Implementing Firebase [NPM.org](https://www.npmjs.com/package/firebase)
- Referenced my own project for photo file uploads [Uploading files](https://github.com/FavoredFortune/13-uploading-files)
- Referened my own project on get/post mapping in spring MVC - just to double check structure based on "On This Day" [Photo Upload](https://github.com/FavoredFortune/31-photo-upload)
- Guidance on using GraphicsMagick to manage cropping & resizing needs of application [Camp Vanilla](https://blog.campvanilla.com/nodejs-graphicsmagick-cropping-resizing-server-api-b410fe98e41)
- GraphicsMagick Install guide [NPM](https://www.npmjs.com/package/gm)
- Troubleshooting firebase dependency issue [StackOverflow](https://stackoverflow.com/questions/51717602/issue-adding-firebase-to-electron-project-grpc-dependency-issue)
- Reminder on how to serve index file on backend [scotch.io](https://scotch.io/tutorials/use-expressjs-to-deliver-html-files)

