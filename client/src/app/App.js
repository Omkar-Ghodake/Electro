import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
// components
import Navbar from '../layouts/Navbar';
import TopBar from '../layouts/TopBar';
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
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
