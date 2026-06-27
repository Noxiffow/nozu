'use client';

import { useState } from 'react';

// ──── TRANSLATIONS ─────────────────────────────────────
const t = {
  en: {
    title: 'Does your business need a website?',
    subtitle: '7 questions. 2 minutes. No sign-up.',
    badge: '⏱️ 2 min',
    counter: (n: number) => `${n} / 7`,
    footer: `NozuTech · No data is stored · ${new Date().getFullYear()}`,
    reset: 'Take the test again',
    tiers: {
      blindado: {
        emoji: '🟢',
        label: "You're covered",
        summary: "You control your digital presence. Let's optimize what's already working.",
        cta: 'Want to take it to the next level?',
      },
      grietas: {
        emoji: '🟡',
        label: 'You have blind spots',
        summary: 'There are gaps in your digital presence. A proper website would close several fronts.',
        cta: 'Want to talk about closing those gaps?',
      },
      alquilas: {
        emoji: '🔴',
        label: "You're renting your business",
        summary: "You depend on platforms you don't control. You need your own website NOW.",
        cta: "Let's talk. This has a solution.",
      },
    },
    areas: [
      { key: 'dependency', label: 'Dependency' },
      { key: 'visibility', label: 'Visibility' },
      { key: 'conversion', label: 'Conversion' },
    ],
    recommendations: {
      dependency: "Your biggest risk is depending on third-party platforms. A website gives you full control over your digital presence — no algorithms deciding for you.",
      visibility: "Your weak point is visibility outside social media. With a website + local SEO + optimized Google Business Profile, people find you without depending on algorithms.",
      conversion: "Your ability to convert online is limited. A website with clear calls to action, contact forms, and integrated WhatsApp multiplies your sales opportunities.",
      balanced: 'Your three areas are balanced, but all have room to grow. A professional website strengthens all three pillars at once.',
    },
    waText: "Hi Jotadev, I saw the scorecard and I'd like to talk about my diagnosis",
    questions: [
      {
        text: '1. Do you have a website?',
        options: [
          { text: 'Yes, and I control it myself', points: { dependency: 3 } },
          { text: "Yes, but I can't edit it", points: { dependency: 1 } },
          { text: "No website", points: { dependency: 0 } },
        ],
      },
      {
        text: '2. If Instagram/TikTok went down tomorrow, what happens to your business?',
        options: [
          { text: 'Nothing, I have other channels', points: { dependency: 3 } },
          { text: "It'd be a problem but I have alternatives", points: { dependency: 1 } },
          { text: 'I lose my business', points: { dependency: 0 } },
        ],
      },
      {
        text: '3. Do you have a Google Business Profile?',
        options: [
          { text: 'Yes, and it\'s optimized', points: { visibility: 3 } },
          { text: "Yes, but I've abandoned it", points: { visibility: 1 } },
          { text: "No, what's that?", points: { visibility: 0 } },
        ],
      },
      {
        text: '4. How many online reviews does your business have?',
        options: [
          { text: 'More than 20', points: { visibility: 3 } },
          { text: 'Between 5 and 20', points: { visibility: 1 } },
          { text: 'Fewer than 5 or none', points: { visibility: 0 } },
        ],
      },
      {
        text: '5. Can you reach your customers without social media?',
        options: [
          { text: 'Yes, I have email/phone/WhatsApp for most of them', points: { conversion: 3 } },
          { text: 'Some yes, but I lose most of them', points: { conversion: 1 } },
          { text: 'No, only through social DMs', points: { conversion: 0 } },
        ],
      },
      {
        text: '6. Do you sell directly online?',
        options: [
          { text: 'Yes, on my own website', points: { conversion: 3 } },
          { text: 'Yes, but only via WhatsApp/DM', points: { conversion: 1 } },
          { text: "I don't sell online", points: { conversion: 0 } },
        ],
      },
      {
        text: '7. Who controls your digital presence design?',
        options: [
          { text: 'Me or my team directly', points: { dependency: 3 } },
          { text: 'A third party who takes forever to respond', points: { dependency: 1 } },
          { text: 'The algorithm', points: { dependency: 0 } },
        ],
      },
    ],
  },
  es: {
    title: '¿Necesita tu negocio una web?',
    subtitle: '7 preguntas. 2 minutos. Sin registros.',
    badge: '⏱️ 2 min',
    counter: (n: number) => `${n} / 7`,
    footer: `NozuTech · Esto no guarda tus datos · ${new Date().getFullYear()}`,
    reset: 'Volver a hacer el test',
    tiers: {
      blindado: {
        emoji: '🟢',
        label: 'Estás blindado',
        summary: 'Tienes el control de tu presencia digital. Optimicemos lo que ya funciona.',
        cta: '¿Quieres llevarlo al siguiente nivel?',
      },
      grietas: {
        emoji: '🟡',
        label: 'Tienes puntos ciegos',
        summary: 'Hay grietas en tu presencia digital. Una web propia cerraría varios frentes.',
        cta: '¿Hablamos de cómo tapar esas grietas?',
      },
      alquilas: {
        emoji: '🔴',
        label: 'Alquilas tu negocio',
        summary: 'Dependes de plataformas que no controlas. Necesitas web propia YA.',
        cta: 'Hablemos. Esto tiene solución.',
      },
    },
    areas: [
      { key: 'dependency', label: 'Dependencia' },
      { key: 'visibility', label: 'Visibilidad' },
      { key: 'conversion', label: 'Conversión' },
    ],
    recommendations: {
      dependency: 'Tu mayor riesgo es la dependencia de plataformas de terceros. Una web propia te da control total sobre tu presencia digital, sin algoritmos que decidan por ti.',
      visibility: 'Tu punto débil es la visibilidad fuera de redes sociales. Con una web + SEO local + Google My Business optimizado, te encuentran sin depender de algoritmos.',
      conversion: 'Tu capacidad de convertir online es limitada. Una web con llamadas a la acción claras, formularios y WhatsApp integrado multiplica tus oportunidades de venta.',
      balanced: 'Tus tres áreas están equilibradas, pero con margen de mejora en todas. Una web profesional refuerza los tres pilares a la vez.',
    },
    waText: 'Hola Jotadev, vi la scorecard y quiero hablar de mi diagnóstico',
    questions: [
      {
        text: '1. ¿Tienes página web?',
        options: [
          { text: 'Sí y la controlo yo', points: { dependency: 3 } },
          { text: 'Sí pero no puedo editarla', points: { dependency: 1 } },
          { text: 'No tengo web', points: { dependency: 0 } },
        ],
      },
      {
        text: '2. Si mañana cae Instagram/TikTok, ¿qué pasa con tu negocio?',
        options: [
          { text: 'Nada, tengo otros canales', points: { dependency: 3 } },
          { text: 'Sería un problema pero tengo alternativas', points: { dependency: 1 } },
          { text: 'Me quedo sin negocio', points: { dependency: 0 } },
        ],
      },
      {
        text: '3. ¿Tienes Google My Business (Perfil de Empresa)?',
        options: [
          { text: 'Sí, y lo tengo optimizado', points: { visibility: 3 } },
          { text: 'Sí, pero lo tengo abandonado', points: { visibility: 1 } },
          { text: 'No, ¿eso qué es?', points: { visibility: 0 } },
        ],
      },
      {
        text: '4. ¿Cuántas reseñas online tiene tu negocio?',
        options: [
          { text: 'Más de 20', points: { visibility: 3 } },
          { text: 'Entre 5 y 20', points: { visibility: 1 } },
          { text: 'Menos de 5 o ninguna', points: { visibility: 0 } },
        ],
      },
      {
        text: '5. ¿Puedes contactar a tus clientes sin redes sociales?',
        options: [
          { text: 'Sí, tengo email/teléfono/WhatsApp de casi todos', points: { conversion: 3 } },
          { text: 'A algunos sí, pero pierdo a la mayoría', points: { conversion: 1 } },
          { text: 'No, solo por MD de redes', points: { conversion: 0 } },
        ],
      },
      {
        text: '6. ¿Vendes directamente online?',
        options: [
          { text: 'Sí, en mi propia web', points: { conversion: 3 } },
          { text: 'Sí, pero solo por WhatsApp/MD', points: { conversion: 1 } },
          { text: 'No vendo online', points: { conversion: 0 } },
        ],
      },
      {
        text: '7. ¿Quién controla el diseño de tu presencia digital?',
        options: [
          { text: 'Yo o mi equipo directamente', points: { dependency: 3 } },
          { text: 'Un tercero que tarda en responder', points: { dependency: 1 } },
          { text: 'El algoritmo', points: { dependency: 0 } },
        ],
      },
    ],
  },
} as const;

