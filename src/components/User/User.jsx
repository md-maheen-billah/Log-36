import { Link } from "react-router-dom";
import "./User.css";
import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div className="user-style">
      <h4>{user.name}</h4>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <Link to={`/user/${user.id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
