// src/components/blog/BlogSection.js
import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  // Blog post data - REORDERED to match BlogPreview.js
  const posts = [
    // Berlin Global IT I/O post (ID 2) - MOVED TO FIRST
    {
      id: 2,
      title: "CUPRA Vision Pro Takes Main Stage at VW Global IT I/O 2025 in Berlin",
      date: "10.07.2025",
      excerpt: "Our CUPRA Vision Pro project was selected among the top IT projects at VW Group, earning us the main stage at Global IT I/O 2025 in Berlin. An incredible opportunity to present to colleagues from across the group and connect with IT professionals from Japan to Brazil.",
      content: `
    <p class="mb-4">
      What an incredible experience returning from the <strong>VW Group Global IT I/O Conference in Berlin</strong> 🇩🇪! Our CUPRA Vision Pro project was <strong>selected among the top IT projects at VW Group</strong>, earning us another opportunity to showcase our innovation—this time on the main stage in Berlin, where VW IT professionals from around the world gather to connect, exchange ideas, and witness groundbreaking solutions.
    </p>
    
    <p class="mb-4">
      The Global IT I/O conference brought together the <strong>brightest minds from across the Volkswagen Group ecosystem</strong>. We had the privilege of presenting our CUPRA Vision Pro App solution to colleagues from Lamborghini, VW, and many other brands within the group. Having the main stage once again to showcase our spatial computing innovation was both an honor and so much fun!
    </p>
    
    <p class="mb-4">
      What made this experience particularly valuable:
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
        url: `${process.env.PUBLIC_URL}/images/GlobalITIo_1.jpeg`,
        alt: "Presenting CUPRA Vision Pro at VW Global IT I/O 2025 in Berlin",
      },
      additionalImages: [
        {
          url: `${process.env.PUBLIC_URL}/images/GlobalITIo_2.jpg`,
          alt: "VW Global IT I/O Conference Berlin 2025",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/GlobalITIo_3.jpeg`,
          alt: "Main stage presentation at IT I/O Conference",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/GlobalITIo_4.jpeg`,
          alt: "CUPRA team at Global IT I/O Berlin",
        }
      ],
      tags: ["Apple Vision Pro", "CUPRA", "Berlin", "Global IT I/O", "Main Stage"]
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
        url: `${process.env.PUBLIC_URL}/images/china_trip_main.jpg`,
        alt: "View over the skyline of Shanghai at night"
      },
      additionalImages: [
        {
          url: `${process.env.PUBLIC_URL}/images/china_train.jpg`,
          alt: "High-speed train from Chongqing to Beijing"
        },
        {
          url: `${process.env.PUBLIC_URL}/images/chongqing_hotpot.jpg`,
          alt: "Hotpot dinner in Chongqing"
        },
        {
          url: `${process.env.PUBLIC_URL}/images/china_ev.jpg`,
          alt: "Street full of Chinese electric vehicles"
        }
      ],
      tags: ["China", "Travel", "Technology", "EV", "High-Speed Rail", "AI"]
    },    
    // IT Symposium post (ID 1) - MOVED TO SECOND
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