const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express(); 
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let people = [];

app.get("/people", (req, res) => {
  res.json(people);
});

app.post("/people", (req, res) => {
  const { name, surname } = req.body;
  const person = { name, surname };
  people.push(person);
  res.json(person);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
