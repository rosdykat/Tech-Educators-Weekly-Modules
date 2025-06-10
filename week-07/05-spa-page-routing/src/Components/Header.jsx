import "./Header.css";
// add some navigation for the user --> the link component works similar to the a tag
import { Link } from "react-router";
import { useParams, Outlet } from "react-router";

export default function Header() {
  const { username } = useParams();

  return (
    <div className="header">
      <h1>Header</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"about"}>About</Link>
        <br />
        <Link to={"contact"}>Contact</Link>
        <br />
        <Link to={`profile/${username}`}>My profile</Link>
        <Outlet />
        {/* The outlet component is a placeholder component for the contnet we will render here */}
      </nav>
    </div>
  );
}
