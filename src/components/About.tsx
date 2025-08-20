import React from 'react';
import { 
  Zap, 
  Shield, 
  Dumbbell, 
  Headphones, 
  Sparkles,
  Star
} from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Schnell',
      description: 'Blitzschnelle Ladezeiten und effiziente Entwicklung'
    },
    {
      icon: Shield,
      title: 'Sicher',
      description: 'Höchste Sicherheitsstandards und regelmäßige Updates'
    },
    {
      icon: Dumbbell,
      title: 'Sport-Experten',
      description: 'Spezialisiert auf die Sportbranche mit tiefem Fachwissen'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: '24/7 erreichbar mit kompetenter Beratung'
    },
    {
      icon: Sparkles,
      title: 'Modern',
      description: 'Neueste Technologien und innovative Lösungen'
    }
  ];

  const testimonials = [
    {
      name: 'Salih Tekin',
      role: 'TekWeb-CEO',
      content: 'Herzlich willkommen bei TekWeb. Als Geschäftsführer ist es mir ein besonderes Anliegen, unsere Leistungen in jeder Branche gezielt zu professionalisieren. Unser Anspruch ist es, unseren Kunden jederzeit die bestmöglichen Ergebnisse zu liefern. Vielen Dank für Ihr Vertrauen.',
      rating: 0
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
              Warum TekWeb
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ihre{' '}
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                Vorteile
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Diese Eigenschaften machen uns zu Ihrem idealen Partner
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={benefit.title}
                  className="card-professional p-6 text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${isEven ? 'bg-primary' : 'bg-accent'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 group-hover:${isEven ? 'text-primary' : 'text-accent'} transition-colors`}>
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
              Über uns
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Etwas zu unserem{' '}
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h2>
          </div>

          <div className="flex justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-professional p-8 group hover:-translate-y-2 transition-all duration-300 w-1/3"
              >
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary text-center mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;