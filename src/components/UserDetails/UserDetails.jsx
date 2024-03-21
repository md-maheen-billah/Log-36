import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const user = useLoaderData();
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Website: {user.website}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
