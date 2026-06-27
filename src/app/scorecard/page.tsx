'use client';

import { useState } from 'react';

// ──── DATA ────────────────────────────────────────────
const questions = [
  {
    text: '1. ¿Tienes página web?',
    options: [
      { text: 'Sí y la controlo yo', points: { dependencia: 3 } },
      { text: 'Sí pero no puedo editarla', points: { dependencia: 1 } },
      { text: 'No tengo web', points: { dependencia: 0 } }
    ]
  },
  {
    text: '2. Si mañana cae Instagram/TikTok, ¿qué pasa con tu negocio?',
    options: [
      { text: 'Nada, tengo otros canales', points: { dependencia: 3 } },
      { text: 'Sería un problema pero tengo alternativas', points: { dependencia: 1 } },
      { text: 'Me quedo sin negocio', points: { dependencia: 0 } }
    ]
  },
  {
    text: '3. ¿Tienes Google My Business (Perfil de Empresa)?',
    options: [
      { text: 'Sí, y lo tengo optimizado', points: { visibilidad: 3 } },
      { text: 'Sí, pero lo tengo abandonado', points: { visibilidad: 1 } },
      { text: 'No, ¿eso qué es?', points: { visibilidad: 0 } }
    ]
  },
  {
    text: '4. ¿Cuántas reseñas online tiene tu negocio?',
    options: [
      { text: 'Más de 20', points: { visibilidad: 3 } },
      { text: 'Entre 5 y 20', points: { visibilidad: 1 } },
      { text: 'Menos de 5 o ninguna', points: { visibilidad: 0 } }
    ]
  },
  {
    text: '5. ¿Puedes contactar a tus clientes sin redes sociales?',
    options: [
      { text: 'Sí, tengo email/teléfono/WhatsApp de casi todos', points: { conversion: 3 } },
      { text: 'A algunos sí, pero pierdo a la mayoría', points: { conversion: 1 } },
      { text: 'No, solo por MD de redes', points: { conversion: 0 } }
    ]
  },
  {
    text: '6. ¿Vendes directamente online?',
    options: [
      { text: 'Sí, en mi propia web', points: { conversion: 3 } },
      { text: 'Sí, pero solo por WhatsApp/MD', points: { conversion: 1 } },
      { text: 'No vendo online', points: { conversion: 0 } }
    ]
  },
  {
    text: '7. ¿Quién controla el diseño de tu presencia digital?',
    options: [
      { text: 'Yo o mi equipo directamente', points: { dependencia: 3 } },
      { text: 'Un tercero que tarda en responder', points: { dependencia: 1 } },
      { text: 'El algoritmo', points: { dependencia: 0 } }
    ]
  }
];

// ──── RESULT TIERS ─────────────────────────────────────
const RESULT_TIERS = {
  blindado: {
    min: 15,
    max: 21,
    emoji: '🟢',
    label: 'Estás blindado',
    summary: 'Tienes el control de tu presencia digital. Optimicemos lo que ya funciona.',
    cta: '¿Quieres llevarlo al siguiente nivel?'
  },
  grietas: {
    min: 8,
    max: 14,
    emoji: '🟡',
    label: 'Tienes puntos ciegos',
    summary: 'Hay grietas en tu presencia digital. Una web propia cerraría varios frentes.',
    cta: '¿Hablamos de cómo tapar esas grietas?'
  },
  alquilas: {
    min: 0,
    max: 7,
    emoji: '🔴',
    label: 'Alquilas tu negocio',
    summary: 'Dependes de plataformas que no controlas. Necesitas web propia YA.',
    cta: 'Hablemos. Esto tiene solución.'
  }
};

// ──── HELPERS ──────────────────────────────────────────
function getTier(total: number) {
  if (total >= 15) return RESULT_TIERS.blindado;
  if (total >= 8) return RESULT_TIERS.grietas;
  return RESULT_TIERS.alquilas;
}

