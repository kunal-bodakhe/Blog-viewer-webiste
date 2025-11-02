import React from "react";
import { Link, NavLink, Route, useNavigate, useNavigation } from "react-router-dom";

const PostCard = ({ post }) => {
  // const PostDetailPath="/post/"
  // Route()
//   const handleClick = () => {
//       window.location.href = `/post/${post.id}`;
//   };
const navigate = useNavigate();

//   const id="{post.id}"
  return (
    <div onClick={()=> navigate(`/post/${post.id}`)}>
      <article className="post-card">
        <h3>{post.title.slice(0, 25)}...</h3>
        <p>{post.body.slice(0, 100)}...</p>
        <small>Likes: {post.reactions?.likes}</small>
      </article>
    </div>
  );
};

export default PostCard;
