import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentCreate from "../Comments/Create";
import CommentsList from "../Comments/List";

const PostList = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:4002/posts");
    setPosts(data);
  };
  const renderedPosts = Object.values(posts).map((post: any) => {
    return (
      <div
        className="card m-2 p-2"
        style={{
          width: "30%",
          marginBottom: "20px",
        }}
        key={post.id}
      >
        <div className="card-title text-capitalize">
          <h4>{post.title}</h4>
        </div>
        <CommentsList comments={post.comments}></CommentsList>
        <CommentCreate postId={post.id}></CommentCreate>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row  flex-wrap justify-content-start">
      {renderedPosts}
    </div>
  );
};

export default PostList;
