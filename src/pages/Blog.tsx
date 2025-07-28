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
      title: 'So… I Started a Blog',
      excerpt: 'Hello There…(get it???) Welcome to my little corner of the cosmos, where I share the human side of doing astrophysics—complete with late-night debugging sessions, cosmic ramblings, and the chaos of being an international student navigating American coffee.',
      content: `Hello There…(get it???)

Welcome to my little corner of the cosmos, or, well, the internet version of it.

If you've made it here, you've probably already poked around my site and seen the more "official" side of me: research projects, conference posters, detector simulations, and all that good science-y stuff. But this page? This is where things get a bit more personal. A bit more chaotic. And hopefully, a lot more fun.

This blog is basically where I peel back the layers of code, lab reports, and LaTeX formatting to share the human side of doing science: the part they don't always teach you in class.

Expect to find things like:
• Behind-the-scenes stories from research projects that didn't go as planned (and somehow turned out better for it)
• The real late-night thoughts during observing sessions ("Is that a star or a pixel error?")
• The joy and chaos of being an international student navigating astrophysics and American coffee
• Honest reflections on impostor syndrome, discovery, and the weird emotional rollercoaster of academia
• Occasional cosmic ramblings; the kind of poetic stuff that happens when you think too long about entropy and stardust

Basically, if the research pages are the thesis statement, this blog is the footnote that says, "Also, here's what I was really thinking while trying to debug that photometry pipeline at 2 a.m."

Astrophysics is serious work, but it's also wonder, frustration, community, creativity, and curiosity. It's very human. And that's what I want to share here: the humanity in science, and the science in my very human journey.

So, thank you for being here. Grab a cup of tea (or espresso, if we're observing, or hot chocolate, if you're taking a break from stat-mech PSet), and stick around. We're going on a cosmic adventure, not just through galaxies and neutrinos, but through the life of someone trying to understand it all, one star at a time.

Catch you in the next post
— Bhatt`,
      date: '2025-06-01',
      imageUrl: getAssetPath('/lovable-uploads/APS-DNP-presenter-image.png'),
      tags: ['personal', 'journey', 'astrophysics']
    },
    {
      id: 'why-i-left-home',
      title: 'Why I Left Home to Chase Stars',
      excerpt: 'From wanting to be Iron Man to crossing oceans for astrophysics — the story of why I packed my bags, left mango season behind, and landed at UMass Amherst to pursue my cosmic dreams.',
      content: `If you asked seven-year-old me what I wanted to be when I grew up, I would've answered in two words: Iron Man.

Yes, the suit. Yes, the fame. Yes, the genius-billionaire-playboy-philanthropist life. (Still kind of the dream, honestly.)

But somewhere between the glowing arc reactor and Tony Stark monologues, I realized what really had me hooked: the questions. The unanswerable ones. The ones that make your brain melt a little and still somehow keep you coming back for more.

I wanted to understand the cosmos. Not just admire it from afar, but dive in, get my hands dirty (figuratively), and contribute something real; to stand on the shoulders of giants and someday, if I'm lucky, be a shoulder for the next dreamer to stand on.

The problem was, back home in India, most undergraduate programs didn't offer astronomy in any meaningful way. Unless I wanted to pivot to engineering (no shade to engineers, you folks keep the world running), I had to go elsewhere.

So I applied to universities around the world and ended up at UMass Amherst, studying astronomy and physics. They offered me a scholarship, and I was over the moon (pun definitely intended).

I packed my bags, said goodbye to mango season and my mom's cooking, and landed in the U.S. ready to conquer the world.

Spoiler alert: the world conquered me first.

My first semester was rough. The second? Even worse. I felt out of my depth, like I was trying to swim laps in a black hole. But instead of freaking out (okay, after briefly freaking out), something clicked. If I really wanted to be one of the greats, I couldn't let first-year physics courses break me. I doubled down. I poured myself into learning, not just to pass exams, but because this is what I'd always wanted. And surprisingly, it started getting fun.

Like, really fun.

Mechanics lectures turned into puzzle-solving adventures. I spent six-hour stretches writing code to simulate galaxy mergers, with dark matter halos and everything. Slowly, things started to make sense. My grades got better. And I started to feel like maybe, just maybe, I could actually do this.

But of course, undergrad life had other lessons planned.

The summer after my first year, I applied to pretty much every physics and astronomy lab that would hear me out. I wanted to do research. I didn't care about getting paid, I just wanted to learn. But labs kept turning me down: not enough experience, not enough coursework, or, the kicker, no funding for international students.

So I got scrappy. I took a summer job as a technical assistant to the Dean of the College of Natural Sciences. I fixed over a dozen computers, helped troubleshoot hardware problems, and kept things running. That job paid my rent, which meant I could stay on campus. And being around meant I could pop into labs, ask professors questions, and start building relationships. That summer hustle eventually landed me a proper research opportunity the next year.

And that, right there, is what being an international student is all about: resilience.

To any international students reading this: if you haven't hit a funding wall yet, trust me, it's coming. It's practically a rite of passage. But don't let it break you. Remember why you came here. Remember the kid back home who dared to dream big enough to cross oceans for it.

Stick with the problem. Ask for help. Be okay with hearing "no", and then figure out how to turn that into "maybe" and eventually "yes."

To quote The Martian:

"You begin. You do the math. You solve one problem, then the next. And if you solve enough problems… You get to come home."

Or, in my case, maybe you don't go home, not yet, but you do get closer to becoming the scientist (and person) you came here to be.

And hey, all that hard work? Makes for a killer personal statement.
(If you know, you know.)

But I want to make something crystal clear before I wrap this up: I never came to the U.S. with dreams of staying here forever, climbing some corporate ladder, or chasing a green card. I came here to learn. To soak in every bit of knowledge and experience I possibly could during my undergraduate years — and then bring it all back home. I've always known that my place is in India. When I first started looking at universities to study astrophysics, the Indian Institute of Astrophysics was right at the top of my list. But they only offered Master's and PhD programs. So I packed my bags and flew across the world, with a very specific goal: finish my undergraduate degree, learn from the best, do as much research as I can, and then return. Now, as I prepare to apply to PhD programs, my eyes are back on the IIA. It's come full circle. It's always been my dream to one day work at ISRO, an institution that's nothing short of legendary in the way it carries out world-class space missions with brilliant minds and homegrown innovation. There's something undeniably badass about the work they do; just look at the sheer brilliance of Chandrayaan-3's soft landing on the Moon's south pole! I mean, how cool is that? As Dr. A.P.J. Abdul Kalam once said, "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work." That quote has stuck with me ever since I was a kid staring up at the stars. And now, it's what drives me forward, to learn, to return, and to help build the future of Indian space exploration.

Always remember: Do or Do Not. There Is No Try
— Bhatt`,
      date: '2025-07-28',
      imageUrl: getAssetPath('/lovable-uploads/International-Student.png'),
      tags: ['personal', 'international-student', 'journey', 'india', 'dreams']
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

              {/* 
              Instructions for adding new posts (for developer reference only):
              
              To add new blog posts: Edit the blogPosts array above. 
              Include id, title, excerpt, content, date, optional imageUrl, and tags. 
              The posts will automatically appear in the grid layout.
              
              Example structure:
              {
                id: 'unique-post-id',
                title: 'Blog Post Title',
                excerpt: 'Brief description of the post...',
                content: 'Full content of the blog post...',
                date: 'YYYY-MM-DD',
                imageUrl: getAssetPath('/path/to/image.png'), // optional
                tags: ['tag1', 'tag2', 'tag3']
              }
              */}
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
