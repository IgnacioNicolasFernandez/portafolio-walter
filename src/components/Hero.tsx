import { ArrowRight, Download, Server, Activity, Wifi, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100dvh] w-full flex items-center justify-center pt-32 pb-20 md:pt-20 md:pb-10 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-primary-dark dark:text-primary font-semibold tracking-wider uppercase text-lg md:text-base">HOLA, SOY</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mt-4 mb-8 leading-tight">
            Walter Aguirre <br />
            <span className="bg-gradient-to-r from-primary-dark to-blue-600 dark:from-primary dark:to-blue-600 text-transparent bg-clip-text">
              Skulski
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Técnico Electromecánico | Redes y Soporte IT
          </h2>
          <p className="text-xl md:text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-lg leading-relaxed">
            Más de 20 años de experiencia asegurando la continuidad operativa. Especializado en infraestructura de redes, telefonía IP, telecomunicaciones y mantenimiento electromecánico industrial.
          </p>
          
          <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-8">
            <a href="#experience" className="w-full sm:w-auto bg-primary-dark hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-dark text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 text-xl md:text-lg">
              Ver Experiencia <ArrowRight size={22} />
            </a>
            <a href="/CV_Walter_Aguirre.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xl md:text-lg">
              Descargar CV <Download size={22} />
            </a>
          </div>
        </div>

        {/* Panel de Estado de Servidor */}
        <div className="order-1 lg:order-2 w-full max-w-md mx-auto">
           <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-sky-500/20 rounded-full blur-3xl" />
            <div className="relative bg-white/70 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-md shadow-xl dark:shadow-2xl transition-colors duration-300">
               {/* Encabezado del dashboard */}
               <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4">
                 <div className="flex items-center gap-3">
                   <Server className="text-primary w-6 h-6" />
                   <h3 className="text-slate-900 dark:text-white font-semibold tracking-wide">Server Dashboard</h3>
                 </div>
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-600" />
                   <div className="w-3 h-3 rounded-full bg-slate-600" />
                   <div className="w-3 h-3 rounded-full bg-slate-600" />
                 </div>
               </div>

               {/* Métricas */}
               <div className="space-y-4 font-mono text-sm">
                 <div className="flex items-center justify-between bg-slate-100/80 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/30 transition-colors">
                   <div className="flex items-center gap-3">
                     <Activity className="text-primary w-5 h-5" />
                     <span className="text-slate-600 dark:text-slate-300">System Status</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-emerald-600 dark:text-green-400 font-bold">Online</span>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                   </div>
                 </div>

                 <div className="flex items-center justify-between bg-slate-100/80 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/30 transition-colors">
                   <div className="flex items-center gap-3">
                     <Server className="text-primary w-5 h-5" />
                     <span className="text-slate-600 dark:text-slate-300">Uptime</span>
                   </div>
                   <div className="text-primary-dark dark:text-sky-400 font-bold">99.98%</div>
                 </div>

                 <div className="flex items-center justify-between bg-slate-100/80 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/30 transition-colors">
                   <div className="flex items-center gap-3">
                     <ShieldCheck className="text-primary w-5 h-5" />
                     <span className="text-slate-600 dark:text-slate-300">Network</span>
                   </div>
                   <div className="text-primary-dark dark:text-sky-400 font-bold">Secured</div>
                 </div>

                 <div className="flex items-center justify-between bg-slate-100/80 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/30 transition-colors">
                   <div className="flex items-center gap-3">
                     <Wifi className="text-primary w-5 h-5" />
                     <span className="text-slate-600 dark:text-slate-300">Latency</span>
                   </div>
                   <div className="text-primary-dark dark:text-sky-400 font-bold">12ms</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;