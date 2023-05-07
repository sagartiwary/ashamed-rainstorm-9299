import "./App.css";
import Allroutes from "./Components/Allroutes";
import Navbar from "./Components/Navbar";
import { SearchDoctor } from "./Components/SearchDoctor";
// import Finddoctor from './Pages/Finddoctor';
function App() {
  return (
    <div className="App">
      <Allroutes />
       <SearchDoctor/>
    </div>
  );
}

export default App;
