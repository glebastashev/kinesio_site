import React from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/Animations';

interface QuizCalloutProps {
  onOpenQuiz: () => void;
}

export const QuizCallout = ({ onOpenQuiz }: QuizCalloutProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent-yellow/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="glass-panel p-8 md:p-16 relative overflow-hidden">

            {/* Circular avatar with accent ring */}
            <div className="flex justify-center mb-6 md:mb-8 relative z-10">
              <div className="relative">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-[3px] border-accent-yellow shadow-lg bg-white relative z-10">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/quiz_avatar.png`}
                    alt="Надежда Ефремова"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent-yellow/40 animate-ping" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl leading-tight mb-6 relative z-10">
              Где прячется корень вашей проблемы: <br className="hidden md:block"/>в физическом теле или заблокированных эмоциях?
            </h2>
            <p className="text-xl text-graphite/80 font-light mb-10 max-w-2xl mx-auto relative z-10">
              Ответьте на 5 коротких вопросов. Система проанализирует ответы и подскажет, что именно блокирует вашу энергию.
            </p>
            <div className="relative z-10">
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-[0_0_30px_rgba(232,226,48,0.3)]" onClick={onOpenQuiz}>
                Начать тест
              </Button>
            </div>

            {/* Subtle floating elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
