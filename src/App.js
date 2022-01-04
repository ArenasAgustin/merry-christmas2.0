import Tree from "./components/Tree/Tree";
import "./App.scss";
import Gifts from "./components/Gifts/Gifts";

function App() {
  return (
    <div className="app">
      <Gifts offsetX="200%" color="#50A5AF" />
      <Tree />
      <Gifts offsetX="-200%" color="#EE536A" />
    </div>
  );
}

export default App;
