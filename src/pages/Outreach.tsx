import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

interface OutreachItem {
  id: string;
  title: string;
  type: 'presentation' | 'teaching' | 'video';
  period: string;
  venue?: string;
  supervisor?: string;
  description: string;
  fullContent: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  abstractUrl?: string;
  posterUrl?: string;
}

const Outreach = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const outreachData: OutreachItem[] = [
    {
      id: 'aps-dnp-2024',
      title: 'American Physics Society, Division of Nuclear Physics - CEU',
      type: 'presentation',
      period: 'Oct 2024',
      venue: 'APS DNP Conference',
      description: 'At the 2024 APS Division of Nuclear Physics Conference, I presented my research on how CAD surface tessellation impacts photon transport simulations in liquid xenon detectors. This work, part of the nEXO collaboration, helps refine optical modeling and improve detector design for future neutrino experiments.',
      fullContent: `In October 2024, I packed my poster tube and nerves and headed to my first-ever scientific conference: the APS Division of Nuclear Physics (DNP) meeting. It was the culmination of a summer spent immersed in the intricacies of detector simulation, and I was both thrilled and terrified to present my work to a room full of nuclear physicists.

My project, developed within the nEXO collaboration, focused on a subtle but critical issue in detector modeling: how surface tessellation in CAD-generated geometries can affect photon transport efficiency in liquid xenon (LXe) detectors. Using Chroma, a GPU-accelerated optical simulation framework, I had spent months running tests, debugging artifacts, and developing strategies to isolate simulation inaccuracies caused by low-resolution mesh geometry, particularly in curved reflectors.

In the poster, I demonstrated:
• How tessellation resolution impacts optical simulation fidelity in LXe environments
• Quantitative results showing efficiency differences between flat and curved surfaces under different mesh configurations
• Best practices for simulation setup using Chroma
• The implications of all of this for detector design and sensitivity in the nEXO experiment

This wasn't just a technical exercise; it was a contribution toward improving the tools we use to simulate and design some of the most sensitive particle detectors ever built.

Presenting at APS DNP was more than just checking a box; it was the moment I first saw myself as part of the scientific community. I fielded questions, got suggestions from senior researchers, and had the incredible experience of explaining my work to people who genuinely cared. It was my first time in a new city solely for science, and I came back not only more confident in my research but more inspired than ever to keep asking questions and chasing answers.

That poster now hangs above my desk: a reminder of how far I've come, and how much more I want to learn.`,
      abstractUrl: getAssetPath('/files/2024 APS-DNP CEU Abstract.pdf'),
      posterUrl: getAssetPath('/files/Daksh Bhatt APS-DNP CEU Poster Final Draft.pdf')
    },
    {
      id: 'phys131-ta',
      title: 'PHYS131 - Introduction to Mechanics',
      type: 'teaching',
      period: 'Sept 2024 – Dec 2024',
      supervisor: 'Prof. Heath Hatch',
      description: 'As a TA for Introduction to Mechanics, I helped first-year physics students develop problem-solving skills and build intuition for classical mechanics. Through labs, office hours, and review sessions, I supported their growth in both conceptual understanding and confidence, reinforcing my passion for teaching physics in accessible, meaningful ways.',
      fullContent: `Physics can be intimidating at first, especially when it's taught as a wall of equations instead of a way to make sense of how the world moves. That's exactly why I loved being a Teaching Assistant for PHYS131 – Introduction to Mechanics.

This course, taught by Prof. Heath Hatch, is often a student's first real encounter with physics, and I saw my role as being both a technical guide and a source of encouragement. I conducted weekly lab sessions, walking students through experimental setups and helping them connect hands-on measurements to Newton's laws, conservation principles, and real-world applications. In office hours, we often went beyond just solving problems. I tried to help students understand why the solution made sense, how to approach problems logically, and how to identify what physical principles were at play.

I also led review sessions before major exams. Rather than just solving a list of questions, I focused on building students' intuition, reframing problems, clarifying core ideas, and encouraging a step-by-step mindset over blind formula-chasing. These sessions often brought students together in collaborative, low-pressure environments that allowed them to ask the questions they were afraid to voice in lecture.

When grading, I put real effort into giving thoughtful feedback, pointing out not just what was incorrect but where the student's reasoning started to slip and how they could approach the problem differently. It felt less like grading and more like coaching.

One of the most satisfying parts of this experience was seeing students who started the semester unsure of their abilities gradually grow in confidence and competence. Some even came back after the course ended to say they were now considering further physics classes, a message that meant the world to me.

This role reaffirmed my belief that science education isn't just about conveying content, it's about empowering students to think critically, solve problems, and embrace complexity. That's what makes teaching such a powerful extension of doing science itself.`
    },
    {
      id: 'astron105-ta',
      title: 'ASTRON105 - Weather and Astronomy',
      type: 'teaching',
      period: 'Feb 2023 – May 2023',
      supervisor: 'Prof. Don Candela',
      description: 'As a TA for "Weather and Astronomy," I helped non-science majors connect everyday weather to the physics and astronomy behind it. From explaining atmospheric phenomena in office hours to grading with clarity and fairness in mind, I worked to demystify science and encourage genuine curiosity about the natural world.',
      fullContent: `Assisting in teaching ASTRON105 left a lasting impact on how I think about physics, astronomy, and the people we share them with.

This general education course, taught by Prof. Don Candela, was designed for non-science majors, a diverse group of students from across the university, many of whom hadn't taken a physics class since high school (and some who'd sworn they never would again). The goal was to explain weather phenomena—clouds, storms, seasons, atmospheric dynamics- through the lens of basic physics and astronomy.

I held weekly office hours, which often became informal, one-on-one sessions about why sunsets are red, how hurricanes form, or how the tilt of the Earth affects our seasons. I learned quickly that this role wasn't about equations or advanced models. It was about telling a story students could see in their own lives; about helping them realize that science wasn't some distant concept, but something happening in the sky above them every day.

Grading assignments also became a form of communication. I prioritized clarity, fairness, and encouragement, especially for students who were nervous about science. My goal was always to highlight what they understood, not just what they missed.

What surprised me most was how many students came away from the course with a newfound appreciation for physics, not because I simplified the material, but because I helped them connect it to their everyday experiences. Seeing them light up at the realization that physics could explain the world, not just confuse them, was incredibly rewarding.

This experience deepened my belief in the importance of scientific literacy, not just for scientists, but for everyone. Because when people understand the forces shaping their world, even just a little, they start to ask better questions, think more critically, and look at the sky with a bit more wonder.`
    },
    {
      id: 'astron100-ta',
      title: 'ASTRON100 - Exploring the Universe',
      type: 'teaching',
      period: 'Sept 2023 – May 2025',
      supervisor: 'Prof. Stephen Schneider',
      description: 'As a Teaching Assistant for "Exploring the Universe," I\'ve helped first-year astronomy majors connect sky simulations to fundamental concepts in celestial mechanics and galactic structure. Through Stellarium-based labs, I\'ve guided students in building both technical skills and astronomical intuition, while mentoring them through their first steps in the field.',
      fullContent: `Teaching "Exploring the Universe" has been one of the most fulfilling parts of my time at UMass, not just because I got to share what I know about astronomy, but because I got to witness something even better: curiosity taking root.

Since Fall 2023, I've been a Teaching Assistant for ASTRON100, an introductory course for first-year astronomy majors focused on observational tools and the structure of the cosmos. My role centered around weekly lab sessions, where students used the Stellarium planetarium software to simulate real-sky observations. What began as helping them figure out keyboard shortcuts soon turned into deeper conversations about celestial motion, coordinate systems, sidereal time, and the geometry of the universe.

I made it a point to emphasize the connection between abstract ideas and real phenomena, like how precession affects star positions over centuries, or why the Moon doesn't eclipse the Sun every month despite its orbit. Helping students connect those dots was incredibly rewarding.

Beyond the technical side of labs, I leaned into the mentorship aspect of the role. Many students were just starting, unsure whether to pursue astrophysics seriously. I made myself available to talk about course loads, summer research opportunities, and what to expect from the major. Some have gone on to explore research projects of their own, which has been especially gratifying.

This position has been a continuous reminder that science isn't just about data and models, it's about people developing the confidence to ask questions, wrestle with ideas, and keep looking up. Watching students evolve from sky-gazing novices to thinkers who can explain stellar evolution and spiral arm dynamics? That's the kind of progress that makes teaching feel like its own kind of discovery.`
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">
              Outreach & Teaching
            </h1>
            <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
              Sharing the wonder of astrophysics through presentations, teaching, and public engagement
            </p>
          </div>

          {/* Instructions for adding videos (for developer reference only):
          
          To add presentation videos: Edit the outreachData array above. 
          Set type: 'video', add videoUrl (YouTube embed link), and optional thumbnailUrl. 
          Use lazy loading to keep the page lightweight.
          
          Example structure for video entries:
          {
            id: 'video-presentation-id',
            title: 'Presentation Title',
            type: 'video',
            period: 'Date/Period',
            venue: 'Conference/Event Name',
            description: 'Brief description of the presentation...',
            fullContent: 'Detailed content about the presentation...',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            thumbnailUrl: getAssetPath('/path/to/thumbnail.png'), // optional
            tags: ['tag1', 'tag2']
          }
          */}

          <div className="space-y-8">
            {outreachData.map((item) => (
              <Card key={item.id} className="bg-card border-cosmic-purple cosmic-glow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle 
                        className="text-xl text-cosmic-bright hover:text-cosmic-accent cursor-pointer transition-colors"
                        onClick={() => toggleExpanded(item.id)}
                      >
                        {item.title}
                      </CardTitle>
                      <div className="text-cosmic-star text-sm mt-2 space-y-1">
                        <p><strong>Type:</strong> {item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                        <p><strong>Period:</strong> {item.period}</p>
                        {item.venue && <p><strong>Venue:</strong> {item.venue}</p>}
                        {item.supervisor && <p><strong>Supervisor:</strong> {item.supervisor}</p>}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(item.id)}
                      className="text-cosmic-accent hover:text-cosmic-bright"
                    >
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="text-cosmic-star">
                    <p className="mb-4">{item.description}</p>
                    
                    {/* Video embed for presentation videos */}
                    {item.type === 'video' && item.videoUrl && (
                      <div className="mb-6">
                        <div className="aspect-video rounded-lg overflow-hidden bg-cosmic-purple/20">
                          <iframe
                            src={item.videoUrl}
                            title={item.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                    
                    {expandedItems.has(item.id) && (
                      <div className="border-t border-cosmic-purple pt-6 mt-6">
                        <div className="whitespace-pre-line leading-relaxed">
                          {item.fullContent}
                        </div>
                        
                        {/* Download buttons for APS DNP entry */}
                        {(item.abstractUrl || item.posterUrl) && (
                          <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-cosmic-purple/30">
                            {item.abstractUrl && (
                              <Button
                                className="bg-purple-gradient hover:bg-cosmic-light text-white"
                                onClick={() => window.open(item.abstractUrl, '_blank')}
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Download Abstract
                              </Button>
                            )}
                            
                            {item.posterUrl && (
                              <Button
                                className="bg-purple-gradient hover:bg-cosmic-light text-white"
                                onClick={() => window.open(item.posterUrl, '_blank')}
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Download Poster
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Outreach;
