/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import './App.css';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import UseGet from './CustomHooks/UseGet';

const initRoutes = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' }
];

export const RouteContext = React.createContext(initRoutes);

function App() {
  const products = UseGet();
  return (
    <div className="App">
      <RouteContext.Provider value={initRoutes}>
        <Header />
      </RouteContext.Provider>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/product-detail/:id"
          element={<ProductDetail products={products} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <main>
              <h2>We werent able to find what you were looking for</h2>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
