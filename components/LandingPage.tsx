
import React, { useState } from 'react';
import { EXPERT_DATA } from '../types';

interface LandingPageProps {
  whatsappLink: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ whatsappLink }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-stone-900 overflow-x-hidden text-stone-100">
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-end bg-black pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
            <img 
                src={EXPERT_DATA.mainPhoto} 
                alt="Expert Hero" 
                className="w-full h-full object-cover object-top opacity-70"
                loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl text-center pb-24">
          <span className="inline-block px-4 py-1 border border-accent/50 rounded-full text-[10px] uppercase tracking-[0.3em] text-accent mb-6 bg-black/50 backdrop-blur-md">
            Biomédica Esteta de Alta Performance
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Olá, eu sou a <span className="text-highlight italic block mt-2">Dra. Suelen Borelli</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
             Especialista em realçar sua beleza com <span className="font-semibold text-highlight">naturalidade absoluta</span>, respeitando cada traço que te faz única.
          </p>
          
          <div className="space-y-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-md py-6 px-10 bg-accent text-black font-bold rounded-2xl text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all active:scale-95 text-center"
              >
                AGENDAR CONSULTA NO WHATSAPP
              </a>
              <p className="text-stone-400 text-sm tracking-wide">Avaliação exclusiva e sem compromisso</p>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-black border-y border-white/5">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
                <div className="relative group">
                    <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/30 rounded-3xl group-hover:border-accent transition-colors duration-500"></div>
                    <img 
                        src={EXPERT_DATA.secondaryPhotos[0]} 
                        alt="Sobre Dra Suelen" 
                        className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                        loading="lazy"
                    />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-2">
                  <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">A Expert</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Ciência, Arte e Sensibilidade.</h2>
                </div>
                <p className="text-stone-400 leading-relaxed text-xl font-light">
                    Mais do que procedimentos estéticos, eu busco a harmonia que eleva a autoestima. Sou <span className="text-highlight font-medium">Biomédica de formação</span> e apaixonada por transformar vidas através de um olhar atento e cuidadoso.
                </p>
                <div className="grid grid-cols-1 gap-6">
                    {[
                        "Atendimento Individualizado e Exclusivo",
                        "Foco em Naturalidade e Segurança",
                        "Técnicas Modernas e Alta Tecnologia",
                        "Acompanhamento Pós-Procedimento Humanizado"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-accent text-black rounded-full font-bold text-sm">✓</span>
                            <span className="text-stone-200 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* RESULTADOS REAIS */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Resultados que Inspiram</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">Transformações reais baseadas em planejamento estratégico e técnicas de alta performance.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-7xl mx-auto">
            {EXPERT_DATA.resultsGallery.map((img, idx) => (
                <div 
                    key={idx} 
                    className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-accent/20 transition-all cursor-pointer group bg-stone-900 border border-white/5"
                    onClick={() => setSelectedImage(img)}
                >
                    <img 
                        src={img} 
                        alt={`Resultado ${idx}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
        <p className="text-center mt-12 text-sm text-stone-500 italic font-light">
          *Os resultados exibidos são individuais e variam conforme o biotipo de cada paciente.
        </p>
      </section>

      {/* MAIS PROVAS - ESTILO BASTIDORES */}
      <section className="py-24 bg-zinc-950 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center mb-16">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Bastidores</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Minha Rotina & Especialidade</h2>
            <p className="text-stone-400 text-lg">A excelência está no cuidado com cada detalhe.</p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar px-4">
            {EXPERT_DATA.lifestylePhotos.map((img, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[450px] h-[600px] rounded-3xl overflow-hidden snap-center shadow-2xl border border-white/5 bg-zinc-900 group">
                    <img src={img} alt="Bastidores" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" loading="lazy" />
                </div>
            ))}
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Avaliação Honesta", desc: "Não indico o que você não precisa. Minha prioridade é sua saúde e harmonia." },
                { title: "Atendimento Comigo", desc: "Do início ao fim, você será atendida diretamente por mim, sem intermediários." },
                { title: "Total Clareza", desc: "Explico cada detalhe do processo, produtos utilizados e expectativas de resultados." },
                { title: "Ambiente Premium", desc: "Espaço pensado para seu conforto, privacidade e relaxamento total." },
                { title: "Pós-Venda Ativo", desc: "Suporte contínuo após o procedimento para garantir sua melhor recuperação." },
                { title: "Atualização Constante", desc: "Participação frequente em congressos e cursos internacionais." }
            ].map((card, i) => (
                <div key={i} className="p-10 bg-zinc-900/50 rounded-[2.5rem] shadow-sm border border-white/5 hover:border-accent/30 transition-all duration-500 group">
                    <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center mb-8 text-accent font-bold text-2xl group-hover:bg-accent group-hover:text-black transition-all">0{i+1}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-stone-400 leading-relaxed text-lg font-light">{card.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA INTERMEDIARIO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-800 to-black rounded-[4rem] p-16 text-center text-white relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 blur-[100px]"></div>
            <h2 className="text-4xl font-serif font-bold mb-8 italic">Ainda tem dúvidas se o procedimento é para você?</h2>
            <p className="text-stone-400 mb-12 max-w-xl mx-auto text-xl font-light">Não se preocupe. Uma conversa franca via WhatsApp pode esclarecer todas as suas inseguranças.</p>
            <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-6 px-12 bg-highlight text-black font-bold rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.2)] hover:scale-105 transition-all text-center"
            >
                TIRAR DÚVIDAS NO WHATSAPP
            </a>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-20 text-center">Jornada da sua Nova Versão</h2>
        <div className="space-y-16">
            {[
                { step: "01", title: "Contato Inicial", desc: "Clique no botão e fale diretamente com minha equipe para agendar sua avaliação personalizada." },
                { step: "02", title: "A Avaliação", desc: "Um momento de escuta ativa onde analisaremos suas queixas, desejos e anatomia facial detalhadamente." },
                { step: "03", title: "O Procedimento", desc: "Realizado com calma, técnicas de conforto premium e os melhores produtos do mercado mundial." }
            ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-white/10 pb-16 last:border-0 group">
                    <span className="text-7xl md:text-9xl font-serif font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500 leading-none">{item.step}</span>
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                        <p className="text-stone-400 leading-relaxed text-xl font-light">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-12 flex justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-accent p-1.5 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-black">
                    <img src={EXPERT_DATA.mainPhoto} alt="Expert Profile" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Sua beleza é <span className="text-accent italic">singular.</span> <br/>
              Vamos realçá-la?
            </h2>
            <p className="text-xl md:text-2xl text-stone-400 mb-14 leading-relaxed font-light">Agende agora sua consulta e descubra o poder de uma harmonização natural e elegante.</p>
            <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-lg py-7 bg-highlight text-black font-bold rounded-[2rem] text-2xl shadow-[0_20px_60px_rgba(255,215,0,0.3)] hover:scale-105 transition-all active:scale-95 text-center"
            >
                QUERO MINHA AVALIAÇÃO AGORA
            </a>
            <p className="mt-8 text-stone-500 font-medium tracking-wide">Agenda exclusiva Dra. Suelen Borelli</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
            <div className="space-y-4">
                <h3 className="font-signature text-5xl text-accent mb-2">{EXPERT_DATA.name}</h3>
                <div className="h-0.5 w-12 bg-accent/30 mx-auto"></div>
                <p className="text-stone-500 uppercase tracking-[0.4em] text-xs font-bold">Biomédica de 💚</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-accent font-medium text-lg transition-colors border-b border-white/5 pb-1">Instagram</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-accent font-medium text-lg transition-colors border-b border-white/5 pb-1">WhatsApp</a>
            </div>
            <div className="space-y-2">
              <p className="text-stone-500 text-sm font-light">© 2024 • Todos os direitos reservados</p>
              <p className="text-stone-600 text-[10px] uppercase tracking-widest">Araraquara • São Paulo • Brasil</p>
            </div>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl transition-colors">✕</button>
            <img 
                src={selectedImage} 
                alt="Enlarged result" 
                className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10" 
            />
        </div>
      )}
    </main>
  );
};

export default LandingPage;
