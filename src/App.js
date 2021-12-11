import "./App.css";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <Home1 />
      </div>
    </div>
  );
}

export default App;
