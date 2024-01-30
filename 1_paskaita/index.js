// console.log("Helo")
const express = require("express"); //import express
const cors = require("cors");
const app = express(); //sosdaem express aplikac
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Helo privet");
});

const cars = ["Audi", "Bmw", "Opel"];

app.get("/cars", (req, res) => {
  res.send(cars);
});

const users = ["Alex", "Rose", "Megan"];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`App slusaet port ${port}`);
});
