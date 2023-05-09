import "./App.css";
import Allroutes from "./Components/Allroutes";
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { SearchDoctor } from "./Components/SearchDoctor";
// import { Admin } from "./Pages/Admin";
// import Finddoctor from './Pages/Finddoctor';
function App() {
  return (
    <div className="App">
      <Allroutes />
      <Footer/>
      {/* <Admin/> */}
    </div>
  );
}

export default App;
