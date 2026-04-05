import { Cpu, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skills = {
    "Redes y Telecom.": ["Configuración de Routers y Switches administrados", "Telefonía IP", "Cableado Estructurado", "Racks de comunicaciones"],
    "Sistemas y Hardware": ["LINUX y Windows (XP, 7, 10, 11)", "Microinformática", "Armado de PC y reparación", "Sistemas CCTV"],
    "Electromecánica": ["Tableros Industriales", "Variadores de frecuencia", "Contactores y Relevos", "Electricidad de Planta"]
  };

  return (
    <section id="skills" className="flex flex-col items-start justify-center py-16 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 border-b border-primary/20 pb-4 flex items-center gap-3">
          <Cpu className="text-primary w-8 h-8" /> Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full mt-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col bg-white dark:bg-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-6">
                {category}
              </h3>
              <ul className="flex flex-col gap-4">
                {items.map(skill => (
                  <li key={skill} className="flex items-start text-slate-700 dark:text-slate-300 text-base">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-3 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;