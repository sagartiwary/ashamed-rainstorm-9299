import "./App.css";
import Allroutes from "./Components/Allroutes";
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { SearchDoctor } from "./Components/SearchDoctor";
// import Finddoctor from './Pages/Finddoctor';
function App() {
  return (
    <div className="App">
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;
