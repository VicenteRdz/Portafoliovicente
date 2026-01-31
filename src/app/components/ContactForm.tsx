import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSending(true);

    if (!formRef.current) {
      setIsSending(false);
      return;
    }

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateContact = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
      const templateAutoReply = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Correo para ti
      await emailjs.sendForm(serviceID, templateContact, formRef.current, {
        publicKey,
      });

      // Auto-reply al usuario
      await emailjs.sendForm(serviceID, templateAutoReply, formRef.current, {
        publicKey,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      formRef.current.reset();

      // opcional: ocultar confirmación después de unos segundos
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al enviar el mensaje.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-black/95 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#cc6633]"></div>
            <Mail className="w-5 h-5 text-[#cc6633]" />
            <div className="h-px w-12 bg-[#cc6633]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono text-[#d4a574] mb-4">
            Formulario de Contacto
          </h2>
          <p className="text-sm sm:text-base font-mono text-[#d4a574]/60 max-w-2xl mx-auto">
            Si deseas obtener más información sobre este portafolio o establecer contacto académico,
            completa el siguiente formulario
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1a1a1a]/80 to-[#1a1a1a]/40 border border-[#d4a574]/20 backdrop-blur-sm relative">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#cc6633]/50"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#cc6633]/50"></div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-mono text-[#d4a574]">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#d4a574]/30 text-[#d4a574] font-mono text-sm focus:border-[#cc6633] focus:outline-none focus:ring-1 focus:ring-[#cc6633]/50 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-mono text-[#d4a574]">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#d4a574]/30 text-[#d4a574] font-mono text-sm focus:border-[#cc6633] focus:outline-none focus:ring-1 focus:ring-[#cc6633]/50 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-mono text-[#d4a574]">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-[#d4a574]/30 text-[#d4a574] font-mono text-sm focus:border-[#cc6633] focus:outline-none focus:ring-1 focus:ring-[#cc6633]/50 transition-all duration-300 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {/* Error inline */}
                {error && (
                  <div className="p-3 bg-[#cc6633]/10 border border-[#cc6633]/30">
                    <p className="text-xs font-mono text-[#cc6633]">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full px-6 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSending ? 'Enviando…' : 'Enviar Mensaje'}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Confirmation Message / Info */}
          <div className="space-y-6">
            {submitted ? (
              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#cc6633]/20 to-transparent border-l-4 border-[#cc6633] animate-fade-in">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#cc6633] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-mono text-[#d4a574] mb-3">
                      Mensaje Enviado Exitosamente
                    </h3>
                    <p className="text-sm font-mono text-[#d4a574]/70 leading-relaxed">
                      Tu mensaje ha sido registrado correctamente. Recibirás una respuesta a la brevedad
                      al correo electrónico proporcionado.
                    </p>
                    <div className="mt-4 p-3 bg-black/30 border border-[#cc6633]/20">
                      <p className="text-xs font-mono text-[#cc6633]">
                        Estado: <span className="text-[#d4a574]">Confirmado</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#d4a574]/10 to-transparent border-l-4 border-[#d4a574]">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-[#d4a574] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-mono text-[#d4a574] mb-3">
                      Mensaje de Confirmación
                    </h3>
                    <p className="text-sm font-mono text-[#d4a574]/70 leading-relaxed">
                      Una vez enviado el formulario, recibirás una confirmación automática visible
                      en esta sección. El mensaje será procesado y se te contactará a la brevedad.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="p-6 sm:p-8 bg-[#1a1a1a]/30 border border-[#d4a574]/20">
              <h3 className="text-lg font-mono text-[#d4a574] mb-4">Información de Contacto</h3>
              <div className="space-y-3 text-sm font-mono text-[#d4a574]/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#cc6633]">›</span>
                  <div>
                    <span className="text-[#d4a574]">Estudiante:</span> José Vicente Rodríguez Rivera
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#cc6633]">›</span>
                  <div>
                    <span className="text-[#d4a574]">Alias:</span> GearToTheEnd
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#cc6633]">›</span>
                  <div>
                    <span className="text-[#d4a574]">Asignatura:</span> CNO V - Seguridad Informática
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#cc6633]">›</span>
                  <div>
                    <span className="text-[#d4a574]">Institución:</span> Universidad Politécnica de San Luis Potosí
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="p-4 bg-[#cc6633]/5 border border-[#cc6633]/20">
              <p className="text-xs font-mono text-[#d4a574]/60 leading-relaxed">
                <span className="text-[#cc6633]">Nota:</span> Este formulario es solo una demostración
                académica. Los datos ingresados no se almacenan en ninguna base de datos externa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"></div>
    </section>
  );
}
