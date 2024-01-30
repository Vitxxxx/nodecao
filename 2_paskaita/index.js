const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // говорит, что наше приложение будет общаться в формате JSON

app.get("/", (req, res) => {
  res.send("OK");
});

const brands = ["BMW", "bentley", "VW", "Porsche"];

app.get("/brands", (req, res) => {
  res.send(brands);
});

// /brands/B => ["BMW"];
// /brands/g => [];
// /brands/b =>
// dinaminis route
app.get("/brands/:firstLetter", (req, res) => {
  // grazinti visus brandus kurie prasideda duota raide
  // const firstLetter = req.params.firstLetter; old way/another way
  const { firstLetter } = req.params; // параметры, за которыми следует двоеточие;
  console.log(firstLetter);

  const filteredBrands = brands.filter(
    (brand) => brand[0].toLowerCase() === firstLetter.toLowerCase()
  );

  res.send(filteredBrands);
});

// POST API kuris prideda brandą į masyvą
app.post("/brands", (req, res) => {
  const { brand } = req.body; // отправляется тело из внешнего интерфейса, оно должно быть объектом или массивом
  brands.push(brand);
  res.send(brands);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});