type Lang = 'en' | 'es';
type Scores = { dependency: number; visibility: number; conversion: number };

// ──── HELPERS ──────────────────────────────────────────
function getTier(total: number) {
  if (total >= 15) return 'blindado' as const;
  if (total >= 8) return 'grietas' as const;
  return 'alquilas' as const;
}

function getRecommendationKey(scores: Scores): keyof typeof t['en']['recommendations'] {
  const entries = Object.entries(scores) as [keyof Scores, number][];
  const max = entries.reduce((a, b) => (a[1] >= b[1] ? a : b));
  const min = entries.reduce((a, b) => (a[1] <= b[1] ? a : b));
  if (scores[max[0]] - scores[min[0]] <= 1) return 'balanced';
  return min[0] as keyof typeof t['en']['recommendations'];
}

function areaPercentage(score: number): number {
  return Math.min(100, Math.round((score / 9) * 100));
}

// ──── COMPONENT ────────────────────────────────────────
export default function ScorecardPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(7).fill(-1));
  const [scores, setScores] = useState<Scores>({ dependency: 0, visibility: 0, conversion: 0 });
  const [showResult, setShowResult] = useState(false);

  const tx = t[lang];
  const questions = tx.questions;

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);

    const pts = questions[currentStep].options[optionIndex].points as Partial<Scores>;
    const newScores = { ...scores };
    if (pts.dependency) newScores.dependency += pts.dependency;
    if (pts.visibility) newScores.visibility += pts.visibility;
    if (pts.conversion) newScores.conversion += pts.conversion;
    setScores(newScores);

    if (currentStep < 6) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 400);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers(new Array(7).fill(-1));
    setScores({ dependency: 0, visibility: 0, conversion: 0 });
    setShowResult(false);
  };

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const tierKey = getTier(total);
  const tier = tx.tiers[tierKey];
  const recKey = getRecommendationKey(scores);
  const recommendation = tx.recommendations[recKey];
  const waUrl = `https://wa.me/34604923459?text=${encodeURIComponent(tx.waText)}`;

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5] font-sans flex justify-center items-start px-4 py-8">
      <div className="max-w-[640px] w-full mx-auto my-8 bg-[#0d0d0d] rounded-3xl p-8 max-sm:p-6">

        {/* Lang toggle */}
        <div className="flex justify-end mb-4">
          <div className="flex bg-[#1a1a1a] border border-[#2a2a2a] rounded-full overflow-hidden text-sm font-mono">
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); reset(); }}
                className={`px-3 py-1 transition-colors ${lang === l ? 'bg-[#f97316] text-[#0d0d0d] font-semibold' : 'text-[#a0a0a0] hover:text-[#e5e5e5]'}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="font-mono text-3xl leading-tight font-medium text-[#e5e5e5] mb-2">
            {tx.title}
          </h1>
          <p className="text-[#a0a0a0] mb-4">{tx.subtitle}</p>
          <span className="inline-block bg-[#1a1a1a] text-[#f97316] font-mono text-sm px-3 py-1 rounded-full border border-[#2a2a2a]">
            {tx.badge}
          </span>
        </header>

        {/* Progress Bar */}
        {!showResult && (
          <div className="flex gap-1 mb-8">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-1 rounded transition-colors duration-300 ${
                  i <= currentStep && answers[i] >= 0 ? 'bg-[#f97316]' : 'bg-[#1a1a1a]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Questions */}
        {!showResult && (
          <div className="min-h-[300px]">
            <h2 className="text-xl font-semibold mb-6">{questions[currentStep].text}</h2>
            <div className="flex flex-col gap-3">
              {questions[currentStep].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`bg-[#1a1a1a] border ${
                    answers[currentStep] === i ? 'border-[#f97316] bg-[#242424]' : 'border-[#2a2a2a]'
                  } text-[#e5e5e5] p-4 rounded-2xl text-left cursor-pointer transition-all hover:bg-[#242424] hover:border-[#f97316] min-h-[48px] flex items-center`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
            <p className="text-[#a0a0a0] text-sm mt-6 text-center">{tx.counter(currentStep + 1)}</p>
          </div>
        )}

        {/* Results */}
        {showResult && (
          <div>
            <div className="flex items-center gap-3 text-2xl font-semibold mb-3">
              <span className="text-3xl">{tier.emoji}</span>
              <span>{tier.label}</span>
            </div>
            <p className="text-[#a0a0a0] italic mb-6">{tier.summary}</p>

            {/* Score Bars */}
            <div className="my-6 space-y-4">
              {tx.areas.map(({ key, label }) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-[110px] font-mono text-sm text-[#a0a0a0]">{label}</span>
                  <div className="flex-1 h-2 bg-[#1a1a1a] rounded overflow-hidden">
                    <div
                      className="h-full bg-[#f97316] rounded transition-all duration-700 ease-out"
                      style={{ width: `${areaPercentage(scores[key as keyof Scores])}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="my-6 p-4 bg-[#1a1a1a] rounded-2xl border-l-4 border-[#f97316] text-sm leading-relaxed">
              {recommendation}
            </div>

            {/* CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#f97316] text-[#0d0d0d] py-3 px-8 rounded-2xl font-semibold text-center text-lg hover:opacity-90 transition-opacity w-full mt-2"
            >
              {tier.cta} →
            </a>

            {/* Reset */}
            <button
              onClick={reset}
              className="w-full bg-transparent border border-[#2a2a2a] text-[#a0a0a0] py-3 px-6 rounded-2xl mt-4 cursor-pointer hover:bg-[#1a1a1a] transition-colors text-sm"
            >
              {tx.reset}
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-[#a0a0a0] text-xs opacity-70">
          <p>{tx.footer}</p>
        </footer>
      </div>
    </main>
  );
}
