import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import Searchbar from "./Components/Searchbar/Searchbar";
import MainBar from "./Components/MainBar/MainBar";
import Container from "./Components/Container/Container";
import Loader from "./Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrendView = lazy(() => import("./Views/TrendView/TrendView"));

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
              <TrendView />
            </Route>
            <Route path="/movies" exact>
              <MovieView />
            </Route>
            <Route path="/movies/:movieId">
              <AboutMovie />
            </Route>
          </Switch>
        </Suspense>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
