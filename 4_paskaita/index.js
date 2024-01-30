const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // говорит, что наше приложение будет общаться в формате JSON

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/users", (req, res) => {
  res.send(data);
});



app.get('/users/car/:carName', (req, res) => {
  const carName = req.params.carName;
  const filteredUsers = data.filter(user => user.car === carName);
  res.json(filteredUsers);
});

app.get('/users/emails', (req, res) => {
  const emails = data.map(user => user.email);
  res.json(emails);
});

app.get('/users/femaleNames', (req, res) => {
  const femaleNames = data
    .filter(user => user.gender === 'Female')
    .map(user => `${user.first_name} ${user.last_name}`);
  res.json(femaleNames);
});

app.get('/users/:userId', (req, res) => {
  const userId = +req.params.userId;
  const user = data.find(user => user.id === userId);
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
