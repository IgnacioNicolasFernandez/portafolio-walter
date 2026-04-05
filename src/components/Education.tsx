import { GraduationCap } from 'lucide-react';

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
    <section id="education" className="py-20 px-4 w-full flex flex-col items-center justify-center relative transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
          <GraduationCap className="text-primary dark:text-primary" /> Formación Académica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
             <div key={index} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 transition-all shadow-lg dark:shadow-none">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{edu.title}</h3>
                <span className="inline-block text-xs font-medium px-2 py-1 mb-3 rounded bg-slate-200 dark:bg-slate-800/30 text-primary-dark dark:text-primary border border-slate-300 dark:border-primary/20">
                   {edu.institution}
                </span>
                {edu.description && <p className="text-slate-600 dark:text-slate-300 text-sm">{edu.description}</p>}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
