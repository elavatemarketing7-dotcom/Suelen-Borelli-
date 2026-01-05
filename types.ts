
export interface Question {
  id: number;
  text: string;
  options: string[];
}

export type AppState = 'CHOICE' | 'QUIZ' | 'LOADING' | 'RESULT' | 'LANDING';

export interface QuizResponse {
  question: string;
  answer: string;
}

export const EXPERT_DATA = {
  name: "Suelen Borelli",
  profession: "Biomédica",
  phoneNumber: "5516992215011",
  whatsapp: "https://wa.me/5516992215011",
  instagram: "https://www.instagram.com/drasuelenborelli/",
  mainPhoto: "https://i.imgur.com/A7tdA3y.png",
  secondaryPhotos: [
    "https://i.imgur.com/Ni1GAKl.png",
    "https://i.imgur.com/R6jw0JL.png"
  ],
  resultsGallery: [
    "https://i.imgur.com/1icisGb.png",
    "https://i.imgur.com/ofbhKtV.png",
    "https://i.imgur.com/bqXIjsU.png",
    "https://i.imgur.com/xl8SFKH.png",
    "https://i.imgur.com/uiXgFEP.png",
    "https://i.imgur.com/CHApc4x.png",
    "https://i.imgur.com/OrzqMJq.png",
    "https://i.imgur.com/vbu3Q5C.png",
    "https://i.imgur.com/kzXVrw2.png",
    "https://i.imgur.com/QYzWb01.png",
    "https://i.imgur.com/BOa3d5v.png",
    "https://i.imgur.com/ZOfr2iK.png",
    "https://i.imgur.com/gG5S8hy.png",
    "https://i.imgur.com/rw7Ae7p.png",
    "https://i.imgur.com/mKBpWb0.png",
    "https://i.imgur.com/JtFwTdI.png",
    "https://i.imgur.com/zv6DtZ2.png",
    "https://i.imgur.com/QCFN1GS.png",
    "https://i.imgur.com/NlJZor5.png",
    "https://i.imgur.com/mwoaerV.png",
    "https://i.imgur.com/p6kPH1i.png"
  ],
  lifestylePhotos: [
    "https://i.imgur.com/E84C9d5.png",
    "https://i.imgur.com/EP3GWTX.png",
    "https://i.imgur.com/oCGnz75.png",
    "https://i.imgur.com/6eU3H3U.png",
    "https://i.imgur.com/yDRxy6W.png",
    "https://i.imgur.com/MwwJsSO.png"
  ]
};

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Qual é o seu principal desejo estético hoje?",
    options: ["Rejuvenescimento", "Correção de assimetrias", "Harmonização Facial", "Qualidade da pele"]
  },
  {
    id: 2,
    text: "O que você mais preza em um procedimento?",
    options: ["Naturalidade absoluta", "Resultado marcante", "Segurança máxima", "Rapidez na recuperação"]
  },
  {
    id: 3,
    text: "Você já realizou algum procedimento injetável antes?",
    options: ["Sim, já realizo sempre", "Sim, mas faz tempo", "Não, seria minha primeira vez", "Tenho receio, mas quero muito"]
  },
  {
    id: 4,
    text: "Qual sua faixa etária?",
    options: ["Menos de 25 anos", "25 a 35 anos", "36 a 45 anos", "Mais de 45 anos"]
  }
];
