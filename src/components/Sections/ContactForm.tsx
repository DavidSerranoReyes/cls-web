import React, { useState } from 'react';
import type { Language } from '../../types';
import { t } from '../../locales';

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Placeholder for form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-[#b0b0b0] mb-2">
          {t(lang, 'contact.form.name')}
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
          placeholder={lang === 'en' ? 'Your name' : 'Tu nombre'}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-[#b0b0b0] mb-2">
          {t(lang, 'contact.form.email')}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
          placeholder={lang === 'en' ? 'your@email.com' : 'tu@email.com'}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-[#b0b0b0] mb-2">
          {t(lang, 'contact.form.subject')}
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
          placeholder={
            lang === 'en' ? 'Project inquiry' : 'Consulta de proyecto'
          }
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-[#b0b0b0] mb-2">
          {t(lang, 'contact.form.message')}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#ff6b35] focus:outline-none transition-colors duration-300 resize-none"
          placeholder={
            lang === 'en'
              ? 'Tell us about your project'
              : 'Cuéntanos sobre tu proyecto'
          }
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded">
          {lang === 'en'
            ? 'Message sent successfully!'
            : '¡Mensaje enviado exitosamente!'}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded">
          {lang === 'en'
            ? 'Error sending message. Try again.'
            : 'Error al enviar el mensaje. Intenta de nuevo.'}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#ff6b35] hover:bg-[#ffa500] disabled:bg-[#666] text-black font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
      >
        {isSubmitting
          ? lang === 'en'
            ? 'Sending...'
            : 'Enviando...'
          : t(lang, 'contact.form.send')}
      </button>
    </form>
  );
}
