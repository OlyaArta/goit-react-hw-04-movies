import "./App.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import MainBar from "./Components/MainBar/MainBar";
import Container from "./Components/Container/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <MainBar />
        <Searchbar />
      </Container>
    </div>
  );
}

export default App;
