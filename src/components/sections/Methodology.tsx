import React from 'react';
import { FadeIn } from '../ui/Animations';
import { Button } from '../ui/Button';

export const Methodology = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/60">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl leading-tight mb-8">
            Как проходит наша работа
          </h2>
          <p className="text-xl text-graphite/70 font-light leading-relaxed">
            Вы приходите с запросом. Он может звучать как физическая жалоба на какой-то регион тела, орган или эмоциональное состояние. Я диагностирую, что запустило определённый процесс, и мягкими психокинезиологическими техниками направляю вашу нервную систему к ресурсу. Вы лежите на массажном столе, работа проходит через тело.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12">
          <Button size="lg" onClick={onOpenContact}>
            Записаться на первый сеанс
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};
