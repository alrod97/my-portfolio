// src/components/blog/BlogPreview.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "Presenting CUPRA Vision Pro at the VW IT Symposium 2025",
      date: "20.02.2025",
      excerpt: "I had the incredible opportunity to present our CUPRA Vision Pro app to the VW Group Board at the IT Symposium 2025. The feedback was exceptional, reinforcing the value of our innovative spatial computing approach.",
      mainImage: {
        url: `${process.env.PUBLIC_URL}/images/executive_presentation_2.jpeg`,
        alt: "Presenting at VW IT Symposium 2025",
      },
      tags: ["Apple Vision Pro", "CUPRA", "Mixed Reality", "Presentation"]
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-12" style={{ 
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }}>Blog & Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={post.mainImage.url} 
                  alt={post.mainImage.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 px-4 py-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{post.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="text-accent hover:text-primary flex items-center"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;