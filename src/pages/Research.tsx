
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      abstract: 'Conducting stellar photometry and dust attenuation studies in nearby galaxies, focusing on the M33 galaxy through automated aperture photometry and color-color diagram analysis.',
      fullContent: `This independent study focuses on understanding how cosmic dust affects our observations of stellar populations in nearby galaxies, with particular emphasis on the M33 galaxy.

      Key Research Activities:
      • Automated aperture photometry on over 1,200 stellar clusters in multi-band imaging using custom Python code, incorporating a centering algorithm to improve flux accuracy
      • Constructed U-B vs. V-I color-color diagrams to assess the influence of interstellar dust on observed stellar populations and their optical colors
      • Compared photometric measurements to stellar population models to quantify dust-induced age biases, with the goal of deriving empirical corrections for dusty extragalactic systems

      This research contributes to our understanding of how dust veiling affects galaxy observations and helps develop better methods for correcting these effects in astronomical studies.`,
      links: []
    },
    {
      id: 'nexo-experiment',
      title: 'nEXO Experiment: Neutrinoless Double Beta Decay Research',
      period: 'May 2024 – Dec 2024',
      supervisor: 'Prof. Andrea Pocar',
      institution: 'University of Massachusetts, Amherst',
      abstract: 'Worked on the R&D phase of the nEXO experiment, a next-generation search for neutrinoless double beta decay in xenon-136 using a 5-ton liquid xenon time projection chamber (TPC).',
      fullContent: `The nEXO experiment represents a cutting-edge approach to detecting one of the most elusive processes in physics: neutrinoless double beta decay. This research could revolutionize our understanding of neutrino physics and the fundamental nature of matter.

      Research Contributions:
      • Modeled photon transport efficiency in liquid xenon detectors using GPU-accelerated optical simulations with Chroma, focusing on geometries relevant to the nEXO experiment
      • Analyzed the effects of CAD tessellation resolution on light collection by SiPMs, isolating artifacts from surface triangulation and comparing performance of curved versus flat reflectors
      • Authored internal technical documentation on simulation best practices and presented results at the 2024 APS DNP Conference and nEXO Collaboration Meetings

      This work directly contributes to optimizing the detector design for maximum sensitivity to this rare nuclear process, which could provide insights into why the universe contains more matter than antimatter.`,
      links: [
        { label: 'APS DNP 2024 Conference Presentation', url: '#' }
      ]
    },
    {
      id: 'lux-zeplin',
      title: 'LUX-ZEPLIN Dark Matter Detection',
      period: 'Feb 2023 – May 2023',
      supervisor: 'Prof. Scott Hertel',
      institution: 'University of Massachusetts, Amherst',
      abstract: 'Joined the Hertel Group during freshman year to support early-stage experimental development in low-temperature dark matter detection using novel target media such as liquid helium.',
      fullContent: `During my freshman year, I had the opportunity to contribute to groundbreaking research in dark matter detection through the LUX-ZEPLIN (LZ) experiment, one of the world's most sensitive dark matter detectors.

      Research Activities:
      • Designed and built a prototype mechanical switch to control cryogenic detector hardware developed at UMass without introducing additional heat to the low-temperature environment
      • Repurposed LEGO components—leveraging their ABS plastic and precision interlocking design—to achieve reliable, non-conductive actuation suitable for delicate experimental setups
      • Supported broader group efforts contributing to the LUX-ZEPLIN (LZ) experiment, which aims to detect weakly interacting massive particles (WIMPs) via low-background, high-sensitivity instrumentation

      This experience provided invaluable hands-on training in experimental design and precision instrumentation, while contributing to humanity's search for one of the universe's greatest mysteries: dark matter.`,
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
