
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalaxySimulation from '@/components/GalaxySimulation';
import TypewriterText from '@/components/TypewriterText';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getAssetPath } from '@/lib/assets';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark text-foreground">
      <GalaxySimulation />
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <TypewriterText text="Welcome to My Cosmic Journey" />
          </div>
          
          <p className="text-cosmic-star text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Astrophysicist passionate about unraveling the mysteries of the universe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/research">
              <Button className="bg-purple-gradient hover:bg-cosmic-light text-white font-semibold px-8 py-3 cosmic-glow">
                Explore My Research
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-cosmic-accent text-cosmic-accent hover:bg-cosmic-accent hover:text-cosmic-dark font-semibold px-8 py-3">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About My Journey Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmic-bright text-center mb-12">
            About My Journey
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 flex-shrink-0">
              <img 
                src={getAssetPath("/lovable-uploads/59cd95c2-401b-45a6-8d41-25e51f4db0e3.png")}
                alt="Daksh Bhatt"
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl cosmic-glow"
              />
            </div>
            
            <div className="lg:w-2/3">
              <div className="text-cosmic-star leading-relaxed space-y-4">
                <p>
                  My fascination with the universe began not through equations or telescopes, but through stories. I first encountered Halley's Comet as a tale of longing—Edmund Halley glimpsing his cosmic love, only to wait 76 years to see her again. Or Altair and Vega, lovers separated by a sea of stars. These stories made the cosmos feel deeply human, and in turn, made me feel like I belonged to it.
                </p>
                <p>
                  As I grew, that poetic wonder evolved into an insatiable curiosity. Astrophysics became a playground—an infinite puzzle where every discovery opened the door to another mystery. Research, for me, is a quest to figure things out. I'm driven by the thrill of peeling back layers of reality and finding the logic behind the light.
                </p>
                <p>
                  My path hasn't been easy. As an international student, getting research funded has been a challenge—but every obstacle has only sharpened my drive. And every breakthrough, no matter how small, has felt hard-earned and meaningful.
                </p>
                <p>
                  Currently, I study how starlight from galaxies is altered as it passes through cosmic dust—asking how this subtle veiling changes what we know about the universe. But beyond the data, my goal is simple: I want others to feel what I feel when I look at the night sky. I want them to sense the stardust in their bones. To feel connected, curious, and alive.
                </p>
                <p>
                  This is more than science. It's a story we're all part of. And I'm here to help tell it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-cosmic-purple cosmic-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cosmic-bright mb-4">Research Focus</h3>
                <p className="text-cosmic-star">
                  Galaxy formation, stellar dynamics, and computational astrophysics
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-cosmic-purple cosmic-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cosmic-bright mb-4">Current Work</h3>
                <p className="text-cosmic-star">
                  Conducting stellar photometry and dust attenuation studies in nearby galaxies with Prof. Daniella Calzetti
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-cosmic-purple cosmic-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cosmic-bright mb-4">Future Goals</h3>
                <p className="text-cosmic-star">
                  PhD in Astrophysics and researching galaxy evolution of high redshift galaxies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News and Updates Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmic-bright text-center mb-8">
            Latest News and Updates
          </h2>
          
          <Card className="bg-card border-cosmic-purple cosmic-glow">
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-cosmic-purple">
                    <TableHead className="text-cosmic-accent font-semibold">Date</TableHead>
                    <TableHead className="text-cosmic-accent font-semibold">Update</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-cosmic-purple hover:bg-cosmic-purple/20">
                    <TableCell className="text-cosmic-star font-medium">Dec 2024</TableCell>
                    <TableCell className="text-cosmic-star">Started research collaboration with Prof. Daniella Calzetti on stellar photometry and dust attenuation studies</TableCell>
                  </TableRow>
                  <TableRow className="border-cosmic-purple hover:bg-cosmic-purple/20">
                    <TableCell className="text-cosmic-star font-medium">Oct 2024</TableCell>
                    <TableCell className="text-cosmic-star">Presented poster at American Physical Society Division of Nuclear Physics Meeting</TableCell>
                  </TableRow>
                  <TableRow className="border-cosmic-purple hover:bg-cosmic-purple/20">
                    <TableCell className="text-cosmic-star font-medium">Sep 2024</TableCell>
                    <TableCell className="text-cosmic-star">Published internal research memo on stellar nucleosynthesis and nuclear astrophysics</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
