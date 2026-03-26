import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemScenarios } from './components/sections/ProblemScenarios';
import { QuizCallout } from './components/sections/QuizCallout';
import { Audience } from './components/sections/Audience';
import { Philosophy } from './components/sections/Philosophy';
import { Comparison } from './components/sections/Comparison';
import { Methodology } from './components/sections/Methodology';
import { Services } from './components/sections/Services';
import { ServiceDetails } from './components/sections/ServiceDetails';
import { About } from './components/sections/About';
import { Cases } from './components/sections/Cases';
import { FAQ } from './components/sections/FAQ';
import { CTAForm } from './components/sections/CTAForm';
import { QuizFlow } from './components/quiz/QuizFlow';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="relative font-sans antialiased text-graphite min-h-screen">
      
      <div className="relative z-10">
        <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        <ProblemScenarios />
        <QuizCallout onOpenQuiz={() => setIsQuizOpen(true)} />
        <Audience />
        <Philosophy />
        <Comparison />
        <Methodology />
        <ServiceDetails />
        <Services />
        <About />
        <Cases />
        <FAQ />
        <CTAForm />
      </div>

      <AnimatePresence>
        {isQuizOpen && <QuizFlow isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