function getPersonalizedRecommendation(scores: { dependencia: number; visibilidad: number; conversion: number }) {
  const maxArea = Object.entries(scores).reduce((a, b) => (a[1] >= b[1] ? a : b));
  const minArea = Object.entries(scores).reduce((a, b) => (a[1] <= b[1] ? a : b));

  const recommendations: Record<string, string> = {
    dependencia: 'Tu mayor riesgo es la dependencia de plataformas de terceros. Una web propia te da control total sobre tu presencia digital, sin algoritmos que decidan por ti.',
    visibilidad: 'Tu punto débil es la visibilidad fuera de redes sociales. Con una web + SEO local + Google My Business optimizado, te encuentran sin depender de algoritmos.',
    conversion: 'Tu capacidad de convertir online es limitada. Una web con llamadas a la acción claras, formularios y WhatsApp integrado multiplica tus oportunidades de venta.'
  };

  if (scores[maxArea[0] as keyof typeof scores] - scores[minArea[0] as keyof typeof scores] <= 1) {
    return 'Tus tres áreas están equilibradas, pero con margen de mejora en todas. Una web profesional refuerza los tres pilares a la vez.';
  }

  return recommendations[minArea[0]] || recommendations.dependencia;
}

function areaPercentage(score: number): number {
  const maxPerArea = 9;
  return Math.min(100, Math.round((score / maxPerArea) * 100));
}

// ──── COMPONENT ────────────────────────────────────────
export default function ScorecardPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(7).fill(-1));
  const [scores, setScores] = useState({ dependencia: 0, visibilidad: 0, conversion: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);

    const question = questions[currentStep];
    const selectedOption = question.options[optionIndex];
    const newScores = { ...scores };
    const pts = selectedOption.points as Record<string, number>;
    if (pts.dependencia) newScores.dependencia += pts.dependencia;
    if (pts.visibilidad) newScores.visibilidad += pts.visibilidad;
    if (pts.conversion) newScores.conversion += pts.conversion;
    setScores(newScores);

    if (currentStep < 6) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 400);
    }
  };

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const tier = getTier(total);
  const recommendation = getPersonalizedRecommendation(scores);

  const reset = () => {
    setCurrentStep(0);
    setAnswers(new Array(7).fill(-1));
    setScores({ dependencia: 0, visibilidad: 0, conversion: 0 });
    setShowResult(false);
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5] font-sans flex justify-center items-start px-4 py-8">
      <div className="max-w-[640px] w-full mx-auto my-8 bg-[#0d0d0d] rounded-3xl p-8 max-sm:p-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="font-mono text-3xl leading-tight font-medium text-[#e5e5e5] mb-2">
            ¿Necesita tu negocio una web?
          </h1>
          <p className="text-[#a0a0a0] mb-4">7 preguntas. 2 minutos. Sin registros.</p>
          <span className="inline-block bg-[#1a1a1a] text-[#f97316] font-mono text-sm px-3 py-1 rounded-full border border-[#2a2a2a]">
            ⏱️ 2 min
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
          <div className="min-h-[300px] transition-opacity duration-300">
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
            <p className="text-[#a0a0a0] text-sm mt-6 text-center">
              {currentStep + 1} / 7
            </p>
          </div>
        )}

        {/* Results */}
        {showResult && (
          <div className="transition-opacity duration-500">
            <div className="flex items-center gap-3 text-2xl font-semibold mb-3">
              <span className="text-3xl">{tier.emoji}</span>
              <span>{tier.label}</span>
            </div>
            <p className="text-[#a0a0a0] italic mb-6">{tier.summary}</p>

            {/* Score Bars */}
            <div className="my-6 space-y-4">
              {[
                { key: 'dependencia', label: 'Dependencia' },
                { key: 'visibilidad', label: 'Visibilidad' },
                { key: 'conversion', label: 'Conversión' }
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-[110px] font-mono text-sm text-[#a0a0a0]">{label}</span>
                  <div className="flex-1 h-2 bg-[#1a1a1a] rounded overflow-hidden">
                    <div
                      className="h-full bg-[#f97316] rounded transition-all duration-700 ease-out"
                      style={{ width: `${areaPercentage(scores[key as keyof typeof scores])}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Personalized Recommendation */}
            <div className="my-6 p-4 bg-[#1a1a1a] rounded-2xl border-l-4 border-[#f97316] text-sm leading-relaxed">
              {recommendation}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/34604923459?text=Hola%20Jotadev%2C%20vi%20la%20scorecard%20y%20quiero%20hablar%20de%20mi%20diagn%C3%B3stico"
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
              Volver a hacer el test
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-[#a0a0a0] text-xs opacity-70">
          <p>NozuTech · Esto no guarda tus datos · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}
