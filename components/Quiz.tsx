
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_DATA, QuizResponse } from '../types.ts';

interface QuizProps {
  onFinish: (responses: QuizResponse[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);

  const handleOptionSelect = (option: string) => {
    const newResponses = [
      ...responses,
      { question: QUIZ_QUESTIONS[currentStep].text, answer: option }
    ];
    setResponses(newResponses);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newResponses);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 animate-in fade-in duration-500 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={EXPERT_DATA.mainPhoto} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-stone-50 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col border border-white/20">
        <div className="bg-white px-6 py-5 flex items-center justify-between border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="relative">
                <div className="absolute -inset-1.5 bg-accent/30 rounded-full animate-pulse"></div>
                <div className="relative w-14 h-14 rounded-full border-2 border-accent overflow-hidden shadow-xl bg-stone-100">
                    <img src={EXPERT_DATA.mainPhoto} alt="Hero" className="w-full h-full object-cover object-top" />
                </div>
            </div>
            <div>
              <h2 className="text-stone-900 font-black text-base leading-none uppercase tracking-tighter">Dra. {EXPERT_DATA.name}</h2>
              <p className="text-[10px] text-accent font-black mt-1.5 uppercase tracking-[0.2em]">Avaliação de Perfil</p>
            </div>
          </div>
          <button 
            onClick={onCancel} 
            className="bg-stone-100 text-stone-400 hover:text-stone-900 w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90"
          >
            ✕
          </button>
        </div>

        <div className="w-full h-2 bg-stone-200">
          <div 
            className="h-full bg-accent transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-7 md:p-10 flex-1 bg-gradient-to-b from-white to-stone-50/50">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 bg-stone-100 rounded-full text-[9px] text-stone-500 font-black uppercase tracking-widest border border-stone-200">
                  Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs font-black text-accent">{Math.round(progress)}%</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 leading-tight">
              {QUIZ_QUESTIONS[currentStep].text}
            </h3>
          </div>

          <div className="space-y-4">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full py-5 px-6 text-left bg-white border-2 border-stone-100 rounded-2xl text-stone-700 font-bold hover:border-accent hover:text-accent hover:bg-accent/5 transition-all shadow-sm active:scale-[0.98] text-base flex justify-between items-center group"
              >
                <span className="pr-4">{option}</span>
                <span className="bg-stone-50 group-hover:bg-accent group-hover:text-black w-8 h-8 rounded-full flex items-center justify-center text-stone-300 transition-all">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-8 py-5 bg-stone-100/80 text-center border-t border-stone-200/50 backdrop-blur-sm">
            <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-black">
              Segurança • Naturalidade • Dra. Borelli
            </p>
        </div>
      </div>

      <button 
        onClick={onCancel}
        className="mt-8 py-4 px-10 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-xs font-black rounded-full uppercase tracking-[0.3em] hover:bg-white/15 transition-all active:scale-95 shadow-2xl"
      >
        Fechar e Acessar Site
      </button>
    </div>
  );
};

export default Quiz;
