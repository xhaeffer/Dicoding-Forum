import React from "react";
import PropTypes, { object } from "prop-types";

import CommentItem from "./CommentItem";

const CommentList = ({ threadComments }) => {
  return (
    <div>
      {threadComments.map((comment) => {
        const {
          id: commentId,
          owner,
          createdAt,
          content,
          upVotesBy,
          downVotesBy,
        } = comment;
        const { name, avatar } = owner;

        return (
          <CommentItem
            key={commentId}
            commentId={commentId}
            name={name}
            avatar={avatar}
            createdAt={createdAt}
            content={content}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
          />
        );
      })}
    </div>
  );
};

CommentList.propTypes = {
  threadComments: PropTypes.arrayOf(object).isRequired,
};

export default CommentList;
