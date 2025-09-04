import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const highlights = [
    {
      title: 'MS in Data Science',
      subtitle: 'Stony Brook University'
    },
    {
      title: 'AI & CloudOps Intern',
      subtitle: 'Airtel | PowerZoom'
    },
    {
      title: 'Python & ML Expert',
      subtitle: 'Data Analysis'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="heading-hero">
                Sanskruti Deshmukh
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-primary">
                Software Developer - Data Scientist - AI Researcher
              </p>
              <p className="text-lg font-bold text-foreground">
                @ Stony Brook University
              </p>
              <p className="text-xl text-body max-w-2xl mx-auto lg:mx-0">
                Bridging advanced AI research with practical data-driven innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary"
                onClick={() => scrollToSection('#projects')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" variant="outline" className="p-4 border-2 border-primary/40 hover:border-primary hover:bg-primary/10" asChild>
                <a href="https://github.com/sanskruti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-7 w-7 text-foreground hover:text-primary transition-colors" strokeWidth={2.8} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="p-4 border-2 border-primary/40 hover:border-primary hover:bg-primary/10" asChild>
                <a href="https://linkedin.com/in/sanskruti-deshmukh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7 text-foreground hover:text-primary transition-colors" strokeWidth={2.8} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="p-4 border-2 border-primary/40 hover:border-primary hover:bg-primary/10" asChild>
                <a href="mailto:sanskruti.deshmukh@stonybrook.edu" aria-label="Email">
                  <Mail className="h-7 w-7 text-foreground hover:text-primary transition-colors" strokeWidth={2.8} />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image & Highlights */}
          <div className="flex flex-col items-center space-y-8 animate-scale-in">
            {/* Profile Image */}
            <div className="profile-image w-48 h-48 md:w-56 md:h-56">
              <img
                src={profileImage}
                alt="Sanskruti Deshmukh - Professional portrait"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="card-professional text-center p-4 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.subtitle}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;