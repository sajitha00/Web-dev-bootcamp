import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
//var qr = require('qr-image');
//const fs =require("fs");
//1. Use the inquirer npm package to get user input.

inquirer
  .prompt([
    /* Pass your questions in here */
    {
       
        message:"enter URl  ",
        name:"URL",

    },
])
.then((answers) => {
  const url = answers.URL
  var qr_svg = qr.image(url)
  qr_svg.pipe(fs.createWriteStream('qr_img.png'));

  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

// var qr_svg = qr.image(answers, { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream(answers));
 
// var svg_string = qr.imageSync(answers, { type: 'svg' });


// fs.writeFile("URL.txt",answers,(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 
//2. Use the qr-image npm package to turn the user entered URL into a QR code image
// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
//3. Create a txt file to save the user input using the native fs node module.

