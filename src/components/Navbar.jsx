import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-8 justify-center items-center p-8">
      <Link
        to="/"
        className="mr-auto text-2xl font-bold text-black">
        #VANLIFE
      </Link>
      <Link
        to="/host"
        className="font-bold text-gray-700">
        Host
      </Link>
      <Link
        to="/about"
        className="font-bold text-gray-700">
        About
      </Link>
      <Link
        to="/vans"
        className="font-bold text-gray-700">
        Vans
      </Link>
    </nav>
  );
}

export default Navbar;
