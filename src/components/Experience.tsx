import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Técnico de Mantenimiento de Electricidad, Redes y Telecom.",
      company: ">_ Empresa: \"SEYS\" S.R.L. (Banco Piano) | Loc: Buenos Aires",
      period: "06/2003 - 03/2026",
      description: "Responsable del mantenimiento integral de telecomunicaciones en sucursales de toda la provincia y CABA. Gestión de enlaces de red y configuración de centrales telefónicas. Mantenimiento eléctrico completo de edificios: desde tableros principales y maniobras con fusibles NH hasta instalaciones internas. Instalación de cableado estructurado, armado de racks y soporte IT.",
      tags: ["Redes", "Telefonía IP", "CCTV", "Automatización", "Hardware"]
    },
    {
      title: "Técnico de Mantenimiento Electromecánico",
      company: ">_ Empresa: Parque de la República SRL | Loc: La Plata",
      period: "2010 - 2017",
      description: "Armado de tableros industriales con contactores y relevos térmicos. Automatización y control de accesos. Mantenimiento electrónico de juegos: reparación de pulsadores, plaquetas y sistemas de control. Soporte técnico de microinformática y reparación de PCs.",
      tags: ["Tableros Industriales", "Variadores", "Electricidad", "Control de Acceso"]
    },
    {
      title: "Técnico de Producción y Configuración",
      company: ">_ Empresa: DIEBOLD DPB | Loc: San Cristobal",
      period: "10/1998 - 01/2001",
      description: "Armado integral de cajeros automáticos: ensamblado de fuentes, placas, monitores y módulos. Carga de software mediante clonación de imágenes y configuración final según requerimientos del cliente (Red Link / Banelco). Control de calidad en línea de producción.",
      tags: ["Cajeros Automáticos", "Producción", "Logística"]
    },
    {
      title: "Mantenimiento General",
      company: ">_ Empresa: Hotel Sheraton | Loc: Retiro",
      period: "10/1997 - 05/1998",
      description: "Pasantía. Mantenimiento preventivo de instalaciones eléctricas y plomería básica en el edificio. Mantenimiento integral de piscinas y asistencia en limpieza general técnica.",
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