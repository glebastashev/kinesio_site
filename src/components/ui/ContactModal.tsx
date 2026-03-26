import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Заявка с сайта\nИмя: ${form.name}\nТелефон: ${form.phone}${form.message ? `\nЗапрос: ${form.message}` : ''}`
    );
    window.open(`https://t.me/Nadezhda_NDV?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: '', phone: '', message: '' });
      setSubmitted(false);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-graphite/70 backdrop-blur-md" onClick={handleClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-alabaster rounded-3xl shadow-2xl overflow-hidden"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-graphite/5 flex items-center justify-center text-graphite/60 hover:bg-graphite/10 hover:text-graphite transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <span className="inline-block w-12 h-1 bg-accent-yellow mb-6 rounded-full" />
                <h2 className="text-3xl font-serif leading-tight mb-2">Оставьте заявку</h2>
                <p className="text-graphite/60 font-light mb-8">
                  Я свяжусь с вами в ближайшее время, чтобы обсудить вашу ситуацию и подобрать удобное время.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-graphite/40 block mb-2">Имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-graphite/20 rounded-xl px-4 py-3 bg-white/60 focus:border-accent-yellow outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-graphite/40 block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-graphite/20 rounded-xl px-4 py-3 bg-white/60 focus:border-accent-yellow outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-graphite/40 block mb-2">
                      Кратко опишите проблему <span className="normal-case font-normal">(по желанию)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Что вас беспокоит..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-graphite/20 rounded-xl px-4 py-3 bg-white/60 focus:border-accent-yellow outline-none resize-none transition-colors"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-lg mt-2">
                    Оставить заявку на диагностику / сеанс
                  </Button>
                  <p className="text-center text-xs text-graphite/40 mt-3">
                    Нажимая кнопку, вы даёте согласие на обработку персональных данных
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <div className="w-20 h-20 rounded-full bg-accent-yellow/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-accent-yellow">✓</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">Отлично! Перехожу в Telegram</h3>
                <p className="text-graphite/70 font-light mb-8 max-w-sm mx-auto">
                  Открылся чат с Надеждой в Telegram. Если окно не открылось — напишите напрямую:{' '}
                  <a href="https://t.me/Nadezhda_NDV" target="_blank" rel="noopener noreferrer" className="text-accent-yellow font-medium underline">
                    @Nadezhda_NDV
                  </a>
                </p>
                <Button variant="outline" className="w-full border-graphite/20" onClick={handleClose}>
                  Закрыть
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
