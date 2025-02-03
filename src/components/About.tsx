import React from 'react';
import { Shield, Lock, AlertCircle } from 'lucide-react';

export function About() {
  return (
    <section className="py-22 px-6 matrix-bg" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 animate-fade-in text-center">
          About Our Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Shield,
              title: "Expert Knowledge",
              description: "Access AI-powered answers to your cybersecurity questions, backed by current industry best practices."
            },
            {
              icon: Lock,
              title: "Secure Platform",
              description: "Your security is our priority. All interactions are encrypted and protected."
            },
            {
              icon: AlertCircle,
              title: "Real-time Updates",
              description: "Stay informed about the latest cybersecurity threats and solutions."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cyber-dark-light p-8 rounded-lg border-2 border-gray-700/50 
                         hover:border-cyber-blue transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <item.icon className="h-10 w-10 text-cyber-blue mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-cyber-text text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}