import React, { useState } from "react";
import "./NestedComments.css";
const NestedComments = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "This is first comment",
      children: [
        {
          id: 2,
          title: "This is child comment one",
          children: [],
        },
        {
          id: 3,
          title: "This is child comment two",
          children: [],
        },
        {
          id: 4,
          title: "This is child comment three",
          children: [],
        },
      ],
    },
  ]);
  const [showReply, setShowReply] = useState({});
  const [reply, setReply] = useState("");
  function newComment(titl) {
    return {
      id: new Date().getTime(),
      title: titl,
      children: [],
    };
  }
  function handleAddReply(reply, pid) {
    const updatedComments = [...comments];
    addNewReply(updatedComments, reply, pid);
    setComments(updatedComments);
  }
  function addNewReply(updatedComments, reply, pid) {
    for (let i = 0; i < updatedComments.length; i++) {
      if (updatedComments[i].id == pid) {
        updatedComments[i].children.unshift(newComment(reply));
      }
    }
    for (let i = 0; i < updatedComments.length; i++) {
      addNewReply(updatedComments[i].children, reply, pid);
    }
  }
  function commentt(comment) {
    return (
      <li key={comment.id}>
        <div>
          {comment.title}

          {showReply[comment.id] ? (
            <div>
              <textarea
                rows={2}
                cols={20}
                value={reply}
                placeholder="type something..."
                onChange={(e) => setReply(e.target.value)}
              />
              <div>
                <button
                  onClick={() => {
                    setShowReply({ ...showReply, [comment.id]: false }),
                      setReply("");
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleAddReply(reply, comment.id),
                      setShowReply({ ...showReply, [comment.id]: false }),
                      setReply("");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowReply({ ...showReply, [comment.id]: true })}
            >
              Add Reply
            </button>
          )}
        </div>
        {comment.children.map((item) => commentt(item))}
      </li>
    );
  }
  return (
    <div
      className="NestedCommentsWrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Nested Comments</h1>
      <div className="NestedComments">
        <textarea
          rows={5}
          cols={20}
          value={input}
          placeholder="type something..."
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setComments([newComment(input), ...comments]);
            setInput("");
          }}
        >
          Add Comment
        </button>
        <ul>{comments.map((comment) => commentt(comment))}</ul>
      </div>
    </div>
  );
};

export default NestedComments;
