/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { writeFile, createWriteStream } from 'node:fs';
import qr from 'qr-image';

inquirer
    .prompt([
        {
            message: "Type in the URL",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL
        writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        var qr_svg = qr.image(url, { type: 'png' });
        qr_svg.pipe(createWriteStream('qr_img.png'));


    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


//   var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
//   console.lo
