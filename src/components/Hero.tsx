import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Rocket, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">
                Digitale Innovation
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Ihre digitale{' '}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  Präsenz
                </span>
                <br />
                <span className="text-text-secondary">professionell gestaltet</span>
              </h1>
            </div>
            
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Moderne Webentwicklung mit cutting-edge Technologien. 
              Wir erschaffen digitale Erlebnisse, die Ihre Zielgruppe begeistern 
              und messbare Ergebnisse liefern.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary group"
                size="lg"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Projekt starten
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                size="lg"
                className="btn-outline group"
              >
                <Play className="w-4 h-4 mr-2" />
                Services entdecken
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-card-border">
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-secondary">Professionalität</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-text-secondary">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" 
                   style={{ animationDuration: '20s' }}>
              </div>
              <div className="absolute inset-8 rounded-full border-2 border-accent/30 animate-spin" 
                   style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              </div>
              <div className="absolute inset-16 rounded-full bg-gradient-primary opacity-20 animate-pulse">
              </div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 rounded-full bg-gradient-primary shadow-glow">
                  <Code2 className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-xl shadow-medium flex items-center justify-center animate-bounce"
                   style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <span className="text-primary font-bold">React</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-xl shadow-medium flex items-center justify-center animate-bounce"
                   style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <span className="text-accent font-bold">TS</span>
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-card rounded-lg shadow-medium flex items-center justify-center animate-bounce"
                   style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <span className="text-primary text-sm font-bold">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;