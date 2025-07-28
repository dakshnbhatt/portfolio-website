import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

interface ResearchItem {
  id: string;
  title: string;
  period: string;
  supervisor: string;
  institution: string;
  abstract: string;
  fullContent: string;
  links?: { label: string; url: string }[];
}

const Research = () => {
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

  const researchData: ResearchItem[] = [
    {
      id: 'calzetti-group',
      title: 'Stellar Photometry and Dust Attenuation Studies',
      period: 'Feb 2025 – Present',
      supervisor: 'Prof. Daniella Calzetti',
      institution: 'University of Massachusetts, Amherst',
      abstract: 'I\'m currently working with Prof. Daniella Calzetti to study how interstellar dust alters our view of stellar populations in the M33 galaxy. By performing automated photometry on over 1,200 clusters and analyzing color-color diagrams, I aim to quantify how dust biases age estimates and help improve how we interpret galaxies through dusty skies.',
      fullContent: `Dust isn't just a nuisance in astronomy; it's a veil, a filter, a storyteller. And the way it alters starlight has fascinated me for as long as I can remember staring at Hubble images, wondering what might lie just behind the glow.

Under the mentorship of Prof. Daniella Calzetti, I've been pursuing an independent research project focused on dust attenuation in nearby galaxies, with M33 as my primary target. It's a hands-on investigation into how the presence of dust changes the way we interpret the light coming from distant stellar clusters—and how that affects our understanding of their true ages and compositions.

I started by writing custom Python code to perform automated aperture photometry on more than 1200 stellar clusters, using imaging from multiple filters. To ensure accuracy, I integrated a centering algorithm into the pipeline so that even the slightest shift in source position wouldn't distort the measured flux. I wanted this photometry to be precise, not just good enough.

Once I had robust photometric measurements, I built color-color diagrams, particularly U−B vs. V−I, to trace how dust influences the colors we observe. These diagrams are more than just data points; they're diagnostic tools that reveal the age, extinction, and metallicity of stellar populations. But the real challenge came in disentangling the intrinsic colors from the dust-reddened ones, and comparing my observations to theoretical stellar population models.

My goal is to quantify how dust skews age estimations, especially in unresolved systems, and to explore how we might empirically correct for those biases. It's not easy work. The models are complex, the data can be noisy, but it's the kind of challenge I love: the kind where you have to wrestle with nature's imperfections to get at the truth.

This project has shown me how much subtlety there is in astronomical observation, and how seemingly small factors like dust can reshape our big-picture conclusions. It's made me think more deeply about what we see, and what we don't, when we look out into the universe.`,
      links: []
    },
    {
      id: 'nexo-experiment',
      title: 'nEXO Experiment: Neutrinoless Double Beta Decay Research',
      period: 'May 2024 – Dec 2024',
      supervisor: 'Prof. Andrea Pocar',
      institution: 'University of Massachusetts, Amherst',
      abstract: 'At UMass Amherst, I joined the nEXO collaboration to simulate how photons behave inside a 5-ton liquid xenon detector, part of the search for neutrinoless double beta decay. Using GPU-accelerated simulations, I explored how geometry and surface design affect light collection. My work helps refine detector simulation design for one of physics\'s most profound questions: why does matter exist at all?',
      fullContent: `There's something deeply humbling about working on a question that sits at the edge of what humanity knows and what we don't. That's what drew me to neutrinoless double beta decay. If this rare nuclear process exists, it could help answer one of the most profound mysteries in physics: why is our universe made of matter and not equal parts matter and antimatter?

In the summer of 2024, I joined Professor Andrea Pocar's group at UMass to support R&D for the nEXO experiment: a massive, next-generation detector that will use 5 tons of liquid xenon in a time projection chamber to search for signs of this elusive decay in xenon-136.

My role was focused on photon transport. Essentially, how light created by particle interactions travels through the detector to reach the silicon photomultipliers (SiPMs) that read them out. To study this, I used Chroma, a powerful GPU-accelerated ray-tracing tool, to simulate different detector geometries and surface conditions. But almost immediately, I ran into a subtle challenge: the way CAD geometries are tessellated into triangles for simulation can itself affect light transport results. Tiny artifacts from surface meshing, especially in curved reflectors, were skewing the predictions.

Instead of ignoring these artifacts, I leaned into them. I designed test cases to isolate geometry-induced anomalies, comparing how light behaved in curved versus flat reflectors and tracking how tessellation resolution influenced photon detection efficiency. This kind of detail-oriented, simulation-driven debugging taught me to treat every result with both skepticism and curiosity.

In addition to running the simulations, I documented best practices for future researchers and presented my work at the 2024 APS Division of Nuclear Physics (DNP) Conference and during internal nEXO collaboration meetings. Getting feedback from experts in the field helped me improve both the rigor of my analysis and the clarity of how I communicated it.

This experience stretched me technically, but more importantly, it showed me how deep attention to detail and openness to feedback can push research forward in meaningful ways. I walked away with a stronger belief in the power of simulations, not just to model the world, but to shape how we explore the universe's biggest questions.`,
      links: [
        { label: 'APS DNP 2024 Conference Presentation', url: getAssetPath('/files/Daksh Bhatt APS-DNP CEU Poster Final Draft.pdf') }
      ]
    },
    {
      id: 'lux-zeplin',
      title: 'LUX-ZEPLIN Dark Matter Detection',
      period: 'Feb 2023 – May 2023',
      supervisor: 'Prof. Scott Hertel',
      institution: 'University of Massachusetts, Amherst',
      abstract: 'As a freshman, I joined the Hertel Group to work on experimental hardware for dark matter detection in the LUX-ZEPLIN experiment. I designed a cryogenic mechanical switch using repurposed LEGO components—an unconventional yet effective solution for low-temperature environments. This hands-on experience sparked my passion for experimental astrophysics and showed me the power of creative problem-solving in research.',
      fullContent: `Ever since I was a kid, I've been fascinated by the unknown, especially the kind that shapes the cosmos in silence. So when I learned that dark matter might make up the vast majority of our universe and we still had no idea what it was, I knew I had to be part of the effort to find it.

During my freshman year, I joined Professor Scott Hertel's lab to contribute to the development of low-temperature experimental hardware for dark matter detection. This work was connected to the LUX-ZEPLIN (LZ) experiment, one of the world's most sensitive detectors, designed to detect rare interactions with hypothetical dark matter particles known as WIMPs.

I was tasked with designing a cryogenic mechanical switch: something deceptively simple on the surface, but a real engineering puzzle in practice. It had to operate reliably in ultra-cold environments without generating heat, interfering with other components, or introducing conductive materials. I tried traditional approaches, but they often fell short; that's when I turned to something unusual: LEGO.

After testing various designs, I repurposed LEGO pieces, specifically chosen for their ABS plastic composition and precision fit, to create a non-conductive actuation system. It wasn't the kind of solution you'd find in a textbook, but it worked. And more importantly, it taught me never to underestimate the power of playful thinking in serious science.

Beyond my project, I contributed to the lab's broader development efforts, supporting the LZ detector, learning how teams of scientists approach large-scale, low-background experiments that operate at the frontier of particle physics.

This experience grounded my passion for experimental astrophysics and showed me what it really means to take an idea from concept to hardware, especially when the stakes involve solving one of the greatest mysteries in the universe.`,
      links: []
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">
              Research Experience
            </h1>
            <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
              Exploring the cosmos through computational astrophysics, particle physics, and observational astronomy
            </p>
          </div>

          <div className="space-y-8">
            {researchData.map((item) => (
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
                        <p><strong>Period:</strong> {item.period}</p>
                        <p><strong>Supervisor:</strong> {item.supervisor}</p>
                        <p><strong>Institution:</strong> {item.institution}</p>
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
                    <p className="mb-4">{item.abstract}</p>
                    
                    {expandedItems.has(item.id) && (
                      <div className="border-t border-cosmic-purple pt-6 mt-6">
                        <div className="whitespace-pre-line leading-relaxed">
                          {item.fullContent}
                        </div>
                        
                        {item.links && item.links.length > 0 && (
                          <div className="mt-6">
                            <h4 className="text-cosmic-bright font-semibold mb-3">Related Links:</h4>
                            <div className="space-y-2">
                              {item.links.map((link, index) => (
                                <a
                                  key={index}
                                  href={link.url}
                                  className="block text-cosmic-accent hover:text-cosmic-bright underline transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
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

export default Research;
