// src/pages/BlogPostPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogPostPage = () => {
  const { postId } = useParams();
  
  // In a real app, you'd fetch this based on postId
  const post = {
    id: 1,
    title: "Presenting CUPRA Vision Pro at the VW IT Symposium 2025",
    date: "20.02.2025",
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
    mainImage: {
      url: `${process.env.PUBLIC_URL}/images/executive_presentation_2.jpeg`,
      alt: "Presenting at VW IT Symposium 2025",
    },
    additionalImages: [
      {
        url: `${process.env.PUBLIC_URL}/images/executive_presentation_1.jpeg`,
        alt: "Presenting at VW IT Symposium 2025",
      },
      {
        url: `${process.env.PUBLIC_URL}/images/executive_presentation_3.jpeg`,
        alt: "Presenting at VW IT Symposium 2025",
      },
      {
        url: `${process.env.PUBLIC_URL}/images/executive_presentation_4.jpeg`,
        alt: "Presenting at VW IT Symposium 2025",
      }
    ],
    tags: ["Apple Vision Pro", "CUPRA", "Mixed Reality", "Presentation"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header with back button */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <span className="text-xl text-gray-900" style={{ 
            fontWeight: '500',
            letterSpacing: '-0.02em'
          }}>Alberto Rodriguez</span>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Hero image */}
          <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
            <img 
              src={post.mainImage.url} 
              alt={post.mainImage.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center mb-4 text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            
            <h1 className="text-4xl mb-4" style={{
              fontWeight: '500',
              letterSpacing: '-0.025em',
              lineHeight: '1.2'
            }}>{post.title}</h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Additional Images Gallery */}
          {post.additionalImages && post.additionalImages.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              lineHeight: '1.7',
              color: '#374151'
            }}
          />
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;