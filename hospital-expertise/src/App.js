import "./App.css";
import Navbar from "./Components/Navbar";
// import Finddoctor from './Pages/Finddoctor';
import { Banner } from "./Common/Banner";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* <Finddoctor/> */}
    </div>
  );
}

export default App;
