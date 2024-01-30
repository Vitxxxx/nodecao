// console.log("Helo")
const express = require("express"); //import express
const app = express(); //sosdaem express aplikac
const port = 3000;
app.get("/", (req, res) => {
  res.send("Helo privet");
});

const cars = ["Audi", "Bmw", "Opel"];

app.get("/cars", (req, res) => {
  res.send(cars);
});

// const cars = [
//   (id: 1,)
// ];

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.listen(port, () => {
  console.log(`App slusaet port ${port}`);
});
