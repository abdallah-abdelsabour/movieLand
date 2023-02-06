import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Favourts from "./screens/Favourts";
import Login from "./screens/Login";
import MovieDetails from "./screens/MovieDetails";

function App() {
  const count = useSelector((state) => state.count);

  // const [language, setlanguage] = useContext({ language: "EN" });
  // const LanuageContext = createContext(language);
  return (
    <>
      {/* <LanuageContext.Provider value={LanuageContext}> */}
      <div className=""></div>
      {/* <NavBar></NavBar> */}
      <Header></Header>
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
        <Route path={"/page/:pageNumber"}>
          <Main></Main>
        </Route>
      </Switch>
      {/* </LanuageContext.Provider> */}
    </>
  );
}

export default App;
