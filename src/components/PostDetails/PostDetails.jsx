import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);
  const handleGoBack = () => {
    navigate(-1);
  };
  const post = useLoaderData();
  return (
    <div>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
