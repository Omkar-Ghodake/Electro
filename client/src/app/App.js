import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from '../layouts/Navbar';
import TopBar from '../layouts/TopBar';
import Home from '../pages/Home';
import Footer from '../layouts/Footer';
import ProductDetails from '../pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <div className="top-part">
          <TopBar />
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
