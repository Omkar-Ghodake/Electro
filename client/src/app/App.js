import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Home from '../pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
