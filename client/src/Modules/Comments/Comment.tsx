import React, { FC } from "react";
export interface CommentProps {
  content: string;
}
const Comment: FC<CommentProps> = ({ content }) => {
  return (
      <p className="m-1">{content}</p>
  );
};

export { Comment };
