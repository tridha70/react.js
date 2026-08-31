import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WebDev from './pages/services/WebDev'
import AppDev from './pages/services/AppDev'
import UIDesign from './pages/services/UIDesign'
import Products from './pages/Products'
import ProductList from './pages/products/ProductList'
import ProductDetails from './pages/products/ProductDetails'
import Offers from './pages/products/Offers'
import Contact from './pages/Contact'

function App() {
  const [theme] = useState<'light' | 'dark'>('light')

  return (
    <BrowserRouter>
      <div className={`app-shell ${theme}`}>
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="services" element={<Services />}>
              <Route index element={<WebDev />} />
              <Route path="web" element={<WebDev />} />
              <Route path="app" element={<AppDev />} />
              <Route path="ui" element={<UIDesign />} />
            </Route>

            <Route path="products" element={<Products />}>
              <Route index element={<ProductList />} />
              <Route path="list" element={<ProductList />} />
              <Route path=":id" element={<ProductDetails />} />
              <Route path="offers" element={<Offers />} />
            </Route>

            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
