import React from 'react';
import { Card } from '../ui/Card';
import { FadeIn } from '../ui/Animations';
import { Activity, Brain, Compass, Link2, Target } from 'lucide-react';

const scenarios = [
  {
    title: '"Анализы в норме, а сил нет"',
    description: 'Вы обошли профильных врачей, сдали все тесты, но по-прежнему просыпаетесь уставшим, чувствуете «туман» в голове и непонятную тревогу.',
    icon: Activity
  },
  {
    title: '"Хочу, но не могу"',
    description: 'Вы ставите цели (в карьере, спорте, отношениях), но внутреннее сопротивление, повторяющиеся негативные сценарии или страх блокируют ваши действия.',
    icon: Target
  },
  {
    title: '"Лечу одно, болит другое"',
    description: 'Вас беспокоят боли непонятного генеза в пояснице, коленях или стопах. Массажи и таблетки отпускают лишь на время.',
    icon: Compass
  },
  {
    title: '"Тело стянуто старыми травмами"',
    description: 'У вас есть шрамы (в т.ч. от кесарева сечения), старые переломы, ожоги или крупные татуировки, которые создают скрытое напряжение.',
    icon: Link2
  },
  {
    title: 'Бизнес и выгорание',
    description: 'Вы руководитель или предприниматель, но из-за постоянного стресса потеряли контакт с собой, стали раздражительным, а тело отвечает психосоматикой.',
    icon: Brain
  }
];

export const ProblemScenarios = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div>
          <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Ваша нервная система адаптировалась к проблеме, и вы к ней привыкли?
            </h2>
            <p className="text-xl text-graphite/70 font-light">
              Часто боль становится просто фоном жизни. Человек из сильного и уверенного превращается в того, кого сам не узнает, а походы по специалистам дают лишь временный эффект. Узнаете свою ситуацию?
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <Card hoverEffect className="h-full border-white/80 bg-white/50">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center mb-6 text-graphite">
                  <scenario.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                <p className="text-graphite/70 leading-relaxed font-light text-sm md:text-base">
                  {scenario.description}
                </p>
              </Card>
            </FadeIn>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
