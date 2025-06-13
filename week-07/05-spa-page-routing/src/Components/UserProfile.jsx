// The user profile page needs to be dynamic
// params will look like this -> /:username

import { useParams, Outlet } from "react-router";
import { Link } from "react-router";

// to manage the value that we will ad to the :username params, we will use a hook! --> useParams()
export default function UserProfile() {
  const { username } = useParams(); //desctructure the params variable

  return (
    <>
      <h1>Profile Page {username}</h1>
      <Link to={`/profile/${username}/orders`}>Profile orders</Link>
      <Outlet />
      {/* Outlet will be replaced by userOrders once i navitage to the route */}
    </>
  );
}
