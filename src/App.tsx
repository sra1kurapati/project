import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { Answer } from './components/Answer';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { CyberMonkey } from './components/CyberMonkey';

function App() {
  const [answer, setAnswer] = useState<{ question: string; answer: string } | null>(null);

  const handleSearch = async (query: string) => {
    // Simulate AI API call
    setAnswer({
      question: query,
      answer: "This is a simulated response. In a production environment, this would be connected to a Gen AI API that would provide detailed cybersecurity guidance based on your query.",
    });
  };

  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      {/* Header */}
      <header className="bg-cyber-dark-light py-6 border-b border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-cyber-blue mr-3" />
              <h1 className="text-2xl font-bold text-white">CyberSecure AI</h1>
            </div>
            <nav>
              <a
                href="#about"
                className="text-cyber-text hover:text-cyber-blue transition-colors duration-300 text-lg"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-22 px-6 matrix-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in leading-tight">
              Your Trusted AI Assistant for Cybersecurity
            </h2>
            <p className="text-xl text-cyber-text mb-18 animate-fade-in leading-relaxed" 
               style={{ animationDelay: '200ms' }}>
              Get instant, accurate answers to your cybersecurity questions
            </p>
            <SearchBar onSearch={handleSearch} />
            {answer && <Answer question={answer.question} answer={answer.answer} />}
          </div>
        </section>

        {/* About Section */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Cyber Monkey */}
      <CyberMonkey />
    </div>
  );
}

export default App