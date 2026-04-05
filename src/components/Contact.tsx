import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 w-full relative bg-slate-50 dark:bg-surface transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">¿Trabajamos juntos?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
          Estoy disponible para nuevos desafíos profesionales. Si buscas un perfil técnico con sólida experiencia en campo, resolución de problemas de infraestructura y compromiso, hablemos.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a 
            href="mailto:walteraguirres@hotmail.com" 
            className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-primary-dark dark:hover:text-primary transition-colors text-lg font-medium"
          >
            <Mail /> walteraguirres@hotmail.com
          </a>
          <span className="hidden md:inline text-slate-300 dark:text-slate-600">|</span>
          <span className="text-slate-900 dark:text-white text-lg font-medium">Cel: 15 6816-8075</span>
          <span className="hidden md:inline text-slate-300 dark:text-slate-600">|</span>
          <span className="text-slate-900 dark:text-white text-lg font-medium">Villa Bosch, 1682</span>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-primary-dark dark:hover:bg-primary-dark transition-all hover:-translate-y-1 shadow-lg border border-slate-200 dark:border-transparent">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-slate-500 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>© 2026 Walter Aguirre Skulski.</p>
      </footer>
    </section>
  );
};

export default Contact;