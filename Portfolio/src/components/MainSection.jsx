//Portfolio/src/components/MainSection.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Home from '../pages/Home.jsx';
import About from '../pages/About';
import Artworks from '../pages/Artworks.jsx';
import ArtworksCategory from "../pages/ArtworksCategory"; 
import AdminPanel from "../pages/AdminPanel";
import AdminLogin from "../pages/AdminLogin";
import ArtworkUploadCard from "../pages/ArtworkUploadCard";  
import Connect from '../pages/Connect.jsx';
import Privacy from '../pages/Privacy';
import Copyright from '../pages/Copyright';
import ArtStore from '../pages/ArtStore.jsx';
import BookStore from '../pages/BookStore.jsx';
import Blog from '../pages/Blogs';
import Books from '../pages/Books.jsx';
import Terms from '../pages/Terms'; 
import Licensing from '../pages/Licensing';

const isAuthenticated = () => {
  return !!localStorage.getItem("adminToken");
};


const MainSection = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/artworks" element={<Artworks />} />
      <Route path="/artworks/:categorySlug" element={<ArtworksCategory />} />
      <Route path="/books" element={<Books />} />
      <Route path="/connect" element={<Connect />} />   
      <Route path="/admin" element={<AdminLogin />} /> 
      
      <Route
        path="/admin/panel"
        element={isAuthenticated() ? <AdminPanel /> : <Navigate to="/admin" replace />}
      />

      <Route path="/artstore" element={<ArtStore />} />
      <Route path="/bookstore" element={<BookStore />} />
      <Route path="/admin/artworks/upload" element={<ArtworkUploadCard />} />
      <Route path="/blog" element={<Blog />} />          
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/copyright" element={<Copyright />} />
      <Route path="/licensing" element={<Licensing />} />
    </Routes>
  );
};

export default MainSection;
