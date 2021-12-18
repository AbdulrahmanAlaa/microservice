import axios from "axios";
import React, { FormEvent, useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          type="text"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostCreate;
