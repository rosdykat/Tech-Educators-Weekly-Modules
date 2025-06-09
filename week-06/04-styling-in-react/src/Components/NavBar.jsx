import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        className="text-purple-900 p-4 m-2 border-2 rounded-4xl border-purple-400 bg-purple-200 hover:bg-purple-100"
      >
        Home
      </a>
      <a
        href="#"
        className="text-purple-900 p-4 m-2 border-2 rounded-4xl border-purple-400 bg-purple-200 hover:bg-purple-100"
      >
        About
      </a>
      <a
        href="#"
        className="text-purple-900 p-4 m-2 border-2 rounded-4xl border-purple-400 bg-purple-200 hover:bg-purple-100"
      >
        Contact
      </a>
    </nav>
  );
}
