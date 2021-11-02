import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import Searchbar from "./Components/Searchbar/Searchbar";
import MainBar from "./Components/MainBar/MainBar";
import Container from "./Components/Container/Container";
import Loader from "./Components/Loader/Loader";

const Homepage = lazy(() =>
  import("./Views/TrendView/TrendView" /*webpackChunkName: "home-page" */)
);

const AboutMovie = lazy(() => import("./Views/AboutMovie/AboutMovie"));
const MovieView = lazy(() => import("./Views/MovieView/MovieView"));

function App() {
  return (
    <div className="App">
      <Container>
        <MainBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/movies" exact>
              <MovieView />
            </Route>
            <Route path="/movies/:movieId">
              <AboutMovie />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
