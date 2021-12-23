const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[postId] || [];
  comments.push({ content, id });
  commentsByPostId[postId] = comments;
  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id, content, postId },
  });
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Comments Listening on 4001");
});
