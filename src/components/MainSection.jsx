import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About';
import Artworks from '../pages/Artworks.jsx';
import ArtworkCategory from '../pages/ArtworkCategory';
import Connect from '../pages/Connect.jsx';
import Privacy from '../pages/Privacy';
import Copyright from '../pages/Copyright';
import ArtStore from '../pages/ArtStore.jsx';
import BookStore from '../pages/BookStore.jsx';
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
          <Route path="/artworks/:categoryName" element={<ArtworkCategory />} />
          <Route path="/books" element={<Books />} />
          <Route path="/connect" element={<Connect />} />         
          <Route path="/artstore" element={<ArtStore />} />
          <Route path="/bookstore" element={<BookStore />} />
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
