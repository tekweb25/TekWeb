import React from 'react';
import { Monitor, Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram } from 'lucide-react';
import Logo from '../img/Logo.png'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="logo"
                className="h-20 w-20 sm:h-25 sm:w-25 md:h-20 md:w-20 lg:h-25 lg:w-25"
              />
            </div>

            <p className="text-text-secondary max-w-md leading-relaxed">
              Ihr Partner für innovative Webentwicklung und digitale Transformation.
              Wir erschaffen digitale Erlebnisse, die begeistern und Ergebnisse liefern.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/salih-tekin-977347230"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-card-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tekw.eb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-card-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  Webentwicklung
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  Wartung & Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  First Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  Kostenfreie Beratung
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@tekweb.de"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  tekweb25@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+49123456789"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  +49 163 989 2682
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">
                  Köln, Deutschland
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section 
        <div className="border-t border-card-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2024 TekWeb. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/datenschutz"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                Datenschutz
              </a>
              <a
                href="/impressum"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                Impressum
              </a>
              <a
                href="/agb"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                AGB
              </a>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-text-muted">
              Made with ❤️ in Germany
            </p>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;