import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const count = req.body["fname"].length + req.body["lname"].length;
  //console.log(count);
  res.render("index.ejs",{countnumber:count});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
