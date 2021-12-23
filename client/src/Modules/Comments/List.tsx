import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { Comment } from "./Comment";
export interface CommentsListProps {
  postId: string;
}
const CommentsList: FC<CommentsListProps> = ({ postId }) => {
  const [commentsList, setCommentsList] = useState([]);
  useEffect(() => {
    fetchComments();
  }, []);
  const renderComments = commentsList.map((comment: any) => (
    <Comment key={comment.id} content={comment.content}></Comment>
  ));

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setCommentsList(data);
  };

  return <div>{renderComments}</div>;
};

export default CommentsList;
