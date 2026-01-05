
import React, { useState, useEffect } from 'react';
import { AppState, QuizResponse, EXPERT_DATA } from './types.ts';
import ChoiceScreen from './components/ChoiceScreen.tsx';
import Quiz from './components/Quiz.tsx';
import ResultPage from './components/ResultPage.tsx';
import LandingPage from './components/LandingPage.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppState>('CHOICE');
  const [quizResponses, setQuizResponses] = useState<QuizResponse[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleFinishQuiz = (responses: QuizResponse[]) => {
    setQuizResponses(responses);
    setCurrentView('LOADING');
    
    setTimeout(() => {
      setCurrentView('RESULT');
    }, 3000);
  };

  const generateWhatsAppLink = (includeQuiz: boolean = false) => {
    const phoneNumber = EXPERT_DATA.phoneNumber;
    let message = "Olá Dra. Suelen, vim através do seu site e gostaria de agendar uma consulta.";
    
    if (includeQuiz && quizResponses.length > 0) {
      message = "Olá Dra. Suelen! Acabei de completar minha avaliação no site.\n\nMinhas respostas:\n";
      quizResponses.forEach(r => {
        message += `*${r.question}*: ${r.answer}\n`;
      });
      message += "\nFiquei com o perfil compatível e gostaria de agendar minha consulta.";
    }

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  const whatsappLink = generateWhatsAppLink(false);
  const quizWhatsappLink = generateWhatsAppLink(true);

  return (
    <div className="min-h-screen relative font-sans antialiased bg-black">
      {/* Base Layer */}
      {(currentView === 'LANDING' || currentView === 'QUIZ' || currentView === 'LOADING' || currentView === 'RESULT') && (
        <LandingPage whatsappLink={whatsappLink} />
      )}

      {/* Overlays */}
      {currentView === 'CHOICE' && (
        <ChoiceScreen 
          onGoDirect={() => setCurrentView('LANDING')} 
          onStartQuiz={() => setCurrentView('QUIZ')} 
        />
      )}

      {currentView === 'QUIZ' && (
        <Quiz 
          onFinish={handleFinishQuiz} 
          onCancel={() => setCurrentView('LANDING')}
        />
      )}

      {currentView === 'LOADING' && (
        <LoadingScreen />
      )}

      {currentView === 'RESULT' && (
        <ResultPage 
          whatsappLink={quizWhatsappLink}
          simpleWhatsappLink={whatsappLink}
          onContinue={() => setCurrentView('LANDING')}
        />
      )}
    </div>
  );
};

export default App;
