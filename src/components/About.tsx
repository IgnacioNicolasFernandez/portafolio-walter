import { Network, Cpu, User, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-32 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl md:text-3xl font-bold text-slate-900 dark:text-white mb-20 md:mb-12 flex items-center justify-center gap-3">
          <User className="w-10 h-10 md:w-6 md:h-6 text-primary dark:text-primary" /> Sobre Mí
        </h2>
        
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors duration-300">
          <p className="text-slate-700 dark:text-slate-300 text-xl md:text-lg leading-relaxed mb-6">
            Soy Técnico Electromecánico con más de 20 años de trayectoria en soporte técnico IT, especializado en redes, telefonía IP y telecomunicaciones. Mi enfoque combina el diagnóstico preciso de hardware con la gestión eficiente de infraestructura de red, buscando siempre aportar valor y asegurar la continuidad operativa en equipos tecnológicos innovadores.
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 dark:bg-primary/10 p-4 rounded-r-lg text-left italic text-slate-700 dark:text-slate-300 text-lg md:text-base mb-8">
            "Busco integrar equipos de desarrollo innovadores, aportando mi experiencia de campo en infraestructura IT."
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
              <Network className="text-primary dark:text-primary w-12 h-12 md:w-8 md:h-8" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Infraestructura y Redes</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Configuración de Routers, Switches, Telefonía IP, cableado estructurado y administración de Racks de comunicaciones.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
              <Cpu className="text-primary dark:text-primary w-12 h-12 md:w-8 md:h-8" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Electromecánica y Hardware</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Diagnóstico de microinformática, armado de tableros industriales, variadores de frecuencia y mantenimiento de hardware integral.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
              <ShieldCheck className="text-primary dark:text-primary w-12 h-12 md:w-8 md:h-8" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Seguridad y Control</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Implementación, configuración y mantenimiento de sistemas CCTV (cámaras IP y analógicas), alarmas, control de acceso y sistemas de facturación.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;