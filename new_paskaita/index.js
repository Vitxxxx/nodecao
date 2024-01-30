const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // говорит, что наше приложение будет общаться в формате JSON

app.get("/", (req, res) => {
  res.send("OK");
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});