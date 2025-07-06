
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
      description: 'Presented research on optical simulation fidelity in LXe environments using Chroma. Demonstrated how surface tessellation in CAD-generated geometries affects photon transport efficiency predictions, with implications for detector modeling in the nEXO experiment.',
      fullContent: `This presentation at the American Physical Society's Division of Nuclear Physics Conference showcased critical research on optimizing detector simulations for next-generation physics experiments.

      Presentation Highlights:
      • Demonstrated the impact of surface tessellation resolution on optical simulation accuracy in liquid xenon environments
      • Presented quantitative analysis of how CAD geometry variations affect photon transport efficiency predictions
      • Showed implications for detector design optimization in the nEXO experiment
      • Discussed best practices for GPU-accelerated optical simulations using the Chroma framework

      The work directly contributes to improving the sensitivity of future neutrino physics experiments by optimizing detector geometry and simulation accuracy. This research helps ensure that theoretical predictions match experimental reality, crucial for detecting rare nuclear processes.

      The presentation was well-received by the nuclear physics community and has informed ongoing detector development efforts within the nEXO collaboration.`,
      abstractUrl: getAssetPath('/files/2024 APS-DNP CEU Abstract.pdf'),
      posterUrl: getAssetPath('/files/Daksh Bhatt APS-DNP CEU Poster Final Draft.pdf')
    },
    {
      id: 'phys131-ta',
      title: 'PHYS131 - Introduction to Mechanics',
      type: 'teaching',
      period: 'Sept 2024 – Dec 2024',
      supervisor: 'Prof. Raul Hatch',
      description: 'Assisted students during weekly lab class and office hours, guided problem-solving in mechanics, graded assignments and exams, and led review sessions to reinforce conceptual understanding.',
      fullContent: `As a Teaching Assistant for Introduction to Mechanics, I supported first-year physics students in developing fundamental problem-solving skills and conceptual understanding of classical mechanics.

      Teaching Responsibilities:
      • Conducted weekly laboratory sessions, helping students navigate experimental setups and understand the physics behind hands-on activities
      • Held regular office hours to provide personalized support for homework problems and exam preparation
      • Graded assignments and exams with detailed feedback to help students identify areas for improvement
      • Led review sessions before major exams to reinforce key concepts and problem-solving strategies

      Educational Impact:
      This role allowed me to develop strong communication skills while helping students overcome common misconceptions in introductory physics. I focused on building students' confidence in approaching physics problems systematically and understanding the underlying physical principles rather than just memorizing formulas.

      Many students showed marked improvement in their problem-solving abilities and expressed increased confidence in tackling physics challenges. The experience reinforced my passion for science education and outreach.`
    },
    {
      id: 'astron105-ta',
      title: 'ASTRON105 - Weather and Astronomy',
      type: 'teaching',
      period: 'Feb 2023 – May 2023',
      supervisor: 'Prof. Don Candela',
      description: 'Conducted weekly office hours and graded assignments for a general education course introducing 120+ non-major students to weather phenomena through the lens of basic physics and astronomy.',
      fullContent: `This teaching role focused on making astronomy and atmospheric physics accessible to non-science majors, helping students develop scientific literacy and appreciation for natural phenomena.

      Course Overview:
      ASTRON105 serves as a bridge between everyday weather experiences and the underlying physics, using astronomical concepts to explain atmospheric processes. The course attracts diverse students from across the university.

      Teaching Contributions:
      • Conducted weekly office hours to help students understand complex weather phenomena through simple physical principles
      • Graded assignments with emphasis on clear explanation of concepts rather than mathematical rigor
      • Supported students in connecting everyday weather observations to broader scientific principles
      • Helped demystify astronomy and physics for students who might otherwise avoid science courses

      Student Engagement:
      Working with non-major students presented unique challenges and rewards. I learned to explain complex concepts using everyday analogies and to foster curiosity about the natural world. Many students expressed surprise at how much physics could explain about their daily weather experiences.

      This experience strengthened my belief in the importance of scientific literacy for all citizens, regardless of their career path.`
    },
    {
      id: 'astron100-ta',
      title: 'ASTRON100 - Exploring the Universe',
      type: 'teaching',
      period: 'Sept 2023 – May 2025',
      supervisor: 'Prof. Stephen Schneider',
      description: 'Assisted first-year astronomy majors during lab sessions, helping students navigate Stellarium software and apply core astronomy concepts to real sky simulations.',
      fullContent: `As a Teaching Assistant for Exploring the Universe, I worked with first-year astronomy majors in their introduction to observational astronomy and computational tools.

      Lab Session Leadership:
      • Guided students through Stellarium planetarium software, teaching them to navigate virtual sky observations
      • Helped students connect theoretical concepts from lectures to practical sky observations
      • Assisted with understanding coordinate systems, celestial motion, and astronomical timekeeping
      • Supported students in developing observational skills and astronomical intuition

      Skills Development:
      The role involved teaching both technical skills (software navigation, data interpretation) and conceptual understanding (celestial mechanics, stellar properties, galactic structure). I worked to ensure students could bridge the gap between abstract concepts and observable phenomena.

      Mentorship Aspect:
      Working with first-year astronomy majors allowed me to share insights about the major and provide guidance on academic planning. Many students were deciding whether to pursue astrophysics seriously, and I could offer perspective on the research opportunities and challenges ahead.

      This ongoing position has been particularly rewarding as I've seen students progress from basic sky navigation to sophisticated understanding of stellar evolution and galactic dynamics.`
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

          {/* Instructions for adding videos */}
          <Card className="bg-card/50 border-cosmic-purple/50 mb-8">
            <CardContent className="p-6">
              <h3 className="text-cosmic-bright font-semibold mb-2">Adding Presentation Videos</h3>
              <p className="text-cosmic-star/70 text-sm">
                To add videos: Edit the outreachData array in src/pages/Outreach.tsx. 
                Set type: 'video', add videoUrl (YouTube embed link), and optional thumbnailUrl. 
                Use lazy loading to keep the page lightweight.
              </p>
            </CardContent>
          </Card>

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
