const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

app.use(bodyParser.json());
app.use(cors());
const posts = {};
app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { title, id };
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: { id, title },
  });
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Posts Listening on 4000");
});
