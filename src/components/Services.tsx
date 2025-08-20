import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Shield, 
  Smartphone, 
  SearchCode, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Webentwicklung',
      description: 'Moderne, responsive Websites mit neuesten Technologien',
      features: [
        'React.js & TypeScript',
        'Responsive Design',
        'SEO-freundlich'
      ],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Wartung & Support',
      description: '24/7 Betreuung für maximale Verfügbarkeit',
      features: [
        'Automatische Backups',
        'Sicherheitsupdates',
        'Technischer Support'
      ],
      color: 'accent'
    },
    {
      icon: Smartphone,
      title: 'First Design (Templates)',
      description: 'Optimiert für alle Geräte und Bildschirmgrößen',
      features: [
        'Progressive Webseiten',
        'Modernes Design',
        'Seriöse ausstrahlung',
      ],
      color: 'accent'
    },
    {
      icon: SearchCode,
      title: 'Unterstützung',
      description: 'Individuelle Beratung für maßgeschneiderte Weblösungen und digitale Strategien.',
      features: [
        'Modernes Design',
        'Langfristige Begleitung',
        'Kosten- & Zeitplanung',
      ],
      color: 'primary'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Unsere Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professionelle{' '}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Umfassende Lösungen für Ihren digitalen Erfolg
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isAccent = service.color === 'accent';
            
            return (
              <div
                key={service.title}
                className="card-professional p-8 group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl ${isAccent ? 'bg-accent' : 'bg-primary'} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`text-3xl font-bold ${isAccent ? 'text-accent' : 'text-primary'}`}>
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 group-hover:${isAccent ? 'text-accent' : 'text-primary'} transition-colors`}>
                  {service.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center group-hover:text-text-primary transition-colors">
                      <CheckCircle className={`w-4 h-4 mr-3 ${isAccent ? 'text-accent' : 'text-primary'} flex-shrink-0`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="ghost"
                  className={`${isAccent ? 'text-accent hover:text-accent' : 'text-primary hover:text-primary'} p-0 group-hover:translate-x-2 transition-all duration-300`}
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Bereit für Ihr nächstes Projekt?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision in eine beeindruckende digitale Realität verwandeln.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            size="lg"
          >
            Kostenlose Beratung
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;