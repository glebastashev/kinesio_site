import React from 'react';
import { FadeIn } from '../ui/Animations';

export const Philosophy = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-graphite text-white">
      {/* Subtle organic texture or glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-yellow/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center relative z-10">
          <FadeIn>
          <span className="text-accent-yellow tracking-widest uppercase text-sm font-bold mb-6 block">Философия метода НИПК</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-12 font-serif text-glow">
            Любая непрожитая эмоция — это остановленное движение в теле.
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2} className="space-y-6 text-xl text-white/80 font-light leading-relaxed text-left md:text-center mx-auto">
          <p>
            В организме мышцы, связки, кости, внутренние органы и эмоции — это звенья одной цепи. Когда происходит физическая или психологическая травма, тело формирует зажим, чтобы вас спасти.
          </p>
          <p>
            Ваше сознание может давно забыть или логически «легализовать» эту ситуацию, но мышечный рефлекс остается. Именно поэтому понимание проблемы «через голову» не работает, пока мы не приведем тело к новому движению и рефлексу.
          </p>
          <p className="font-medium text-white">
            В рамках метода НИПК мы ищем эту <span className="text-accent-yellow relative inline-block mx-1">первопричину<div className="absolute bottom-1 left-0 w-full h-1 bg-accent-yellow/80 rounded-sm" /></span> и возвращаем вам ресурс.
          </p>
        </FadeIn>
        </div>
      </div>
    </section>
  );
};
