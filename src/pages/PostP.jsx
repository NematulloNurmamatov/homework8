import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

const PostP = () => {
  let { id } = useParams();
  const { data: post, loading } = useFetch(`posts/${id}`);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <mark>No: {post?.id}</mark>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PostP;
