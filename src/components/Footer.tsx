
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 text-muted-foreground hover:text-white transition-colors"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vinicius Santanta. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-1">
            <SocialLink 
              href="https://github.com/vincipy"
              icon={Github}
              label="GitHub"
            />
            <SocialLink 
              href="https://twitter.com/vincipy"
              icon={Twitter}
              label="Twitter"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/vinicius-santana-anjos/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:vincicius.santana.anjos@gmail.com"
              icon={Mail}
              label="Email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
