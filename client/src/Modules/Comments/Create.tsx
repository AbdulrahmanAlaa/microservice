import axios from "axios";
import React, { FC, FormEvent, useState } from "react";
interface ICommentCreate {
  postId: string;
}
const CommentCreate: FC<ICommentCreate> = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
