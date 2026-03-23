import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'lead' | 'result' | 'thanks';

const answersWeights = {
  A: { structural: 1, dynamic: 0, scar: 0, pain: 2 },
  B: { structural: 0, dynamic: 1, scar: 0, pain: 2 },
  C: { structural: 0, dynamic: 2, scar: 0, pain: 0 },
  D: { structural: 0, dynamic: 0, scar: 2, pain: 0 }
};

export const QuizFlow = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState<Step>('intro');
  const [scores, setScores] = useState({ pain: 0, dynamic: 0, scar: 0 });
  const [leadData, setLeadData] = useState({ name: '', phone: '' });

  const handleAnswer = (type: 'A' | 'B' | 'C' | 'D', nextStep: Step) => {
    const weights = answersWeights[type];
    setScores(prev => ({
      pain: prev.pain + weights.pain,
      dynamic: prev.dynamic + weights.dynamic,
      scar: prev.scar + weights.scar
    }));
    setStep(nextStep);
  };

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('result');
  };

  const getResult = () => {
    if (scores.scar >= 2) return 'scar';
    if (scores.dynamic >= 3) return 'dynamic';
    return 'pain'; // default based on mostly A and B
  };

  const resultType = getResult();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-graphite/40 backdrop-blur-md">
      <div className="absolute inset-0 bg-graphite/80" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-alabaster rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-graphite/5 flex items-center justify-center text-graphite/60 hover:bg-graphite/10 hover:text-graphite transition-colors">
          <X size={20} />
        </button>

        <div className="overflow-y-auto w-full p-8 md:p-12">
          <AnimatePresence mode="wait">
            
            {step === 'intro' && (
              <motion.div key="intro" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                <span className="inline-block w-16 h-1 bg-accent-yellow mb-8 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6 text-graphite">
                  Какой истинный источник вашей боли, усталости или внутреннего сопротивления?
                </h2>
                <p className="text-lg text-graphite/70 font-light mb-10 leading-relaxed max-w-lg mx-auto">
                  Ответьте на 5 коротких вопросов за 1 минуту. Узнайте, что именно истощает вашу нервную систему (структурный сбой, старый шрам или непрожитая эмоция), и получите рекомендацию по бережному восстановлению.
                </p>
                <Button size="lg" className="w-full sm:w-auto" onClick={() => setStep('q1')}>Начать тест (Найти свою причину)</Button>
              </motion.div>
            )}

            {step === 'q1' && (
              <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-xs font-bold tracking-widest text-graphite/40 uppercase mb-4">Вопрос 1 из 5</p>
                <h3 className="text-2xl md:text-3xl leading-tight mb-8">Что беспокоит вас больше всего прямо сейчас?</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'q2')}>А) Физическая боль (поясница, шея, суставы, стопы) или «лечу одно, а болит другое».</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('B', 'q2')}>Б) Хроническая усталость, апатия, тревожность, «туман в голове».</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('C', 'q2')}>В) Состояние «хочу, но не могу»: ставлю цели, но не дохожу до них.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('D', 'q2')}>Г) Дискомфорт от старых травм, тянут шрамы после операций (в т.ч. кесарева).</Button>
                </div>
              </motion.div>
            )}

            {step === 'q2' && (
              <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-xs font-bold tracking-widest text-graphite/40 uppercase mb-4">Вопрос 2 из 5</p>
                <h3 className="text-2xl md:text-3xl leading-tight mb-8">Как вы пытались решить эту проблему раньше?</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'q3')}>А) Обошел врачей, сдал анализы — всё в норме, но проблема не уходит.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('B', 'q3')}>Б) Массажи или таблетки. Снимает симптом, но боль возвращается.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('C', 'q3')}>В) Работаю с психологами, всё понимаю «через голову», но нет изменений.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('D', 'q3')}>Г) Никак, привык терпеть и легализовал эту боль как часть жизни.</Button>
                </div>
              </motion.div>
            )}

            {step === 'q3' && (
              <motion.div key="q3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-xs font-bold tracking-widest text-graphite/40 uppercase mb-4">Вопрос 3 из 5</p>
                <h3 className="text-2xl md:text-3xl leading-tight mb-8">Есть ли на вашем теле шрамы, старые переломы, ожоги или татуировки?</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('D', 'q4')}>А) Да, есть старые или заметные шрамы/переломы.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('D', 'q4')}>Б) Есть татуировки или небольшие следы от ожогов/операций.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'q4')}>В) Нет, ничего существенного.</Button>
                </div>
              </motion.div>
            )}

            {step === 'q4' && (
              <motion.div key="q4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-xs font-bold tracking-widest text-graphite/40 uppercase mb-4">Вопрос 4 из 5</p>
                <h3 className="text-2xl md:text-3xl leading-tight mb-8">Как вы оцениваете свое эмоциональное состояние в последнее время?</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'q5')}>А) Раздражаюсь, часто нахожусь в стрессе или тревоге.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('C', 'q5')}>Б) Чувствую внутренние блоки, страх нового, избегаю действий.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'q5')}>В) Эмоционально стабилен, беспокоит только механика тела.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('B', 'q5')}>Г) Устал бороться, нет ресурса даже на то, чтобы ставить цели.</Button>
                </div>
              </motion.div>
            )}

            {step === 'q5' && (
              <motion.div key="q5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-xs font-bold tracking-widest text-graphite/40 uppercase mb-4">Вопрос 5 из 5</p>
                <h3 className="text-2xl md:text-3xl leading-tight mb-8">Готовы ли вы к тому, что причина боли может находиться совершенно в другом месте?</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'lead')}>А) Да, я понимаю, что в организме всё связано, ищу комплексный подход.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'lead')}>Б) Звучит необычно, но готов довериться специалисту.</Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4 font-normal" onClick={() => handleAnswer('A', 'lead')}>В) Мне просто хочется, чтобы перестало болеть, готов пробовать новое.</Button>
                </div>
              </motion.div>
            )}

            {step === 'lead' && (
              <motion.div key="lead" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent-yellow/20 flex items-center justify-center mx-auto mb-6 text-graphite">
                  <div className="w-6 h-6 rounded-full bg-accent-yellow animate-pulse" />
                </div>
                <h3 className="text-3xl leading-tight mb-4 font-serif">Ваша нервная система проанализирована!</h3>
                <p className="text-graphite/70 font-light mb-8 max-w-sm mx-auto">
                  Оставьте свои контакты, чтобы открыть результат тестирования и узнать, какой формат работы поможет вам выйти из замкнутого круга.
                </p>
                <form onSubmit={submitLead} className="space-y-4 max-w-sm mx-auto">
                  <input type="text" required placeholder="Ваше имя" className="w-full border border-graphite/20 rounded-xl px-4 py-3 bg-white/50 focus:border-accent-yellow outline-none" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
                  <input type="tel" required placeholder="Ваш WhatsApp / Telegram (Телефон)" className="w-full border border-graphite/20 rounded-xl px-4 py-3 bg-white/50 focus:border-accent-yellow outline-none" value={leadData.phone} onChange={e => setLeadData({...leadData, phone: e.target.value})} />
                  <Button type="submit" className="w-full shadow-lg">Получить результат</Button>
                </form>
              </motion.div>
            )}

            {step === 'result' && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                
                {resultType === 'pain' && (
                  <div className="space-y-6">
                    <span className="text-xs font-bold tracking-widest text-graphite/40 uppercase">Сорванная компенсация</span>
                    <h3 className="text-3xl leading-tight font-serif mb-4">Ваш тип: Притаившийся орган</h3>
                    <p className="text-graphite/80 font-light">Ваше тело долгое время адаптировалось к внутреннему сбою. Та боль, которую вы чувствуете сейчас — лишь следствие. Лечить само место боли бессмысленно, так как нервная система сохраняет условия для болезни.</p>
                    <div className="bg-white/60 rounded-2xl p-6 my-6 border border-graphite/10 text-left">
                      <p className="font-bold mb-2">Решение: Диагностика и Коррекция</p>
                      <p className="text-sm text-graphite/70">Через мягкий мышечный тест мы найдем первопричину — орган, вегетативный или химический компонент. Это не просто диагностика, мы сразу проведем коррекцию рефлекса, чтобы вернуть вам ресурс.</p>
                    </div>
                  </div>
                )}

                {resultType === 'dynamic' && (
                  <div className="space-y-6">
                    <span className="text-xs font-bold tracking-widest text-graphite/40 uppercase">Блокировка действий</span>
                    <h3 className="text-3xl leading-tight font-serif mb-4">Ваш тип: Остановленное движение</h3>
                    <p className="text-graphite/80 font-light">Любая непрожитая травма или стресс заставляет нервную систему избегать их повторения. Тело формирует зажим. Вы всё понимаете логически, но подсознание и рефлексы вас не пускают.</p>
                    <div className="bg-white/60 rounded-2xl p-6 my-6 border border-graphite/10 text-left">
                      <p className="font-bold mb-2">Решение: Нейродинамическое восстановление</p>
                      <p className="text-sm text-graphite/70">Мягко допроживем заблокированную эмоцию, уберем блокпосты ваших «НЕ» и истощим старые нейронные связи. Вы высвободите ресурс для действий без драм.</p>
                    </div>
                  </div>
                )}

                {resultType === 'scar' && (
                  <div className="space-y-6">
                    <span className="text-xs font-bold tracking-widest text-graphite/40 uppercase">Скрытое напряжение</span>
                    <h3 className="text-3xl leading-tight font-serif mb-4">Ваш тип: Структурный якорь</h3>
                    <p className="text-graphite/80 font-light">Шрамы, ожоги или татуировки создают скрытое напряжение, закручивают геометрию тела под себя и могут вызывать боль даже там, с чем внешне не связаны.</p>
                    <div className="bg-white/60 rounded-2xl p-6 my-6 border border-graphite/10 text-left">
                      <p className="font-bold mb-2">Решение: Глубинная работа со шрамами</p>
                      <p className="text-sm text-graphite/70">Мы снимем структурное стягивание с тканей и освободим вашу психику от эмоционального заряда, связанного с этой травмой.</p>
                    </div>
                  </div>
                )}

                <Button className="w-full mt-4" onClick={() => setStep('thanks')}>Оставить заявку на разбор</Button>
              </motion.div>
            )}

            {step === 'thanks' && (
              <motion.div key="thanks" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-[#E8E230]/20 flex items-center justify-center mx-auto mb-6 text-[#E8E230]">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-3xl leading-tight font-serif mb-4">Спасибо! Заявка получена.</h3>
                <p className="text-graphite/70 font-light mb-8 max-w-md mx-auto">
                  Я свяжусь с вами в ближайшее время, чтобы обсудить ваш результат тестирования и подобрать удобное время для первой сессии.
                </p>
                <Button variant="outline" className="w-full border-graphite/20" onClick={onClose}>Закрыть и вернуться на сайт</Button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
