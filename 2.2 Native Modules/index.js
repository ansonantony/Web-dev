const fs = require("fs");

// fs.writeFile("message.txt", "Hello to Node js.", (err) => {
//     if (err) throw err;
//     console.log("The File is Saved");
// });

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
}); 