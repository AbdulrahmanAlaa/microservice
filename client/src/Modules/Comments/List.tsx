import React, { FC} from "react";
import { Comment } from "./Comment";
export interface CommentsListProps {
  comments: Array<any>;
}
const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  const renderComments = comments.map((comment: any) => (
    <Comment key={comment.id} content={comment.content}></Comment>
  ));

  return <div>{renderComments}</div>;
};

export default CommentsList;
