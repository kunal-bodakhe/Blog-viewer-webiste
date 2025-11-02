import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/postsSlice";
import { loadAuthors } from "../redux/authorsSlice";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
// import { Link, NavLink, Route, useNavigate, useNavigation } from "react-router-dom";


const PAGE_SIZE = 10;

const Home = () => {
    // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list: posts, status } = useSelector((state) => state.posts);
  const authorsById = useSelector((state) => state.authors.byId);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (status === "idle") dispatch(loadPosts());
    dispatch(loadAuthors());
  }, []);

  if (status === "loading") return <Loader />;
  if (status === "failed") return <div>Error loading posts</div>;

  const start = (page - 1) * PAGE_SIZE;
  const pagePosts = posts.slice(start, start + PAGE_SIZE);

  return (
    <>
      <section className="home">
        <h2>Posts</h2>
        <div className="posts-grid">
          {pagePosts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>

        <Pagination
          current={page}
          total={posts.length}
          pageSize={PAGE_SIZE}
          onChange={setPage}
        />
      </section>
    </>
  );
};

export default Home;
