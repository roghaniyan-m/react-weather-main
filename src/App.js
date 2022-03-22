import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <div style={{ marginTop: "50px" }}>
        <a href="https://github.com/roghaniyan-m/react-weather">
          React weather on Github
        </a>
      </div>
    </div>
  );
}

export default App;
