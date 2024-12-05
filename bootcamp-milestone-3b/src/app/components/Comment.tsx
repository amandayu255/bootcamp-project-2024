import React from "react";
import "./Comment.css";

type IComment = {
  user: string;
  comment: string;
  time: string;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: string) {
  const date = new Date(time);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4 className="comment-user">{comment.user}</h4>
      <p className="comment-text">{comment.comment}</p>
      <span className="comment-time">{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
