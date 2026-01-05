
import React, { useState, useEffect } from 'react';
import { EXPERT_DATA } from '../types';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[120] flex flex-col items-center justify-center p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-500">
      <div className="w-full max-w-sm text-center">
        {/* Animated Hero Profile */}
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-6 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-28 h-28 rounded-full border-2 border-accent p-1.5 overflow-hidden bg-black shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <img 
              src={EXPERT_DATA.mainPhoto} 
              alt="Dra Suelen" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <h2 className="text-accent text-3xl font-serif font-bold mb-2 tracking-wide animate-pulse">
          Analisando...
        </h2>
        <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-black mb-12">
          Inteligência Borelli em ação
        </p>

        {/* Premium Gold Progress Bar Container */}
        <div className="relative w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out shadow-[0_0_25px_rgba(212,175,55,0.8)] relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer Effect specific to the gold bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center px-1">
          <span className="text-[9px] text-stone-400 font-black uppercase tracking-[0.2em]">Status do Processamento</span>
          <span className="text-sm font-mono text-accent font-bold">{Math.floor(progress)}%</span>
        </div>

        {/* Dynamic Status Text */}
        <div className="mt-14 h-8 overflow-hidden">
            <div className="text-accent/70 text-[11px] uppercase font-black tracking-[0.15em] italic">
                {progress < 30 && <p className="animate-in slide-in-from-bottom duration-700">Mapeando traços faciais...</p>}
                {progress >= 30 && progress < 60 && <p className="animate-in slide-in-from-bottom duration-700">Cruzando dados com o Método Borelli...</p>}
                {progress >= 60 && progress < 90 && <p className="animate-in slide-in-from-bottom duration-700">Personalizando protocolo de naturalidade...</p>}
                {progress >= 90 && <p className="animate-in slide-in-from-bottom duration-700">Perfil ideal identificado!</p>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
