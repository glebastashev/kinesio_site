import React from 'react';
import { FadeIn } from '../ui/Animations';
import { Button } from '../ui/Button';

export const Methodology = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text side */}
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Как проходит наша работа
            </h2>
            <p className="text-xl text-graphite/70 font-light leading-relaxed mb-10">
              Вы приходите с запросом. Он может звучать как физическая жалоба на какой-то регион тела, орган или эмоциональное состояние. Я диагностирую, что запустило определённый процесс, и мягкими психокинезиологическими техниками направляю вашу нервную систему к ресурсу. Вы лежите на массажном столе, работа проходит через тело.
            </p>
            <Button size="lg" onClick={onOpenContact}>
              Записаться на первый сеанс
            </Button>
          </FadeIn>

          {/* Photo side */}
          <FadeIn delay={0.3} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}assets/methodology_photo.jpeg`}
                alt="Надежда Ефремова — работа с клиентом"
                className="w-full h-[500px] object-cover object-center"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/30 via-transparent to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-yellow/20 rounded-full blur-2xl pointer-events-none" />
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
