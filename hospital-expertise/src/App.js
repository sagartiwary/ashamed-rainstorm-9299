import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Finddoctor from './Pages/Finddoctor';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Finddoctor/>
    </div>
  );
}

export default App;
