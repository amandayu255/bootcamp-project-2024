"use client";

import React, { useState } from "react";
import Comment from "@/app/components/Comment";
import "./CommentsSection.css";

type CommentType = {
  user: string;
  comment: string;
  time: string;
};

type CommentsSectionProps = {
  slug: string;
  initialComments?: CommentType[];
};

export default function CommentsSection({
  slug,
  initialComments = [],
}: CommentsSectionProps) {
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [newComment, setNewComment] = useState({ user: "", comment: "" });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/Blogs/${slug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (!res.ok) {
        throw new Error("Failed to post comment");
      }

      const updatedComments = await res.json();
      setComments(updatedComments);
      setNewComment({ user: "", comment: "" });
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Your name"
          value={newComment.user}
          onChange={(e) =>
            setNewComment({ ...newComment, user: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Your comment"
          value={newComment.comment}
          onChange={(e) =>
            setNewComment({ ...newComment, comment: e.target.value })
          }
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}
