// src/components/blog/BlogSection.js
import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  // Blog post data
  const posts = [
    {
      id: 1,
      title: "Presenting CUPRA Vision Pro at the VW IT Symposium 2025",
      date: "20.02.2025",
      excerpt: "I had the incredible opportunity to present our CUPRA Vision Pro app to the VW Group Board at the IT Symposium 2025. The feedback was exceptional, reinforcing the value of our innovative spatial computing approach.",
      content: `
        <p class="mb-4">
          This past week marked a significant milestone for our team as I had the privilege of presenting the CUPRA Vision Pro application at the Volkswagen IT Symposium 2025. Standing before the <strong>VW Group Board and many executives</strong>, I shared our journey from concept to App Store launch, highlighting how we've pioneered <strong>spatial computing in the automotive industry</strong>.
        </p>
        
        <p class="mb-4">
          Our presentation focused on three key aspects:
        </p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>The <strong>innovative customer experience</strong> we've created using Apple Vision Pro's unique spatial capabilities</li>
          <li>The technical challenges of bringing <strong>high-fidelity 3D car models</strong> into a mixed reality environment</li>
          <li>The <strong>measurable business impact</strong>—from cost savings to increased customer engagement metrics</li>
        </ul>
        
        <p class="mb-4">
          What made this presentation particularly rewarding was the <strong>enthusiastic response from the board members</strong>. Many of them tried the experience firsthand after the presentation, with several highlighting the potential for <strong>expanding this technology across other brands</strong> within the Volkswagen Group.
        </p>
        
        <p class="mb-4">
          This validation from leadership reinforces what our team has believed from day one: <strong>spatial computing represents the next frontier</strong> for automotive visualization and customer engagement. As the <strong>first automotive brand with a native visionOS app</strong> on the App Store, we've established CUPRA as a technology leader in this space.
        </p>
        
        <p>
          I'm incredibly grateful to everyone who contributed to this project, from our development team to our partners at Audi Business Innovation and Apple. This milestone is just the beginning of what promises to be an <strong>exciting new chapter in automotive retail experiences</strong>.
        </p>
      `,
      mainImage:
      {
        url: `${process.env.PUBLIC_URL}/images/executive_presentation_2.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
        alt: "Presenting at VW IT Symposium 2025",
      },
      additionalImages: [
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_1.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Presenting at VW IT Symposium 2025",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_3.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Presenting at VW IT Symposium 2025",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_4.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Presenting at VW IT Symposium 2025",
        }
      ],
      tags: ["Apple Vision Pro", "CUPRA", "Mixed Reality", "Presentation"]
    }
  ];

  const toggleExpand = (postId) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
    }
  };

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
              className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 ${
                expandedPost === post.id ? 'md:col-span-2' : ''
              }`}
            >
              {/* Main post image */}
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
              
              {/* Post content */}
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
                
                {expandedPost === post.id ? (
                  <div>
                    {/* Additional Images Gallery */}
                    {post.additionalImages && post.additionalImages.length > 0 && (
                      <div className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {post.additionalImages.map((image, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                              <img 
                                src={image.url} 
                                alt={image.alt} 
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="text-gray-700 mb-4 prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <button
                      onClick={() => toggleExpand(post.id)}
                      className="text-gray-600 hover:text-gray-800 flex items-center"
                    >
                      Read less
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <button
                      onClick={() => toggleExpand(post.id)}
                      className="text-accent hover:text-primary flex items-center"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;