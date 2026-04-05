import { Briefcase, Calendar } from 'lucide-react';

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
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
          <Briefcase className="text-primary dark:text-primary" /> Experiencia
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                <Briefcase size={16} className="text-primary dark:text-primary" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 transition-all shadow-lg dark:shadow-none">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">{exp.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-slate-200 dark:bg-slate-800/30 text-primary-dark dark:text-primary border border-slate-300 dark:border-primary/20">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  {exp.period}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                      #{tag}
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