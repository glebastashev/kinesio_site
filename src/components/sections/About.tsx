import React from 'react';
import { FadeIn } from '../ui/Animations';

export const About = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-graphite text-white">
      {/* Glow layer */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-yellow/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <FadeIn className="order-2 lg:order-1 relative">
           <div className="aspect-[4/5] max-w-md mx-auto relative rounded-3xl overflow-hidden glass-dark border-white/10 p-2">
              <img 
              src={`${import.meta.env.BASE_URL}assets/nadezhda_photo.jpeg`} 
              alt="Надежда Ефремова" 
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full mix-blend-overlay blur-xl" />
           </div>
        </FadeIn>

        <div className="order-1 lg:order-2">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8 font-serif">
              Я верю в здоровье и потенциал каждого клиента.
            </h2>
            <p className="text-xl text-white/80 font-light mb-8 italic border-l-2 border-accent-yellow pl-6">
              «Я был у многих специалистов, сдал все анализы, но настоящие подвижки увидел только с вами»
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
              Меня зовут <strong className="text-white font-medium">Надежда Ефремова</strong>. Моя главная сила — не использовать заученные шаблоны, а размышлять и докапываться до истинной первопричину.
            </p>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2} className="glass-dark p-6 bg-white/5 border-white/10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-accent-yellow" />
               <h4 className="text-xl font-bold mb-2">Опыт</h4>
               <p className="text-white/70 font-light">Более 20 лет практического опыта работы с телом в сфере фитнеса и здоровья. Это дало мне огромную насмотренность на тысячах клиентов и доскональное, практичное понимание функциональной анатомии.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="glass-dark p-6 bg-white/5 border-white/10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-accent-yellow/60" />
               <h4 className="text-xl font-bold mb-2">Образование</h4>
               <p className="text-white/70 font-light">Являюсь специалистом по оздоровлению, нейродинамическому восстановлению и нейроинтегративной психокинезиологии (НИПК). Также прохожу обучение по остеопатии.</p>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};
