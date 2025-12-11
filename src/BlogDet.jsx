import React from "react";
import { Link, useParams } from "react-router-dom";
import JustHeader from "./JustHeader";
import Footer from "./Footer";
import { blogs } from "./BlogData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/blogDet.css";
import { color } from "framer-motion";

function BlogDet() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const location = useLocation()
  useEffect(() => {
     window.scrollTo({
      top : 0 ,
      behavior : 'smooth'
     })
  } , [id])
  if (!blog) return <div className="blog-not-found">Blog not found</div>;
  
  return (
    <>
      <JustHeader />

    
      <section className="blog-hero">

        <div className="hero-overlay">
          <h1 className="hero-title">{blog.title}</h1>
          <p className="hero-subtitle">{blog.excerpt}</p>
         
        </div>

         
       
      </section>
     
      <section className="blog-content">
         <div className="published-info">
          <span> Published by: {blog.publishedBy} | {blog.publishedDate}</span>
        </div>
        <div className="summary-cont">
          <p>{blog.summary}</p>
          <img src= {blog.images[0]} className="alleged-hero" ></img>
        </div>
        {blog.sections.map((section, idx) => (
          <div key={idx} className="blog-section">
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.lists && (
              <ul>
                {section.lists.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default BlogDet;