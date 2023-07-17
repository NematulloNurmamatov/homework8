import { Fragment, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Free from "../components/Free";
import { ENDPOINT } from "../constants";

const PostsP = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${ENDPOINT}posts`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <Fragment>
      {posts.length !== 0 ? (
        posts.map((post) => <PostCard key={post.id} {...post} />)
      ) : (
        <Free />
      )}
    </Fragment>
  );
};

export default PostsP;
