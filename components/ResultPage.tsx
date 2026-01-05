
import React from 'react';
import { EXPERT_DATA } from '../types';

interface ResultPageProps {
  whatsappLink: string;
  simpleWhatsappLink: string;
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ whatsappLink, simpleWhatsappLink, onContinue }) => {
  return (
    <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in zoom-in duration-500">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 flex flex-col">
        
        {/* Compact Hero Header */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={EXPERT_DATA.mainPhoto} 
            alt={EXPERT_DATA.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
             <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-accent/20">
                <span className="text-[9px] font-bold text-accent uppercase tracking-widest">Resultado da Avaliação</span>
             </div>
          </div>
        </div>

        <div className="px-6 pb-8 pt-2 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-highlight text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-lg border border-white/50 animate-pulse">
            Perfil Compatível • Você é a Paciente ideal
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 leading-tight">
            Temos o match perfeito!
          </h2>
          
          <p className="text-sm md:text-base text-stone-500 mb-6 leading-relaxed font-medium">
            Com base nas suas respostas, o Método da <span className="text-primary font-bold">Dra. {EXPERT_DATA.name}</span> consegue entregar exatamente a <span className="text-accent italic font-bold">naturalidade</span> que você procura.
          </p>

          <div className="space-y-3">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-5 bg-accent text-black font-black rounded-2xl shadow-xl hover:scale-105 transition-all text-sm md:text-base uppercase tracking-tighter"
            >
              <span>ENVIAR MINHA AVALIAÇÃO À DRA</span>
              <span className="text-xl">➔</span>
            </a>

            <a 
              href={simpleWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-stone-600 font-bold rounded-2xl border-2 border-stone-100 bg-stone-50 hover:bg-stone-100 transition-all text-xs uppercase tracking-widest"
            >
              CHAMAR NO WHATSAPP SEM COMPROMISSO
            </a>
            
            <button 
              onClick={onContinue}
              className="block w-full py-2 text-stone-400 font-bold hover:text-stone-600 transition-all text-[10px] uppercase tracking-widest"
            >
              NÃO ENVIAR E CONTINUAR NO SITE
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">
        Exclusividade Borelli Estética Avançada
      </p>
    </div>
  );
};

export default ResultPage;
