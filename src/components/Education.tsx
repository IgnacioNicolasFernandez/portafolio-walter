import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "Técnico Electromecánico",
      institution: "Colegio EMET N°5 D.E. Politécnica Manuel Belgrano",
      description: ""
    },
    {
      title: "Especializaciones y Postgrado",
      institution: "Centro de Formación Profesional N°3",
      description: "Cursos certificados en: Electricista de Planta y Reparación de Ascensores."
    }
  ];

  return (
    <section id="education" className="flex flex-col items-start justify-center py-16 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 border-b border-primary/20 pb-4 flex items-center gap-3">
          <GraduationCap className="text-primary w-8 h-8" /> Formación Académica
        </h2>

        <div className="flex flex-col w-full mt-4 gap-6">
          {educationData.map((edu, index) => (
             <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl shadow-sm hover:border-primary/50 transition-all">
                
                <div className="md:w-64 shrink-0 text-primary font-bold text-base flex justify-start items-center gap-2">
                   <Award className="w-5 h-5 shrink-0" />
                   <span>{edu.institution}</span>
                </div>
                
                <div className="flex flex-col flex-1 border-l-0 md:border-l-2 md:border-slate-200 dark:md:border-white/10 md:pl-8">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{edu.title}</h3>
                  {edu.description && <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{edu.description}</p>}
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
