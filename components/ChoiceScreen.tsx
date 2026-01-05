
import React from 'react';
import { EXPERT_DATA } from '../types';

interface ChoiceScreenProps {
  onGoDirect: () => void;
  onStartQuiz: () => void;
}

const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ onGoDirect, onStartQuiz }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* Premium Background with Expert Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={EXPERT_DATA.mainPhoto} 
          alt="Dra. Suelen Borelli Background" 
          className="w-full h-full object-cover object-top scale-105"
        />
        {/* Multilayer Gradient Overlay for Luxury Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Expert Badge */}
        <div className="mb-6 inline-block">
          <div className="px-4 py-1.5 border border-accent/40 rounded-full bg-black/40 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
              Experiência de Luxo
            </span>
          </div>
        </div>

        {/* Small Floating Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full border-2 border-accent p-1 bg-black/20 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-float">
            <img 
              src={EXPERT_DATA.mainPhoto} 
              alt={EXPERT_DATA.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight leading-tight">
          Sua beleza merece uma <span className="text-highlight italic">avaliação exclusiva.</span>
        </h1>
        
        <p className="text-stone-300 mb-10 text-lg font-light leading-relaxed">
          Descubra o caminho para a naturalidade absoluta com a <span className="text-white font-medium">Dra. Suelen Borelli</span>.
        </p>

        <div className="space-y-5">
          <button 
            onClick={onStartQuiz}
            className="group relative w-full py-5 px-8 bg-highlight text-black font-black rounded-2xl text-xl shadow-[0_20px_40px_rgba(255,215,0,0.3)] hover:scale-[1.03] transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            <span>INICIAR AVALIAÇÃO AGORA</span>
            <span className="text-2xl">✨</span>
          </button>
          
          <button 
            onClick={onGoDirect}
            className="w-full py-4 px-8 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-xs uppercase tracking-[0.2em]"
          >
            Pular para o site completo
          </button>
        </div>

        {/* Signature Footer */}
        <div className="mt-12 flex flex-col items-center opacity-80">
          <p className="font-signature text-4xl text-accent mb-1">
            {EXPERT_DATA.name}
          </p>
          <div className="h-0.5 w-8 bg-accent/40 rounded-full"></div>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default ChoiceScreen;
