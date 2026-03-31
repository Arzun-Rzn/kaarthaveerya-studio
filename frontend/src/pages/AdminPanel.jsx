import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArtworkUploadCard from "./ArtworkUploadCard";
import BooksManager from "./BooksManager";
import ArtStoreManager from "./ArtStoreManager";
import BookStoreManager from "./BookStoreManager";
import BlogsManager from "./BlogsManager";
import "../styles/admin.css";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin", { replace: true });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin", { replace: true });
  };



  return (
    <div className="admin-panel">
      <button className="admin-logout-button" onClick={handleLogout}>
        Logout
      </button>

      <h2 className="admin-title">Admin Dashboard</h2>
      <div className="admin-cards">
        <div 
          className={`admin-card ${activeSection === "artworks" ? "active" : ""}`} 
          onClick={() => setActiveSection("artworks")}
        >
          Manage Artworks
        </div>
        <div 
          className={`admin-card ${activeSection === "books" ? "active" : ""}`} 
          onClick={() => setActiveSection("books")}
        >
          Manage Books
        </div>
        <div 
          className={`admin-card ${activeSection === "artstore" ? "active" : ""}`} 
          onClick={() => setActiveSection("artstore")}
        >
          Manage Art Store
        </div>
        <div 
          className={`admin-card ${activeSection === "bookstore" ? "active" : ""}`} 
          onClick={() => setActiveSection("bookstore")}
        >
          Manage Book Store
        </div>
        <div 
          className={`admin-card ${activeSection === "blogs" ? "active" : ""}`} 
          onClick={() => setActiveSection("blogs")}
        >
          Manage Blogs
        </div>
      </div>

      <div className="admin-section">
        {activeSection === "artworks" && <ArtworkUploadCard />}
        {activeSection === "books" && <BooksManager />}
        {activeSection === "artstore" && <ArtStoreManager />}
        {activeSection === "bookstore" && <BookStoreManager />}
        {activeSection === "blogs" && <BlogsManager />}
      </div>
    </div>
  );
};

export default AdminPanel;
