import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Watch from "./pages/Watch.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/authcontext/AuthContext.jsx";
import MovieList from "./pages/MovieList.jsx";
import ListDetail from "./pages/ListDetail.jsx";
import Search from "./pages/Search.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
        <Route path="/watch/:id" element={<Watch />}></Route>
        <Route
          path={user && `/${user.username}/list`}
          element={<MovieList />}
        ></Route>
        <Route
          path={user && `/${user.username}/list/:listname`}
          element={<ListDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
