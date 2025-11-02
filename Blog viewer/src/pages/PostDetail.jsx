import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // ✅ These conditional returns must be inside the function
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found</div>;
//   const handleBack = () => {
//         window.location.href = `/`;
//     };

  return (
    <>
    <button  onClick={()=> navigate(-1)}>BACK</button>
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
    </>
  );
};

export default PostDetail;