import React from 'react';
import '../styles/blog.css';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "The Art of Observation",
    summary: "How careful observation shapes an artist's unique perspective.",
    link: "/blog/observation"
  },
  {
    id: 2,
    title: "Brush Strokes & Emotions",
    summary: "Exploring how color and form carry emotional depth.",
    link: "/blog/emotions"
  },
  {
    id: 3,
    title: "Sketching the Invisible",
    summary: "Capturing ideas, moods, and unseen beauty in sketches.",
    link: "/blog/sketching"
  },
  {
    id: 4,
    title: "Following patterns",
    summary: "Capturing ideas, moods, and unseen beauty in sketches.",
    link: "/blog/sketching"
  }
];

const Blog = () => {
  return (
    <main className="blog-container">
      <h2>MY BLOGS</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <Link to={blog.link} className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Blog;
