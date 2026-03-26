import React, { useState } from 'react';
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
import { ContactModal } from './components/ui/ContactModal';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <div className="relative font-sans antialiased text-graphite min-h-screen">
      
      <div className="relative z-10">
        <Navbar onOpenQuiz={() => setIsQuizOpen(true)} onOpenContact={openContact} />
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} onOpenContact={openContact} />
        <ProblemScenarios onOpenContact={openContact} />
        <QuizCallout onOpenQuiz={() => setIsQuizOpen(true)} />
        <Audience />
        <Philosophy onOpenContact={openContact} />
        <Comparison />
        <Methodology onOpenContact={openContact} />
        <ServiceDetails />
        <Services onOpenContact={openContact} />
        <About />
        <Cases onOpenContact={openContact} />
        <FAQ />
        <CTAForm />
      </div>

      <AnimatePresence>
        {isQuizOpen && <QuizFlow isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
