import PropTypes from "prop-types";
import "./Post.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="post-style">
      <h4>Post of ID: {post.id}</h4>
      <h4>{post.title}</h4>
      <button onClick={handleShowDetail}>Post Details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
