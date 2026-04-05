import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Soporte Técnico IT e Infraestructura",
      company: "\"SEYS\" S.R.L. (Terciarizado en Banco Piano)",
      period: "06/2003 - 03/2026",
      description: "Mantenimiento y soporte técnico de informática. Redes y cableado estructurado de Cámaras IP y analógicas. Telecomunicaciones y armado de Racks. Vinculaciones, testeo y reparación de redes. Telefonía IP y programación analógica. Electricidad, automatización y variadores de frecuencia.",
      tags: ["Redes", "Telefonía IP", "CCTV", "Automatización", "Hardware"]
    },
    {
      title: "Técnico Electromecánico",
      company: "Parque de la República SRL",
      period: "2010 - 2017",
      description: "Armado de tableros con contactores y relevo térmico. Implementación de variadores de frecuencia y configuración estrella-triángulo. Mantenimiento eléctrico general, cámaras, sistema de facturación magnéticas (cash), alarmas y control de acceso.",
      tags: ["Tableros Industriales", "Variadores", "Electricidad", "Control de Acceso"]
    },
    {
      title: "Técnico de Mantenimiento y Producción",
      company: "DIEBOLD DPB",
      period: "10/1998 - 01/2001",
      description: "Mantenimiento y armado de cajeros automáticos. Tareas operativas de Producción y Logística.",
      tags: ["Cajeros Automáticos", "Producción", "Logística"]
    },
    {
      title: "Mantenimiento General",
      company: "Hotel Sheraton",
      period: "10/1997 - 05/1998",
      description: "Pasantía laboral. Tareas de Mantenimiento General de las instalaciones y mantenimiento específico a piscinas.",
      tags: ["Mantenimiento"]
    }
  ];

  return (
    <section id="experience" className="flex flex-col items-start justify-center py-16 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 border-b border-primary/20 pb-4 flex items-center gap-3">
          <Briefcase className="text-primary w-8 h-8" /> Experiencia Laboral
        </h2>

        <div className="flex flex-col w-full mt-4 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              
              <div className="md:w-48 shrink-0 flex items-start gap-2 text-primary font-bold text-base md:text-sm mt-1">
                <Calendar className="w-5 h-5 shrink-0" />
                {exp.period}
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl md:text-2xl mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4 font-medium">
                  <Building2 className="w-4 h-4 text-primary" />
                  {exp.company}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-base mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;