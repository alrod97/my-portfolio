// src/pages/BlogPostPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams(); // Changed from postId to id to match your route parameter
  
  // Complete posts array with both posts - matches BlogSection.js order
  const posts = [
    // Berlin Global IT I/O post (ID 2)
    {
      id: 2,
      title: "CUPRA Vision Pro Takes Main Stage at VW Global IT I/O 2025 in Berlin",
      date: "10.07.2025",
      content: `
        <p class="mb-4">
          What an incredible experience returning from the <strong>VW Group Global IT I/O Conference in Berlin</strong> 🇩🇪! Our CUPRA Vision Pro project was <strong>selected among the top IT projects at VW Group</strong>, earning us another opportunity to showcase our innovation—this time on the main stage in Berlin, where VW IT professionals from around the world gather to connect, exchange ideas, and witness groundbreaking solutions.
        </p>
        
        <p class="mb-4">
          The Global IT I/O conference brought together <strong>IT professionals from across the Volkswagen Group ecosystem</strong>. We had the privilege of presenting our CUPRA Vision Pro App solution to colleagues from Lamborghini, VW, and many other brands within the group. Having the main stage once again to showcase our spatial computing innovation was both an honor and so much fun!
        </p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Recognition as a top IT project</strong> within the entire VW Group portfolio</li>
          <li>Presenting to <strong>large audiences and management</strong>—an excellent exercise in delivering the right message to diverse stakeholders</li>
          <li>Showcasing our <strong>first-in-automotive Apple Vision Pro solution</strong> to colleagues across all group brands</li>
          <li>Connecting with VW IT professionals from <strong>Japan to India, Brazil to Mexico</strong>—gaining fascinating perspectives on how different markets are evolving</li>
        </ul>
        
        <p class="mb-4">
          As a technical person, these presentations offer invaluable opportunities to develop communication skills with large audiences and executive leadership. But what truly enriched this experience was the chance to exchange ideas with people from so many different countries and cultural backgrounds—each bringing unique insights into their local markets and technological adoption patterns.
        </p>
        
        <p class="mb-4">
          Moreover, it's still so rewarding to see the <strong>very positive reactions of people to an app I envisioned as a simple idea almost 2 years ago</strong>. Watching colleagues from different brands and countries truly have fun with the experience—seeing their faces light up as they interact with our spatial computing solution—reminds me why we do what we do. From concept to reality, it's incredible to witness how a vision can evolve into something that genuinely delights and engages people.
        </p>
        
        <p class="mb-4">
          The international diversity of perspectives at Global IT I/O reinforced how our spatial computing approach resonates across different markets and cultures. It's fascinating to see how innovation transcends geographical boundaries while adapting to local market needs.
        </p>
        
        <p>
          Being recognized among the top IT projects at VW Group and having the platform to share our vision with this incredible global community is just the beginning. Let's keep pushing boundaries and shaping the future of automotive through spatial experiences! 🚀
        </p>
        
        <p class="mt-6">
          <strong>Related LinkedIn posts:</strong><br/>
          <a href="#" class="text-blue-600 hover:underline">Main stage presentation highlights</a><br/>
          <a href="#" class="text-blue-600 hover:underline">Conference insights and team collaboration</a>
        </p>
      `,
      mainImage: {
        url: `${process.env.PUBLIC_URL}/images/GlobalITIo_4.jpeg`,
        alt: "Presenting CUPRA Vision Pro at VW Global IT I/O 2025 in Berlin",
      },
      additionalImages: [
        {
          url: `${process.env.PUBLIC_URL}/images/GlobalITIo_2.jpg`,
          alt: "VW Global IT I/O Conference Berlin 2025",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/GlobalITIo_1.jpeg`,
          alt: "Main stage presentation at IT I/O Conference",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/GlobalITIo_5.jpeg`,
          alt: "CUPRA team at Global IT I/O Berlin",
        }
      ],
      tags: ["Apple Vision Pro", "CUPRA", "Berlin", "Global IT I/O", "Main Stage"]
    },
    // IT Symposium post (ID 1)
    {
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
    }, 
    {
      id: 3,
      title: "Visiting China in 2025: Tech, Trains, and Perspectives",
      date: "28.07.2025",
      excerpt: "In 2025, I had the chance to visit Shanghai, Chongqing, and Beijing. Beyond the stereotypes I had grown up with, I encountered cutting-edge infrastructure, remarkable safety, and a deeply hospitable culture. Here’s what I observed.",
      content: `
        <p class="mb-4">
          Earlier this year, I had the opportunity to visit China—specifically Shanghai, Chongqing, and Beijing. Having grown up with a Western perspective, China often felt like a distant powerhouse known mostly for mass manufacturing and low-cost labor. During my high school years (2010–2015) in Spain, the narrative was often about "cheap products" or copied technologies. Between 2015 and 2020 during my bachelor's, China faded from my radar.
        </p>
    
        <p class="mb-4">
          But everything changed during my master’s at <strong>TU Munich</strong>, where I specialized in <strong>Computer Vision and Deep Learning</strong> (what most now refer to as "AI"). I began to notice how many top academic papers were authored by Chinese researchers—either from universities in China or at major US companies. When I showed up for my Machine Learning exam, nearly 30% of the room seemed to be Asian, many probably Chinese. It left a mark on me: this country was clearly shaping the future of AI.
        </p>
    
        <p class="mb-4">
          So, in 2025, I went to China with open eyes. What did I find?
        </p>
    
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Yes, there are cameras everywhere.</strong> Surveillance is omnipresent, especially in cities. But I have to say, I felt incredibly safe—even walking at night along the Bund in Shanghai. That’s not something I’d feel in many European cities today, including Berlin, where I lived for five years.</li>
          <li><strong>The people were warm and helpful.</strong> Even with the language barrier, locals often used translation apps to assist us. At a hotpot restaurant in Chongqing, the staff patiently guided us on how to eat, what to order, and how to mix sauces. It felt surprisingly personal and welcoming.</li>
          <li><strong>China’s train infrastructure is truly world-class.</strong> We traveled from Chongqing to Beijing via high-speed rail in around 7 hours, averaging 350 km/h. It was clean, efficient, and more comfortable than flying. If I could go from Munich to Madrid in that same way, I’d never fly that route again.</li>
          <li><strong>Electric vehicles (EVs) are everywhere.</strong> I knew of BYD from my travels in Southeast Asia, but what shocked me was the sheer number of Chinese EV brands I had never heard of. Sleek designs, modern dashboards, connected ecosystems—it’s clear China is not just catching up; it's leading.</li>
        </ul>
    
        <p class="mb-4">
          Of course, there are still valid concerns about how AI and surveillance can be used beyond safety. It's easy to imagine how a facial recognition system could be asked, “Where was person X on day Y at hour Z?” The power—and risk—of such technology is enormous.
        </p>
    
        <p class="mb-4">
          But as a visitor, I came away with a more nuanced view. The stereotypes didn’t hold. I encountered a country that is fast-moving, technologically ambitious, and—despite the barriers—surprisingly warm.
        </p>
    
        <p>
          Would I go back? Absolutely. And next time, I’ll explore even further.
        </p>
      `,
      mainImage: {
        url: `${process.env.PUBLIC_URL}/images/shanghai_bund.jpeg`,
        alt: "View over the skyline of Shanghai at night",
        cropStyle: { objectPosition: '75% 46%' } // Exact percentage positioning
      },
      additionalImages: [
        {
          url: `${process.env.PUBLIC_URL}/images/greatwall.jpeg`,
          alt: "Great Wall of China"
        },
        {
          url: `${process.env.PUBLIC_URL}/images/evcars_xiaomi.jpeg`,
          alt: "The car beloved by chinese people, Xiaomi SU 7"
        },
        {
          url: `${process.env.PUBLIC_URL}/images/chongjing_night.jpeg`,
          alt: "Street full of Chinese electric vehicles"
        }
      ],
      tags: ["China", "Travel", "Technology", "EV", "High-Speed Rail", "AI"]
    }
    
  ];

  // Find the post by ID - convert string to number for comparison
  const post = posts.find(p => p.id === parseInt(id));
  
  // Handle case where post is not found
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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
              style={post.mainImage.cropStyle}
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