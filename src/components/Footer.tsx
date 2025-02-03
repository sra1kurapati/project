import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cyber-dark text-cyber-text py-10 mt-auto border-t border-gray-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 text-cyber-blue mr-3" />
            <span className="text-white font-semibold text-lg">CyberSecure AI</span>
          </div>
          <nav className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-cyber-blue transition-colors duration-300 text-lg"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-center md:text-left text-cyber-text-muted">
          © {new Date().getFullYear()} CyberSecure AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}