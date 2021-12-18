import React from "react";
import PostCreate from "./Modules/Posts/PostCreate";
import PostList from "./Modules/Posts/PostList";
export const App = () => (
  <div className="container">
    <h1>Create Post</h1>
    <PostCreate></PostCreate>
    <hr />
    <h2>Posts</h2>
    <PostList></PostList>
  </div>
);
