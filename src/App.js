import Tree from "./components/Tree/Tree";
import "./App.scss";
import Gifts from "./components/Gifts/Gifts";
import Background from "./components/Background/Background";

function App() {
  return (
    <div className="app">
      <div className="app-tree">
        <Gifts offsetX="200%" color="#50A5AF" />
        <Tree />
        <Gifts offsetX="-200%" color="#EE536A" />
      </div>

      <Background />
    </div>
  );
}

export default App;
