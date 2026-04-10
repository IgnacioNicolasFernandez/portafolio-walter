import { ArrowRight, Download, Server, Activity, Wifi, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100dvh] w-full flex flex-col items-center justify-center pt-32 pb-20 md:pt-20 md:pb-10 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300 text-center">
      <div className="w-full flex flex-col items-center text-center mt-12 md:mt-16">
        <div className="flex flex-col items-center">
          <span className="text-primary-dark dark:text-primary font-semibold tracking-wider uppercase text-lg md:text-base">HOLA, SOY</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight tracking-tighter">
            Walter Aguirre <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary-dark to-primary dark:from-primary dark:to-emerald-300 text-transparent bg-clip-text ml-0 md:ml-4">
              Skulski
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Técnico Electromecánico | Redes y Soporte IT
          </h2>
          <p className="text-xl md:text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-lg leading-relaxed">
            Más de 20 años de experiencia asegurando la continuidad operativa. Especializado en infraestructura de redes, telefonía IP, telecomunicaciones y mantenimiento electromecánico industrial.
          </p>
          
          <div className="w-full flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-8">
            <a href="#experience" className="w-full sm:w-auto bg-primary-dark hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-dark text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 text-xl md:text-lg">
              Ver Experiencia <ArrowRight size={22} />
            </a>
            <a href="/CV_Aguirre Walter.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xl md:text-lg">
              Descargar CV <Download size={22} />
            </a>
          </div>
        </div>

        {/* Barra de Telemetría Horizontal */}
        <div className="w-full max-w-5xl mx-auto mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-2xl rounded-full" />
          <div className="relative bg-white/70 dark:bg-surface/90 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl overflow-hidden transition-colors duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 border-b md:border-b-0 divide-x divide-y md:divide-y-0 divide-slate-200 dark:divide-white/10">
              
              <div className="flex flex-col items-center justify-center p-6 gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="text-primary w-5 h-5" />
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-mono uppercase tracking-wider">System Status</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 dark:text-primary font-bold text-xl md:text-lg">Online</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 gap-2 border-t-0 md:border-t-0">
                <div className="flex items-center gap-2 mb-1">
                  <Server className="text-primary w-5 h-5" />
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-mono uppercase tracking-wider">Uptime</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-xl md:text-lg font-mono">99.98%</div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 gap-2 border-l-0 md:border-l border-t md:border-t-0">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-mono uppercase tracking-wider">Network</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-xl md:text-lg font-mono">Secured</div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 gap-2 border-t md:border-t-0">
                <div className="flex items-center gap-2 mb-1">
                  <Wifi className="text-primary w-5 h-5" />
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-mono uppercase tracking-wider">Latency</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-xl md:text-lg font-mono">12ms</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;