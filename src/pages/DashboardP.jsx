import { Fragment, useState } from "react";
import PostCard from "../components/PostCard";
import Free from "../components/Free";
import Loading from "../components/Loading";
import usePagination from "../hooks/usePagination";

const DashboardP = () => {
  const [search, setSearch] = useState("");
  const { data, loading, setPage, pagination, total } = usePagination(
    "posts",
    search
  );

  const handleSearch = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <input
        value={search}
        onChange={handleSearch}
        className="form-control my-3"
        type="text"
        placeholder="searching"
      />
      <h1>Total: {total}</h1>
      {loading ? (
        <Loading />
      ) : data.length !== 0 ? (
        <Fragment>
          {data.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
          {pagination}
        </Fragment>
      ) : (
        <Free />
      )}
    </div>
  );
};

export default DashboardP;
