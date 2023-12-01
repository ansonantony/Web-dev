import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(__dirname);
  console.log(req.street);
});


app.get("/submit", (req, res) => {
  console.log(req.body.street);
});
app.post("/submit", (req, res) => {
  res.send("<h1>Your Band Name IS:</h1>" + "<h2>" + req.body.street + req.body.pet + " 🫰</h2>");

});