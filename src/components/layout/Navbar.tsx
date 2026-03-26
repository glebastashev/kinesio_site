import React from 'react';
import { Button } from '../ui/Button';

export const Navbar = ({ onOpenQuiz, onOpenContact }: { onOpenQuiz: () => void; onOpenContact: () => void }) => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-4 py-4 md:px-8 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-4 rounded-full">
        <div className="flex items-center gap-2">
          {/* Subtle elegant logo mark */}
          <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center text-graphite font-serif font-bold text-xl">
            N
          </div>
          <span className="font-serif text-lg font-medium tracking-wide hidden sm:block">Надежда Ефремова</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex" onClick={onOpenQuiz}>
            Пройти тест
          </Button>
          <Button variant="solid" size="sm" onClick={onOpenContact}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </nav>
  );
};
