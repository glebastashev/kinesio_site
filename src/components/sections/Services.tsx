import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/Animations';

const services = [
  {
    title: "Диагностика и нейрокинезиологическая коррекция",
    duration: "1 сессия",
    description: "Поиск того, что запустило боль, тревогу или апатию. Какой компонент дал сбой: структурный, химический, вегетативный или эмоциональный. Мы находим «притаившийся» орган или старую дисфункцию. Это не просто диагностика, а полноценный сеанс с мгновенной работой.",
  },
  {
    title: "Нейродинамическое восстановление",
    duration: "3 сессии",
    description: "Работа с вашими целями, убираем блокпосты «хочу, но не получается», мягко допроживая заблокированные эмоции, истощаем негативный сценарий и освобождаем ресурс через одномоментную работу с психикой и телом.",
  },
  {
    title: "Работа со шрамами, ожогами и татуировками",
    duration: "3 сессии",
    description: "Старые травмы закручивают геометрию тела и создают скрытый заряд. Освобождаем тело от стягивания, а психику — от связанных с ним эмоций.",
  }
];

export const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-alabaster">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">Форматы работы</h2>
            <p className="text-xl text-graphite/70 font-light">
              Стоимость и длительность работы зависят от вашего запроса. Оставьте заявку, и мы подберем оптимальный маршрут.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={0.1 * i} className="flex flex-col">
              <Card hoverEffect className="h-full bg-white/50 border-white/80 flex flex-col group">
                <div className="mb-4 inline-block px-3 py-1 glass-panel text-xs text-graphite border-graphite/10 uppercase tracking-wider scale-95 origin-left relative z-10">
                  {service.duration}
                </div>
                <h3 className="text-2xl font-bold mb-4 flex-grow z-10">{service.title}</h3>
                <p className="text-graphite/70 leading-relaxed font-light mb-8 z-10">
                  {service.description}
                </p>
                
                <Button variant="outline" className="w-full mt-auto group-hover:bg-graphite group-hover:text-white group-hover:border-graphite transition-all duration-300 z-10">
                  Оставить заявку
                </Button>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
