import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAssetPath } from '@/lib/assets';

interface Paper {
  id: string;
  title: string;
  authors?: string;
  venue?: string;
  date: string;
  status: 'Published' | 'Unpublished' | 'In Review';
  abstract: string;
  pdfUrl?: string;
  externalUrl?: string;
}

const Papers = () => {
  const publishedPapers: Paper[] = [
    {
      id: 'gbo-astrometry-2025',
      title: 'Astrometric Observations of WDS 20528+6307 Using the Great Basin Observatory',
      authors: 'Daksh Bhatt',
      venue: 'Journal of Double Star Observations (under peer review)',
      date: 'Nov 2025',
      status: 'Published',
      abstract: `WDS 20528+6307 is a two-component system observed using 10 new images and 12 historical measurements. My astrometric analysis shows less than 1.1″ change in separation over 40 years, suggesting minimal relative motion. However, the components exhibit nearly identical parallaxes and proper motions, indicating a likely common proper motion pair. Continued monitoring is required to confirm whether the system is gravitationally bound.`,
      pdfUrl: getAssetPath('/files/Astrometric Observations of WDS 20528+6307 Using the Great Basin Observatory.pdf')
    }
  ];

  const unpublishedPapers: Paper[] = [
    {
      id: 'nexo-2024-paper',
      title: 'Effect of Surface Resolution on Ray-Tracing Optical Simulations, nEXO',
      authors: 'Daksh Bhatt',
      venue: 'nEXO internal report / manuscript',
      date: '2024',
      status: 'Unpublished',
      abstract: `Investigated the impact of surface tessellation resolution and CAD geometry variations on optical simulations using Chroma, a GPU-based ray-tracing framework. Results informed simulation practices within the PocarGroup at UMass and the nEXO collaboration.`,
      pdfUrl: getAssetPath('/files/Pocar_Lab___Chroma___SolidWorks_Vs_Fusion_Comparison_Test.pdf')
    },
    {
      id: 'sfr-highz-2024',
      title: 'Star Formation Rate in the First Billion Years: Insights from High-Redshift Galaxies (6 < z < 14)',
      authors: 'Daksh Bhatt',
      venue: 'Manuscript in preparation',
      date: 'Dec 2024',
      status: 'Unpublished',
      abstract: `I investigated the star formation rate–stellar mass (SFR–M*) and specific star formation rate (sSFR–M*) relationships for massive galaxies (M* > 10¹⁰ M⊙) across 0 < z < 14 using PRIMER survey data. Galaxies at z > 6 show higher sSFRs and steeper SFR–M* slopes, indicating more efficient star formation than at lower redshifts. Increased scatter at high z suggests diverse gas accretion and star formation histories. These results highlight evolving star formation efficiency and feedback-driven quenching over cosmic time.`,
      pdfUrl: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">Papers</h1>
            <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
              A collection of scientific papers I have contributed to — published and unpublished.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-cosmic-bright mb-6">Published / In Review</h2>
            <div className="space-y-6">
              {publishedPapers.map((p) => (
                <Card key={p.id} className="bg-card border-cosmic-purple cosmic-glow">
                  <CardHeader>
                    <CardTitle className="text-lg text-cosmic-bright">{p.title}</CardTitle>
                    <div className="text-cosmic-star text-sm mt-2">
                      <p><strong>Date:</strong> {p.date}</p>
                      {p.authors && <p><strong>Authors:</strong> {p.authors}</p>}
                      {p.venue && <p><strong>Venue:</strong> {p.venue}</p>}
                      <p><strong>Status:</strong> {p.status}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cosmic-star mb-4">{p.abstract}</p>
                    {p.pdfUrl && (
                      <a
                        href={p.pdfUrl}
                        className="text-cosmic-accent hover:text-cosmic-bright underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download PDF
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cosmic-bright mb-6">Unpublished / In Preparation</h2>
            <div className="space-y-6">
              {unpublishedPapers.map((p) => (
                <Card key={p.id} className="bg-card border-cosmic-purple cosmic-glow">
                  <CardHeader>
                    <CardTitle className="text-lg text-cosmic-bright">{p.title}</CardTitle>
                    <div className="text-cosmic-star text-sm mt-2">
                      <p><strong>Date:</strong> {p.date}</p>
                      {p.authors && <p><strong>Authors:</strong> {p.authors}</p>}
                      {p.venue && <p><strong>Venue:</strong> {p.venue}</p>}
                      <p><strong>Status:</strong> {p.status}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cosmic-star mb-4">{p.abstract}</p>
                    {p.pdfUrl ? (
                      <a
                        href={p.pdfUrl}
                        className="text-cosmic-accent hover:text-cosmic-bright underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download PDF
                      </a>
                    ) : (
                      <p className="text-cosmic-star/60">PDF not available</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Papers;