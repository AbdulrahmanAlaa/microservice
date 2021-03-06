const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    console.log("🚀 ~ file: index.js ~ line 21 ~ app.post ~ data", data);
    const post = posts[postId];
    post.comments.push({id, content});
    console.log("🚀 ~ file: index.js ~ line 27 ~ app.post ~ posts", posts);
  }
  res.status(200).send({});
});
app.listen(4002, () => console.log("Query Service Listening on 4002"));
