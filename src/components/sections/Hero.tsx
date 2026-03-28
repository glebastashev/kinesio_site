import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/Animations';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenContact: () => void;
}

// Mobile: subtle ambient background
const AnatomyBackground = () => {
  const [currentLayer, setCurrentLayer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLayer(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const layers = [
    `${import.meta.env.BASE_URL}assets/layer1_body.png`,
    `${import.meta.env.BASE_URL}assets/layer2_skeleton.png`,
    `${import.meta.env.BASE_URL}assets/layer3_nerves.png`,
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden lg:hidden">
      {layers.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${
            currentLayer === i ? 'opacity-[0.10]' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-alabaster via-alabaster/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-alabaster/50 via-transparent to-alabaster/50" />
    </div>
  );
};

// Desktop: original phone-shaped widget
const AnatomyLoop = () => {
  const [currentLayer, setCurrentLayer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLayer(prev => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[360px] h-[640px] bg-graphite/95 rounded-[60px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex items-center justify-center isolate scale-90 lg:scale-100 origin-center mx-auto">
      <div className="absolute inset-0 rounded-[60px] shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
      <img
        src={`${import.meta.env.BASE_URL}assets/layer1_body.png`}
        className={`absolute inset-0 w-full h-full object-cover mix-blend-lighten transition-opacity duration-[1500ms] ease-in-out ${currentLayer === 0 ? 'opacity-100' : 'opacity-0'}`}
        alt="Body"
      />
      <img
        src={`${import.meta.env.BASE_URL}assets/layer2_skeleton.png`}
        className={`absolute inset-0 w-full h-full object-cover mix-blend-lighten transition-opacity duration-[1500ms] ease-in-out ${currentLayer === 1 ? 'opacity-100' : 'opacity-0'}`}
        alt="Skeleton"
      />
      <img
        src={`${import.meta.env.BASE_URL}assets/layer3_nerves.png`}
        className={`absolute inset-0 w-full h-full object-cover mix-blend-lighten transition-opacity duration-[1500ms] ease-in-out ${currentLayer === 2 ? 'opacity-100' : 'opacity-0'}`}
        alt="Nerves"
      />
    </div>
  );
};

export const Hero = ({ onOpenQuiz, onOpenContact }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Mobile ambient background */}
      <AnatomyBackground />

      {/* Yellow glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              Найдите и проработайте <span className="italic relative inline-block">истинную<div className="absolute -bottom-1 left-0 w-full h-3 bg-accent-yellow/40 -z-10 rounded-sm"></div></span> первопричину вашей боли, усталости или эмоционального конфликта.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl text-graphite/80 leading-relaxed mb-10 max-w-xl font-light">
              Мягкая диагностика и восстановление организма через связь тела, нервной системы и психики. Возвращаем вас к жизни на полной мощности без жестких мануальных правок и бесконечных психологических проработок.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg" onClick={onOpenContact}>
              Оставить заявку на разбор
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg" onClick={onOpenQuiz}>
              Пройти тест на причину
            </Button>
          </FadeIn>
        </div>

        {/* Desktop only: phone widget */}
        <FadeIn delay={0.6} className="relative hidden lg:flex justify-end">
          <AnatomyLoop />
        </FadeIn>
      </div>
    </section>
  );
};
