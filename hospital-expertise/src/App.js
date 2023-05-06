import "./App.css";
import Navbar from "./Components/Navbar";
// import Finddoctor from './Pages/Finddoctor';
import { MainRoute } from "./Pages/MainRoute";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute/>
    </div>
  );
}

export default App;

