
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assets';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl?: string;
  tags: string[];
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sample blog posts - you can easily add more following this structure
  const blogPosts: BlogPost[] = [
    {
      id: 'welcome-post',
      title: 'Welcome to My Cosmic Journey',
      excerpt: 'Starting this blog to share the informal side of my astrophysics journey, from late-night observations to breakthrough moments in research.',
      content: `Welcome to my corner of the internet! 

      I've created this space to share the more personal, informal side of my journey through astrophysics. While my research pages focus on the technical aspects of my work, this blog is where I can share the stories behind the science.

      You'll find posts about:
      • Late-night observing sessions and what I discover
      • The human side of academic research
      • Challenges and breakthroughs in my studies
      • Reflections on being an international student in STEM
      • The poetry I find in physics

      Science is deeply human, and I want to share that humanity with you. Every equation has a story, every observation has a moment of wonder, and every setback teaches us something valuable.

      Thanks for joining me on this cosmic adventure!`,
      date: '2024-12-01',
      imageUrl: getAssetPath('/lovable-uploads/APS-DNP-presenter-image.png'),
      tags: ['personal', 'journey', 'astrophysics']
    }
    // Add more blog posts here following the same structure:
    // {
    //   id: 'another-post',
    //   title: 'Another Blog Post Title',
    //   excerpt: 'Brief description of the post...',
    //   content: 'Full content of the blog post...',
    //   date: '2024-12-02',
    //   imageUrl: 'optional-image-url',
    //   tags: ['tag1', 'tag2']
    // }
  ];

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {!selectedPost ? (
            <>
              {/* Blog List View */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">
                  Blog
                </h1>
                <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
                  Informal updates about my life, experiences, and journey as an astrophysicist
                </p>
              </div>

              {blogPosts.length === 0 ? (
                <Card className="bg-card border-cosmic-purple cosmic-glow">
                  <CardContent className="p-8 text-center">
                    <p className="text-cosmic-star text-lg">
                      Blog posts will appear here. Check back soon for updates on my cosmic journey!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-8 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <Card 
                      key={post.id} 
                      className="bg-card border-cosmic-purple cosmic-glow hover:border-cosmic-accent transition-colors cursor-pointer"
                      onClick={() => handlePostClick(post)}
                    >
                      {post.imageUrl && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl text-cosmic-bright hover:text-cosmic-accent transition-colors">
                          {post.title}
                        </CardTitle>
                        <p className="text-cosmic-star/70 text-sm">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-cosmic-star mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-cosmic-purple/30 text-cosmic-accent text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Instructions for adding new posts */}
              <Card className="bg-card/50 border-cosmic-purple/50 mt-12">
                <CardContent className="p-6">
                  <h3 className="text-cosmic-bright font-semibold mb-2">Adding New Blog Posts</h3>
                  <p className="text-cosmic-star/70 text-sm">
                    To add new blog posts: Edit the blogPosts array in src/pages/Blog.tsx. 
                    Include id, title, excerpt, content, date, optional imageUrl, and tags. 
                    The posts will automatically appear in the grid layout.
                  </p>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Individual Blog Post View */}
              <div className="mb-8">
                <Button 
                  onClick={handleBackToBlog}
                  variant="outline"
                  className="border-cosmic-accent text-cosmic-accent hover:bg-cosmic-accent hover:text-cosmic-dark"
                >
                  ← Back to Blog
                </Button>
              </div>

              <article className="max-w-3xl mx-auto">
                {selectedPost.imageUrl && (
                  <div className="aspect-video overflow-hidden rounded-lg mb-8">
                    <img 
                      src={selectedPost.imageUrl} 
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <header className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-cosmic-bright mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-cosmic-star/70 text-sm mb-4">
                    <time>
                      {new Date(selectedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-cosmic-purple/30 text-cosmic-accent text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                <div className="prose prose-invert max-w-none">
                  <div className="text-cosmic-star leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>
              </article>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
