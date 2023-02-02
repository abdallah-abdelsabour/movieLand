import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Favourts from "./screens/Favourts";
import Login from "./screens/Login";
import MovieDetails from "./screens/MovieDetails";
import { Test } from "./Test";

function App() {
  const count = useSelector((state) => state.count);

  return (
    <>
      <div className=""></div>
      <NavBar></NavBar>
      <Switch>
        <Route path={"/login"}>
          <Login></Login>
        </Route>
        <Route path={"/movieDetails/:id"}>
          <MovieDetails> </MovieDetails>
        </Route>
        <Route path={"/favourts"} exact>
          <Favourts></Favourts>
        </Route>
        <Route path={"/"}>
          <Main></Main>
        </Route>
      </Switch>
    </>
  );
}

export default App;
