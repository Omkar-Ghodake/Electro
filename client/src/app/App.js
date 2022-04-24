import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
