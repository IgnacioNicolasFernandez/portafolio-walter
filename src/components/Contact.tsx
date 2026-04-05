import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 w-full relative bg-slate-50 dark:bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 border-b border-primary/20 pb-4 flex items-center gap-3">
          <Send className="text-primary w-8 h-8" /> Contacto
        </h2>
        
        <div className="bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-2xl shadow-lg mt-8">
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
             Estoy disponible para nuevos desafíos profesionales. Si buscas un perfil técnico con sólida experiencia en campo, resolución de problemas de infraestructura y compromiso, interactuemos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-black/30 p-4 rounded-xl border border-slate-100 dark:border-white/5">
              <Mail className="text-primary w-8 h-8 shrink-0" />
              <div className="flex flex-col">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Email</span>
                <a href="mailto:walteraguirres@hotmail.com" className="text-slate-900 dark:text-white font-medium hover:text-primary transition-colors truncate">walteraguirres@hotmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-black/30 p-4 rounded-xl border border-slate-100 dark:border-white/5">
              <Phone className="text-primary w-8 h-8 shrink-0" />
              <div className="flex flex-col">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Teléfono</span>
                <span className="text-slate-900 dark:text-white font-medium">15 6816-8075</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-black/30 p-4 rounded-xl border border-slate-100 dark:border-white/5 lg:col-span-2">
              <MapPin className="text-primary w-8 h-8 shrink-0" />
              <div className="flex flex-col">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Ubicación</span>
                <span className="text-slate-900 dark:text-white font-medium">Villa Bosch, 1682</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-white/5 pt-8 pb-8">
        <p>© 2026 Walter Aguirre Skulski.</p>
      </footer>
    </section>
  );
};

export default Contact;