import React, { useState } from 'react';
import { FadeIn } from '../ui/Animations';
import { ChevronDown } from 'lucide-react';
import { cn } from '../ui/Button';

const faqs = [
  {
    question: "Нужно ли мне рассказывать о своих психологических травмах?",
    answer: "Нет. Ваша нервная система помнит всё. Тело само через мышечный тест укажет на блок, вы можете даже не помнить саму ситуацию."
  },
  {
    question: "Вы врач?",
    answer: "Я специалист по оздоровлению и психокинезиологии. Я не ставлю медицинские диагнозы и не лечу болезни таблетками — я помогаю вашему организму найти первопричину сбоя и включить внутренние ресурсы для восстановления."
  },
  {
    question: "Сколько сеансов понадобится для решения моей проблемы?",
    answer: "Количество сеансов индивидуально. Часто значительное облегчение наступает уже после первой встречи, так как мы устраняем глубокий корень проблемы, а не симптом. Для закрепления нового паттерна работы нервной системы обычно требуется от 3 до 5 сеансов."
  },
  {
    question: "Подходит ли этот метод детям?",
    answer: "Да, метод абсолютно безопасен, безболезнен и экологичен для коррекций. Он отлично работает с детскими нарушениями осанки и дисбалансами в развитии, так как воздействует на уровне нервной системы мягко и без стресса."
  },
  {
    question: "В чем отличие от других телесно-ориентированных подходов?",
    answer: "Классические подходы часто работают со следствием — расслабляют мышечный спазм там, где болит. Кинезиология использует мышечный тест как систему биологической обратной связи, чтобы точно определить, *почему* тело создало этот спазм (он может быть следствием проблемы с внутренним органом, эмоцией или старой травмой в другом месте)."
  },
  {
    question: "Как проходит прием?",
    answer: "Прием проходит в комфортной обстановке, вы остаетесь в удобной для вас одежде (спортивной или повседневной, не сковывающей движения). С помощью легких мышечных тестов (надавливаний на руке или ноге) мы находим дисбалансы и через мягкие мануальные техники проводим коррекцию."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-alabaster">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl leading-tight mb-12 text-center">
            Частые вопросы
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={0.1 * i}>
                <div 
                  className={cn(
                    "glass-panel border-white/60 overflow-hidden transition-all duration-300",
                    isOpen ? "bg-white/80" : "bg-white/40 hover:bg-white/60 cursor-pointer"
                  )}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between"
                  >
                    <span className="text-lg font-bold pr-8">{faq.question}</span>
                    <span className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 bg-graphite/5 text-graphite/60",
                      isOpen && "rotate-180 bg-accent-yellow text-graphite"
                    )}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out px-6",
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-graphite/70 font-light leading-relaxed border-t border-graphite/10 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
