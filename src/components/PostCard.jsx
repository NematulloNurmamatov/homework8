import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, body }) => {
  return (
    <div>
      <mark>{id}</mark>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`posts/${id}`}>About more {id}</Link>
    </div>
  );
};

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PostCard;
