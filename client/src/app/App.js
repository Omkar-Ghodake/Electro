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
import ScrollToTop from '../layouts/ScrollToTop';
import AllProducts from '../pages/AllProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <ScrollToTop>
          <div className="top-part">
            <TopBar />
            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:productId' element={<ProductDetails />} />
              <Route path='/allProducts' element={<AllProducts />} />
              <Route path='/allProducts/:keyword' element={<AllProducts />} />
            </Routes>
          </div>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
