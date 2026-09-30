import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, RotateCcw, Dices, Compass } from 'lucide-react';
import { QUIZ_QUESTIONS, calculateQuizResult } from '../data/quizData';
import { RACES_DATA, CLASSES_DATA } from '../data/namesData';
import { QuizResult, RaceId, Language } from '../types';
import { playClickSound, playFanfareSound, playTabSound } from '../utils/soundEffects';

interface PersonalityQuizProps {
  onSelectRaceForName: (raceId: RaceId) => void;
  language: Language;
}

export const PersonalityQuiz: React.FC<PersonalityQuizProps> = ({ onSelectRaceForName, language }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const isEs = language === 'es';
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const isLastQuestion = currentStep === totalQuestions - 1;
  const currentAnswer = selectedAnswers[currentQuestion?.id];

  const handleSelectOption = (optionId: string) => {
    playClickSound();
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!currentAnswer) return;
    playTabSound();

    if (isLastQuestion) {
      setIsCalculating(true);
      setTimeout(() => {
        const optionIds = Object.values(selectedAnswers);
        const calculated = calculateQuizResult(optionIds, language);
        setResult(calculated);
        setIsCalculating(false);
        playFanfareSound();
      }, 450);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      playTabSound();
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    playClickSound();
    setCurrentStep(0);
    setSelectedAnswers({});
    setResult(null);
  };

  const handleGenerateNameForArchetype = () => {
    if (!result) return;
    playClickSound();
    onSelectRaceForName(result.primaryRace);
  };

  return (
    <div className="space-y-4">
      {/* Calculating State */}
      {isCalculating && (
        <div className="text-center py-12 space-y-3">
          <Compass className="w-8 h-8 text-[#ffd100] mx-auto animate-spin" />
          <div className="font-cinzel text-base text-[#ffd100]">
            {isEs ? 'Calculando afinidad de clase y linaje...' : 'Calculating class and lineage affinity...'}
          </div>
        </div>
      )}

      {/* Result Dossier State */}
      {!isCalculating && result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="space-y-4"
        >
          {(() => {
            const raceInfo = RACES_DATA[result.primaryRace];
            const classInfo = CLASSES_DATA[result.primaryClass];
            const isHorde = result.faction === 'horde';

            return (
              <div className="space-y-4">
                {/* Character Header */}
                <div className="p-3 bg-[#0d0a07] border border-[#302417] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#ffd100] font-cinzel font-bold">
                        {isEs ? 'Afinidad:' : 'Affinity:'} {result.matchScore}%
                      </span>
                      <span aria-hidden="true" className="text-[#574735]">·</span>
                      <span className={`font-cinzel font-bold ${isHorde ? 'text-[#fca5a5]' : 'text-[#93c5fd]'}`}>
                        {isHorde ? (isEs ? 'Horda' : 'Horde') : (isEs ? 'Alianza' : 'Alliance')}
                      </span>
                      <span aria-hidden="true" className="text-[#574735]">·</span>
                      <span className="text-[#8f7e6a]">
                        {isEs ? raceInfo.capital : raceInfo.capitalEn}
                      </span>
                    </div>

                    <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#ffffff] tracking-wide">
                      {isEs ? result.archetypeTitle : result.archetypeTitleEn}
                    </h2>

                    <div className="font-cinzel text-xs font-bold" style={{ color: classInfo.color }}>
                      {isEs ? classInfo.name : classInfo.nameEn} {isEs ? raceInfo.name : raceInfo.nameEn}
                    </div>
                  </div>

                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-[2px] border border-[#5c4626] bg-[#14100b] flex items-center justify-center text-2xl flex-shrink-0">
                    {raceInfo.iconSymbol}
                  </div>
                </div>

                {/* Lore RP Hook */}
                <div className="p-3 bg-[#0d0a07] border border-[#2e2316] rounded-[2px] space-y-1 text-xs">
                  <div className="font-cinzel text-[#ffd100] font-bold">
                    {isEs ? 'Trasfondo Rolero Sugerido:' : 'Suggested Roleplay Hook:'}
                  </div>
                  <p className="text-[#d1c2ab] leading-relaxed italic">
                    «{isEs ? result.roleplayHook : result.roleplayHookEn}»
                  </p>
                </div>

                {/* Specs and Virtues in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Recommended Specs */}
                  <div className="p-3 bg-[#0d0a07] border border-[#2e2316] rounded-[2px] space-y-2">
                    <div className="font-cinzel text-[#ffd100] font-bold">
                      {isEs ? 'Especializaciones de Clase' : 'Recommended Specs'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(isEs ? result.recommendedSpecs : result.recommendedSpecsEn).map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#14100b] border border-[#3b2d1d] text-[#e0d3bc] rounded-[2px] font-cinzel font-semibold text-[11px]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#8c7b67] pt-1">
                      {isEs ? raceInfo.namingPhilosophy : raceInfo.namingPhilosophyEn}
                    </p>
                  </div>

                  {/* Virtues & Flaws */}
                  <div className="p-3 bg-[#0d0a07] border border-[#2e2316] rounded-[2px] space-y-2">
                    <div className="font-cinzel text-[#ffd100] font-bold">
                      {isEs ? 'Virtudes y Conflictos' : 'Virtues & Conflicts'}
                    </div>
                    <ul className="space-y-1 text-[11px] text-[#cfc0a9]">
                      {(isEs ? result.virtues : result.virtuesEn).map((v, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#86efac] font-bold">✓</span>
                          <span>{v}</span>
                        </li>
                      ))}
                      {(isEs ? result.vulnerabilities : result.vulnerabilitiesEn).slice(0, 1).map((vul, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[#fca5a5]">
                          <span className="font-bold">⚠</span>
                          <span>{vul}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#291e14]">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="wow-btn px-4 py-1.5 text-xs rounded-[2px] flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Repetir Test' : 'Restart Test'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleGenerateNameForArchetype}
                    className="wow-btn wow-btn-gold px-6 py-2 text-xs font-bold rounded-[2px] flex items-center gap-2"
                  >
                    <Dices className="w-3.5 h-3.5 text-[#ffd100]" />
                    <span>
                      {isEs
                        ? `Forjar Nombre para ${raceInfo.name}`
                        : `Forge Name for ${raceInfo.nameEn}`}
                    </span>
                  </button>
                </div>
              </div>
            );
          })()}
        </motion.div>
      )}

      {/* Active Question Wizard View */}
      {!isCalculating && !result && currentQuestion && (
        <div className="space-y-3">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-[#877866] pb-2 border-b border-[#291e14]">
            <span className="font-cinzel font-bold text-[#ffd100]">
              {isEs
                ? `Paso ${currentStep + 1} de ${totalQuestions}: ${currentQuestion.category}`
                : `Step ${currentStep + 1} of ${totalQuestions}: ${currentQuestion.categoryEn}`}
            </span>
            <div className="flex gap-1">
              {QUIZ_QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-1 rounded-[1px] transition-colors ${
                    i === currentStep
                      ? 'bg-[#ffd100]'
                      : i < currentStep
                      ? 'bg-[#6b522b]'
                      : 'bg-[#291e13]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#f5ecd8]">
              {isEs ? currentQuestion.title : currentQuestion.titleEn}
            </h3>
            <p className="text-xs text-[#b8a78e]">
              {isEs ? currentQuestion.prompt : currentQuestion.promptEn}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-1.5">
            {currentQuestion.options.map((opt) => {
              const isSelected = currentAnswer === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full text-left p-2.5 rounded-[2px] border transition-colors flex items-start gap-2.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#211910] border-[#ffd100] text-[#ffd100]'
                      : 'bg-[#0d0a07] border-[#291e13] hover:border-[#523d24] text-[#cfc0a9]'
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-[2px] border mt-0.5 flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                      isSelected ? 'border-[#ffd100] bg-[#ffd100] text-[#0d0a07]' : 'border-[#4a3924]'
                    }`}
                  >
                    {isSelected ? '✓' : ''}
                  </div>

                  <div className="space-y-0.5">
                    <div className="font-cinzel text-xs font-bold leading-snug">
                      {isEs ? opt.text : opt.textEn}
                    </div>
                    <div className="text-[11px] text-[#8a7a67] leading-relaxed font-sans">
                      {isEs ? opt.flavor : opt.flavorEn}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2 border-t border-[#291e14]">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`wow-btn px-3 py-1 text-xs rounded-[2px] flex items-center gap-1 font-semibold ${
                currentStep === 0 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
            >
              <ArrowLeft className="w-3 h-3" />
              <span>{isEs ? 'Anterior' : 'Back'}</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!currentAnswer}
              className={`wow-btn px-5 py-1.5 text-xs font-bold rounded-[2px] flex items-center gap-1.5 ${
                currentAnswer ? 'wow-btn-gold' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <span>{isLastQuestion ? (isEs ? 'Ver Arquetipo' : 'See Archetype') : (isEs ? 'Siguiente' : 'Next')}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
