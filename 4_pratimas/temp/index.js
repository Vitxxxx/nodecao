const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // говорит, что наше приложение будет общаться в формате JSON

app.get("/", (req, res) => {
  res.send("OK");
});

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"]
};

app.get('/cars/:brand', (req, res) => {
  const brand = req.params.brand.toLowerCase();

  if (cars[brand]) {
    res.json({ brand: brand, models: cars[brand] });
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});