import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About';
import Artworks from '../pages/Artworks.jsx';
import SubArtworks from '../pages/SubArtworks.jsx';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Copyright from '../pages/Copyright';
import Shop from '../pages/Shop';
import Blog from '../pages/Blogs';
import Books from '../pages/Books.jsx';
import Terms from '../pages/Terms';
import Licensing from '../pages/Licensing';

const MainSection = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/artworks/:categoryId" element={<SubArtworks />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />         
          <Route path="/store" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />          
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/licensing" element={<Licensing />} />
        </Routes>
    </div>
  )
}

export default MainSection
