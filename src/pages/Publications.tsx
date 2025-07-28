import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  abstract?: string;
  pdfUrl?: string;
  externalUrl?: string;
}

const Publications = () => {
  // This structure makes it easy to add more publications in the future
  const publications: Publication[] = [
    {
      id: 'nexo-2024',
      title: 'Effect of Surface Resolution on Ray-Tracing Optical Simulations, nEXO',
      authors: 'Daksh Bhatt',
      venue: 'Internal Technical Research Memo for the nEXO simulation group',
      year: '2024',
      type: 'Technical Report',
      abstract: 'Investigated the impact of surface tessellation resolution and CAD geometry variations on optical simulations using Chroma, a GPU-based ray-tracing framework in Python. Results informed simulation practices within the PocarGroup at UMass and the nEXO collaboration.',
      pdfUrl: getAssetPath('/files/Pocar_Lab___Chroma___SolidWorks_Vs_Fusion_Comparison_Test.pdf'),
      externalUrl: undefined
    }
    // Add more publications here following the same structure:
    // {
    //   id: 'future-paper-1',
    //   title: 'Title of Future Paper',
    //   authors: 'Daksh Bhatt, Co-Author Name',
    //   venue: 'Journal Name or Conference',
    //   year: '2025',
    //   type: 'Journal Article',
    //   abstract: 'Abstract of the paper...',
    //   pdfUrl: 'link-to-pdf',
    //   externalUrl: 'link-to-journal'
    // }
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">
              Publications
            </h1>
            <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
              Research contributions to astrophysics and particle physics
            </p>
          </div>

          {publications.length === 0 ? (
            <Card className="bg-card border-cosmic-purple cosmic-glow">
              <CardContent className="p-8 text-center">
                <p className="text-cosmic-star text-lg">
                  Publications will be added here as they become available.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {publications.map((pub) => (
                <Card key={pub.id} className="bg-card border-cosmic-purple cosmic-glow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-cosmic-bright mb-2">
                          {pub.title}
                        </CardTitle>
                        <div className="text-cosmic-star text-sm space-y-1">
                          <p><strong>Authors:</strong> {pub.authors}</p>
                          <p><strong>Venue:</strong> {pub.venue}</p>
                          <p><strong>Year:</strong> {pub.year}</p>
                          <p><strong>Type:</strong> {pub.type}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {pub.abstract && (
                      <div className="mb-6">
                        <h4 className="text-cosmic-bright font-semibold mb-2">Abstract:</h4>
                        <p className="text-cosmic-star leading-relaxed">{pub.abstract}</p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3">
                      {pub.pdfUrl && (
                        <Button
                          className="bg-purple-gradient hover:bg-cosmic-light text-white"
                          onClick={() => window.open(pub.pdfUrl, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      )}
                      
                      {pub.externalUrl && (
                        <Button
                          variant="outline"
                          className="border-cosmic-accent text-cosmic-accent hover:bg-cosmic-accent hover:text-cosmic-dark"
                          onClick={() => window.open(pub.externalUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Online
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* 
              Instructions for adding new publications (for developer reference only):
              
              To add new publications: Edit the publications array above following the existing structure. 
              Include title, authors, venue, year, type, and optional abstract, pdfUrl, and externalUrl fields.
              
              Example structure:
              {
                id: 'unique-publication-id',
                title: 'Title of the Publication',
                authors: 'Daksh Bhatt, Co-Author Name, et al.',
                venue: 'Journal Name or Conference Proceedings',
                year: '2025',
                type: 'Journal Article' | 'Conference Paper' | 'Technical Report' | 'Preprint',
                abstract: 'Brief description of the research and findings...', // optional
                pdfUrl: getAssetPath('/files/paper.pdf'), // optional
                externalUrl: 'https://journal-website.com/paper-link' // optional
              }
              */}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publications;
