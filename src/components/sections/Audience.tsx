import React from 'react';
import { FadeIn } from '../ui/Animations';
import { Card } from '../ui/Card';

const audiences = [
  {
    title: "Телесная трансформация",
    desc: "Вы устали топить себя в море слов и интеллектуальных объяснений своей боли, и хотите реальных изменений в теле.",
    img: "/assets/audience_mind_body.png"
  },
  {
    title: "Биомеханика и спорт",
    desc: "Вы спортсмен или любитель фитнеса, которому нужно устранить мышечно-связочный дисбаланс и выстроить правильную базу для безопасных тренировок.",
    img: "/assets/audience_biomechanics.png"
  },
  {
    title: "Забота о детях",
    desc: "Вы родитель, чей ребенок страдает от энуреза, тревожности или нарушения осанки, а классические подходы не дают долгосрочного результата.",
    img: "/assets/audience_care.png"
  },
  {
    title: "Движение к изобилию",
    desc: "Вы хотите не просто «убежать от боли», а двигаться к своим целям, здоровью и изобилию.",
    img: "/assets/audience_abundance.png"
  }
];

export const Audience = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:text-left mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Для тех, кто готов стать руководителем своего тела, а не заложником симптомов.
            </h2>
            <div className="w-12 h-1 bg-accent-yellow mb-8 rounded-full hidden md:block" />
            <p className="text-xl text-graphite/70 font-light hidden md:block">
              Этот подход подходит вам, если:
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i} className="h-full">
              <Card hoverEffect className="h-full overflow-hidden p-0 group border-white/60 bg-white/40 shadow-xl shadow-graphite/5">
                {/* Image Header */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-graphite/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                {/* Card Body */}
                <div className="p-8 backdrop-blur-sm relative z-20">
                  <h3 className="text-2xl font-serif mb-4 text-graphite">{item.title}</h3>
                  <p className="text-graphite/80 font-light leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
