import React from 'react';
import { Card } from '../ui/Card';
import { FadeIn } from '../ui/Animations';
import { Quote } from 'lucide-react';
import { Button } from '../ui/Button';

const cases = [
  {
    title: "Возвращение ресурса",
    subtitle: "Мужчина, 70 лет, после агрессивной химиотерапии",
    description: "Сильнейшее физическое истощение, депрессии, практически не ходил. После мягкой работы появились силы для физической бытовой активности, включился мышечный тонус, начал строить планы на будущее. «Болезнь разжала свои тиски».",
  },
  {
    title: "Восстановление структуры",
    subtitle: "Девочка 13 лет, сколиоз и боль в колене",
    description: "Сколиоз 16 градусов, постоянная боль в колене, из-за которой пришлось бросить танцы. После работы ортопед зафиксировал норму (около 2 градусов). Боль ушла, вернулась к активному спорту.",
  },
  {
    title: "Деликатные проблемы",
    subtitle: "Подростки с энурезом и СДВГ",
    description: "Девушка 14 лет (энурез): узи и анализы в норме, эффекта от лечений не было — проблема полностью решена. Ребенок 11 лет (СДВГ, ночной энурез) — кардинальное сокращение проблемы, стал спокойнее и собраннее.",
  }
];

export const Cases = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Организм готов исцелиться,<br className="hidden md:block"/> если изменить его рефлекс.
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i} className="h-full">
              <Card hoverEffect className="h-full bg-white/70 border-white">
                <Quote className="text-accent-yellow/40 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-graphite/50 mb-6 uppercase tracking-wider font-serif">
                  {item.subtitle}
                </p>
                <p className="text-graphite/80 leading-relaxed font-light italic">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
          <FadeIn delay={0.4} className="mt-12 text-center">
            <Button size="lg" onClick={onOpenContact}>
              Записаться на сеанс
            </Button>
          </FadeIn>
      </div>
    </section>
  );
};
