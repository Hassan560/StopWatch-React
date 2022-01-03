import "./App.css";
import { DisplayStopWatch } from "./Components/DisplayStopWatch";

function App() {
  return (
    <div className="App">
      <h2>
        Stop <span>Watch</span>{" "}
      </h2>
      <DisplayStopWatch />
    </div>
  );
}

export default App;