import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-700">JobMatch</Link>
      <div className="space-x-4">
        <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
        <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
