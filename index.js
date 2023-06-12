require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const history = [];

app.use(bodyParser.json());
app.use(cors());

app.post("/history", (req, res) => {
  history.push(req.body);
  res.json({ success: true });
});

app.get("/history", (req, res) => {
  res.json(history);
});

app.listen(8000, () => {
  console.log("server is running");
});
