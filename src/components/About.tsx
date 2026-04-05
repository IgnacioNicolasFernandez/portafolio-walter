import { User, Network, Cpu, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="flex flex-col items-start justify-center py-16 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 border-b border-primary/20 pb-4 flex items-center gap-3">
          <User className="text-primary w-8 h-8" /> Sobre Mí
        </h2>
        
        <div className="md:grid md:grid-cols-2 md:gap-12 text-left mb-16">
          <p className="text-slate-700 dark:text-slate-300 text-xl md:text-lg leading-relaxed mb-6 md:mb-0">
            Soy Técnico Electromecánico con más de 20 años de trayectoria en soporte técnico IT, especializado en redes, telefonía IP y telecomunicaciones. Mi enfoque combina el diagnóstico preciso de hardware con la gestión eficiente de infraestructura de red, buscando siempre aportar valor y asegurar la continuidad operativa en equipos tecnológicos innovadores.
          </p>
          <blockquote className="border-l-4 border-l-primary bg-transparent py-2 pl-6 text-left italic text-slate-600 dark:text-white/70 text-lg md:text-base h-fit">
            "Busco integrar equipos de desarrollo innovadores, aportando mi experiencia de campo en infraestructura IT."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
            <div className="flex flex-col items-start text-left bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl shadow-sm hover:border-primary/50 transition-colors duration-300 cursor-default">
              <Network className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 tracking-wide">Infraestructura y Redes</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Configuración de Routers, Switches, Telefonía IP, cableado estructurado y administración de Racks de comunicaciones.</p>
            </div>
            <div className="flex flex-col items-start text-left bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl shadow-sm hover:border-primary/50 transition-colors duration-300 cursor-default">
              <Cpu className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 tracking-wide">Electromecánica y Hardware</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Diagnóstico de microinformática, armado de tableros industriales, variadores de frecuencia y mantenimiento de hardware integral.</p>
            </div>
            <div className="flex flex-col items-start text-left bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl shadow-sm hover:border-primary/50 transition-colors duration-300 cursor-default">
              <ShieldCheck className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 tracking-wide">Seguridad y Control</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Implementación, configuración y mantenimiento de sistemas CCTV (cámaras IP y analógicas), alarmas, control de acceso y sistemas de facturación.</p>
            </div>
          </div>

      </div>
    </section>
  );
};

export default About;