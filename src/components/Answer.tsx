import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AnswerProps {
  question: string;
  answer: string;
}

export function Answer({ question, answer }: AnswerProps) {
  return (
    <div className="w-full max-w-2xl bg-cyber-dark-light rounded-lg p-8 mt-10 border-2 border-gray-700/50
                    hover:border-cyber-blue transition-all duration-300 animate-fade-in mx-auto">
      <div className="flex items-start gap-6">
        <div className="p-3 bg-cyber-blue rounded-lg">
          <ShieldCheck className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-3">{question}</h3>
          <p className="text-cyber-text leading-relaxed text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}