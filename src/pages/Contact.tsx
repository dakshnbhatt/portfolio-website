
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All form fields are required.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xovwzwvn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const researchInterests = [
    'Galaxy formation and evolution',
    'Computational astrophysics',
    'Dark matter and dark energy',
    'Stellar dynamics',
    'Observational cosmology'
  ];

  const collaborationInterests = [
    'Research collaborations',
    'Conference opportunities', 
    'Graduate school discussions',
    'Public outreach projects',
    'Academic networking'
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">
              Get in Touch
            </h1>
            <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
              Let's connect and explore the cosmos together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-cosmic-purple cosmic-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-cosmic-bright">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-cosmic-star">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-cosmic-purple/20 border-cosmic-purple text-cosmic-star focus:border-cosmic-accent"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-cosmic-star">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-cosmic-purple/20 border-cosmic-purple text-cosmic-star focus:border-cosmic-accent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-cosmic-star">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-cosmic-purple/20 border-cosmic-purple text-cosmic-star focus:border-cosmic-accent"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-cosmic-star">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-cosmic-purple/20 border-cosmic-purple text-cosmic-star focus:border-cosmic-accent min-h-32"
                        placeholder="Tell me more about your message..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-gradient hover:bg-cosmic-light text-white font-semibold py-3 cosmic-glow disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="bg-card border-cosmic-purple cosmic-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-cosmic-bright">
                    Research Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {researchInterests.map((interest, index) => (
                      <li key={index} className="text-cosmic-star flex items-center">
                        <span className="w-2 h-2 bg-cosmic-accent rounded-full mr-3 flex-shrink-0"></span>
                        {interest}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-cosmic-purple cosmic-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-cosmic-bright">
                    Let's Collaborate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cosmic-star mb-4">I'm always interested in:</p>
                  <ul className="space-y-2">
                    {collaborationInterests.map((interest, index) => (
                      <li key={index} className="text-cosmic-star flex items-center">
                        <span className="w-2 h-2 bg-cosmic-accent rounded-full mr-3 flex-shrink-0"></span>
                        {interest}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-cosmic-purple cosmic-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-cosmic-bright">
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cosmic-star">
                    I typically respond to messages within 24-48 hours. For urgent matters, 
                    please indicate this in your subject line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
