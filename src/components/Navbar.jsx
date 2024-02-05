import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-50 absolute w-full">
      <Link to="/">
        <img
          src="N_logo.svg"
          className="absolute md:w-[200px] md:h-[100px] top-0 left-4 z-[100] hover:cursor-pointer h-20 w-15"
          ></img>
      </Link>
      <div className="text-white">
        <Link to="/signup">
          <button className=" pr-4 border border-transparent hover:border-white p-2 mr-2 transition-all duration-300 md:text-lg text-sm">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-red-700 transition-all duration-300 md:text-lg text-sm">
           Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
