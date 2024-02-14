import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import { login } from "../context/authcontext/apiCalls";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  function handleLogin(e) {
    e.preventDefault();
    login({ email, password }, dispatch);
  }
  window.addEventListener("resize", function (event) {
    // Access the inner height of the screen

    // Do something with the new screen height
    setCurrentHeight(this.window.innerHeight);
  });
  return (
    <div className="relative h-screen">
      <Link to="/">
        <img
          src="N_logo.svg"
          className="absolute w-[200px] h-[100px] top-0 left-4 z-[100] hover:cursor-pointer"
        ></img>
      </Link>
      <div className="w-full h-full overflow-y-auto">
        {/* background img */}
        <img
          src="login_background.jpg"
          alt="background_img"
          className={`object-cover w-full absolute ${
            currentHeight < 500 ? " h-[700px]" : "h-full"
          }`}
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        {/* login panel */}
        <div className=" w-full px-4 py-24 z-100 absolute">
          <div className="max-w-[450px]  mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold ml-8">Login</h1>
              <form action="" className="w-full flex flex-col py-4 px-8">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700 transition-all duration-300"
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                >
                  Login
                </button>
                <div className="flex justify-between text-gray-500 ">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
