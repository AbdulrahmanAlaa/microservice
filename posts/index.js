const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const { randomBytes } = require("crypto");
app.use(bodyParser.json())
const posts = {};
app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { title, id };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});