import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Bookmark, BookmarkCheck, Dices, SlidersHorizontal, Sparkles, Wand2, Shield, Swords } from 'lucide-react';
import { RaceId, Faction, Gender, Tone, GeneratedName, Language, ClassId } from '../types';
import { RACES_DATA, CLASSES_DATA, RACE_NAME_POOLS, generateFantasyName, getRaceAllowedClasses } from '../data/namesData';
import { FactionRaceBanners } from './FactionRaceBanners';
import { generateNamesWithAI } from '../utils/aiNameGenerator';
import { playClickSound, playDiceRollSound } from '../utils/soundEffects';

interface NameGeneratorProps {
  onSaveCharacter: (char: GeneratedName) => void;
  savedIds: Set<string>;
  initialRace?: RaceId;
  language: Language;
}

export const NameGenerator: React.FC<NameGeneratorProps> = ({
  onSaveCharacter,
  savedIds,
  initialRace = 'human',
  language,
}) => {
  const [selectedRace, setSelectedRace] = useState<RaceId>(initialRace);
  const [selectedFaction, setSelectedFaction] = useState<Faction>(() => {
    return RACES_DATA[initialRace]?.faction === 'horde' ? 'horde' : 'alliance';
  });
  const [selectedGender, setSelectedGender] = useState<Gender>('male');
  const [selectedClass, setSelectedClass] = useState<ClassId | 'all'>('all');
  const [selectedTone, setSelectedTone] = useState<Tone>('all');
  const [useAi, setUseAi] = useState<boolean>(true);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [isAiGenerated, setIsAiGenerated] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Advanced customizer
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);
  const [customPrefix, setCustomPrefix] = useState<string>('');
  const [customSuffix, setCustomSuffix] = useState<string>('');

  // Initial generated item
  const [generatedList, setGeneratedList] = useState<GeneratedName[]>(() => {
    return [generateFantasyName(initialRace, 'male', 'all', undefined, undefined, language, 'alliance')];
  });

  // Re-generate current list when language changes
  useEffect(() => {
    const targetClass = selectedClass === 'all' ? undefined : selectedClass;
    const fresh = generateFantasyName(
      selectedRace,
      selectedGender,
      selectedTone,
      customPrefix.trim() || undefined,
      customSuffix.trim() || undefined,
      language,
      selectedFaction,
      targetClass
    );
    setGeneratedList([fresh]);
  }, [language]);

  const handleSelectClass = (cId: ClassId | 'all') => {
    playClickSound();
    const nextClass = selectedClass === cId ? 'all' : cId;
    setSelectedClass(nextClass);

    const targetClass = nextClass === 'all' ? undefined : nextClass;
    const newChar = generateFantasyName(
      selectedRace,
      selectedGender,
      selectedTone,
      customPrefix.trim() || undefined,
      customSuffix.trim() || undefined,
      language,
      selectedFaction,
      targetClass
    );
    setGeneratedList([newChar]);
    setIsAiGenerated(false);
  };

  const handleSelectRace = (race: RaceId, faction?: Faction) => {
    const resolvedFaction = faction || (RACES_DATA[race].faction === 'horde' ? 'horde' : 'alliance');
    setSelectedRace(race);
    setSelectedFaction(resolvedFaction);

    const newAllowedClasses = getRaceAllowedClasses(race, resolvedFaction);
    let nextClass = selectedClass;
    if (selectedClass !== 'all' && !newAllowedClasses.includes(selectedClass)) {
      nextClass = 'all';
      setSelectedClass('all');
    }

    const newChar = generateFantasyName(
      race,
      selectedGender,
      selectedTone,
      customPrefix.trim() || undefined,
      customSuffix.trim() || undefined,
      language,
      resolvedFaction,
      nextClass === 'all' ? undefined : nextClass
    );
    setGeneratedList([newChar]);
    setIsAiGenerated(false);
  };

  // Sync selectedRace if initialRace prop changes (from Oracle or Encyclopedia tabs)
  useEffect(() => {
    if (initialRace) {
      handleSelectRace(initialRace);
    }
  }, [initialRace]);

  const handleRoll = async () => {
    playDiceRollSound();
    setIsRolling(true);

    const targetClass = selectedClass === 'all' ? undefined : selectedClass;

    if (useAi) {
      const res = await generateNamesWithAI(
        selectedRace,
        selectedFaction,
        selectedGender,
        selectedTone,
        customPrefix.trim() || undefined,
        customSuffix.trim() || undefined,
        language,
        1,
        targetClass
      );
      setGeneratedList(res.names);
      setIsAiGenerated(res.isAi);
      setIsRolling(false);
    } else {
      setTimeout(() => {
        const result = generateFantasyName(
          selectedRace,
          selectedGender,
          selectedTone,
          customPrefix.trim() || undefined,
          customSuffix.trim() || undefined,
          language,
          selectedFaction,
          targetClass
        );
        setGeneratedList([result]);
        setIsAiGenerated(false);
        setIsRolling(false);
      }, 150);
    }
  };

  const handleCopy = (text: string, id: string) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1600);
  };

  const handleSave = (char: GeneratedName) => {
    playClickSound();
    onSaveCharacter(char);
  };

  const currentRaceInfo = RACES_DATA[selectedRace];
  const currentPool = RACE_NAME_POOLS[selectedRace];
  const isHorde = selectedFaction === 'horde';
  const isEs = language === 'es';

  const prefixes = isEs ? currentPool.surnamePrefixesEs : currentPool.surnamePrefixesEn;
  const suffixes = isEs ? currentPool.surnameSuffixesEs : currentPool.surnameSuffixesEn;

  // Allowed classes for this specific race and faction alignment
  const allowedClasses = getRaceAllowedClasses(selectedRace, selectedFaction);

  // Key combination checker based on user specification
  const isKeyNewCombo = (clsId: ClassId) => {
    if (selectedRace === 'dwarf' && clsId === 'shaman') return true; // Chamán enano
    if (selectedRace === 'gnome' && clsId === 'priest') return true; // Sacerdote gnomo
    if (selectedRace === 'human' && clsId === 'hunter') return true; // Cazador humano
    if (selectedRace === 'undead' && clsId === 'paladin') return true; // Paladín no-muerto
    if (selectedRace === 'troll' && clsId === 'warlock') return true; // Brujo trol
    if (selectedRace === 'orc' && clsId === 'mage') return true; // Mago orco
    if (selectedRace === 'skyborn' && selectedFaction === 'alliance' && clsId === 'mage') return true; // Skyborne Mago
    if (selectedRace === 'skyborn' && selectedFaction === 'horde' && clsId === 'shaman') return true; // Skyborne Chamán
    return false;
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 items-start">
      {/* Left Column: Authentic WoW Character Creation Faction Banners */}
      <div className="w-full md:w-auto flex justify-center flex-shrink-0">
        <FactionRaceBanners
          selectedRace={selectedRace}
          selectedFaction={selectedFaction}
          onSelectRace={handleSelectRace}
          language={language}
        />
      </div>

      {/* Right Column: Clean Customization & Results Panel */}
      <div className="flex-1 w-full space-y-3.5">
        {/* Selected Race Summary Header */}
        <div className="p-3 bg-[#0f0c08] border border-[#2b2014] rounded-[2px] space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs">
                <span className={`font-cinzel font-bold ${isHorde ? 'text-[#fca5a5]' : 'text-[#93c5fd]'}`}>
                  {isHorde ? (isEs ? '⚔️ HORDA' : '⚔️ HORDE') : (isEs ? '🦁 ALIANZA' : '🦁 ALLIANCE')}
                </span>
                <span aria-hidden="true" className="text-[#574735]">·</span>
                <span className="text-[#a69680]">
                  {isEs ? 'Capital:' : 'Capital:'} {isEs ? currentRaceInfo.capital : currentRaceInfo.capitalEn}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#ffffff] tracking-wide">
                  {isEs ? currentRaceInfo.name : currentRaceInfo.nameEn}
                  {selectedRace === 'skyborn' && (
                    <span className="text-xs font-normal text-[#93c5fd] ml-2">
                      ({isHorde ? (isEs ? 'Horda' : 'Horde') : (isEs ? 'Alianza' : 'Alliance')})
                    </span>
                  )}
                </h2>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1">
              <span className="text-[11px] text-[#8c7b67] block">{isEs ? 'Líder:' : 'Leader:'}</span>
              <span className="font-cinzel text-xs font-semibold text-[#ffd100]">{currentRaceInfo.leader}</span>
            </div>
          </div>

          {/* Allowed Classes Selectable Buttons with Key New Combos */}
          <div className="pt-2 border-t border-[#241a10]">
            <div className="text-[10px] font-cinzel font-semibold text-[#8f7e6a] uppercase mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#ffd100]" />
                <span className="text-[#e5d8c3]">{isEs ? 'Seleccionar Clase del Personaje:' : 'Select Character Class:'}</span>
              </span>
              <span className="text-[#ffd100] text-[9px] flex items-center gap-1 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd100]" />
                {isEs ? '★ Nueva combinación clave' : '★ Key new combo'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {/* Button to allow any/random class */}
              <button
                type="button"
                aria-pressed={selectedClass === 'all'}
                onClick={() => handleSelectClass('all')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-[2px] text-[11px] font-cinzel font-bold border cursor-pointer transition-all active:scale-95 ${
                  selectedClass === 'all'
                    ? 'border-[#ffd100] bg-gradient-to-r from-[#3b2a12] to-[#241a0d] text-[#ffd100] shadow-[0_0_8px_rgba(255,209,0,0.5)] ring-1 ring-[#ffd100]'
                    : 'border-[#2e2316] bg-[#14100b] text-[#a69680] hover:border-[#ffd100]/60 hover:text-white'
                }`}
                title={isEs ? 'Generar nombre para cualquier clase permitida' : 'Generate name for any allowed class'}
              >
                <span>🎲</span>
                <span>{isEs ? 'Cualquiera' : 'Any Class'}</span>
                {selectedClass === 'all' && <span className="text-[10px] text-[#ffd100]">✓</span>}
              </button>

              {/* Selectable Class Buttons */}
              {allowedClasses.map((cId) => {
                const cls = CLASSES_DATA[cId];
                const isKey = isKeyNewCombo(cId);
                const isSelected = selectedClass === cId;
                return (
                  <button
                    key={cId}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleSelectClass(cId)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] text-[11px] font-cinzel font-bold border cursor-pointer transition-all active:scale-95 ${
                      isSelected
                        ? 'border-[#ffd100] bg-gradient-to-r from-[#422e11] to-[#241708] text-[#ffd100] shadow-[0_0_12px_rgba(255,209,0,0.6)] ring-2 ring-[#ffd100] scale-105'
                        : isKey
                        ? 'border-[#c69b3d]/60 bg-[#1a130a] text-[#f5d78e] hover:border-[#ffd100] hover:bg-[#261c10] hover:text-[#ffd100]'
                        : 'border-[#2e2316] bg-[#14100b] text-[#d6c7b2] hover:border-[#ffd100]/70 hover:bg-[#1c160f] hover:text-white'
                    }`}
                    title={
                      isKey
                        ? (isEs ? `★ Nueva combinación clave de WoW Forever: ${cls.name}` : `★ Key new combo in WoW Forever: ${cls.nameEn}`)
                        : (isEs ? `Seleccionar clase: ${cls.name}` : `Select class: ${cls.nameEn}`)
                    }
                  >
                    <span>{cls.icon}</span>
                    <span style={{ color: isSelected ? '#ffd100' : isKey ? '#fde047' : cls.color }}>
                      {isEs ? cls.name : cls.nameEn}
                    </span>
                    {isSelected && <span className="text-[10px] text-[#ffd100] font-bold">✓</span>}
                    {isKey && !isSelected && <span className="text-[9px] text-[#ffd100]">★</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Customization Options Bar: Gender and Tone only */}
        <div className="p-3 bg-[#0f0c08] border border-[#2b2014] rounded-[2px] text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Gender */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <span className="text-[#9e8d78] font-cinzel font-semibold whitespace-nowrap">
                {isEs ? 'Género:' : 'Gender:'}
              </span>
              <div className="flex gap-1.5">
                {(['male', 'female', 'neutral'] as Gender[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setSelectedGender(g);
                    }}
                    className={`px-3 py-1 rounded-[2px] border text-[11px] font-cinzel font-semibold cursor-pointer transition-colors ${
                      selectedGender === g
                        ? 'bg-[#291f13] border-[#ffd100] text-[#ffd100] shadow-[0_0_6px_rgba(255,209,0,0.3)]'
                        : 'bg-[#14100b] border-[#291e12] text-[#8c7b67] hover:text-[#e5d8c3]'
                    }`}
                  >
                    {isEs
                      ? g === 'male' ? 'Masc' : g === 'female' ? 'Fem' : 'Neutro'
                      : g === 'male' ? 'Male' : g === 'female' ? 'Fem' : 'Any'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-[#9e8d78] font-cinzel font-semibold whitespace-nowrap">
                {isEs ? 'Tono:' : 'Tone:'}
              </span>
              <select
                value={selectedTone}
                onChange={(e) => {
                  playClickSound();
                  setSelectedTone(e.target.value as Tone);
                }}
                className="bg-[#14100b] border border-[#291e12] text-[11px] text-[#e0cfbc] font-cinzel font-medium rounded-[2px] px-3 py-1 outline-none focus:border-[#ffd100] cursor-pointer"
              >
                <option value="all">{isEs ? 'Equilibrado' : 'Balanced'}</option>
                <option value="heroic">{isEs ? 'Épico / Noble' : 'Heroic / Noble'}</option>
                <option value="dark">{isEs ? 'Sombrío / Tétrico' : 'Dark / Grim'}</option>
                <option value="ancestral">{isEs ? 'Tribal / Ancestral' : 'Tribal / Ancestral'}</option>
                <option value="arcane">{isEs ? 'Arcano / Erudito' : 'Arcane / Scholar'}</option>
                <option value="wild">{isEs ? 'Salvaje / Naturaleza' : 'Wild / Nature'}</option>
                <option value="eccentric">{isEs ? 'Ingenioso (Gnomo)' : 'Whimsical (Gnome)'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* AI & Customizer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* AI Toggle Button */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setUseAi(!useAi);
            }}
            className={`px-2.5 py-1 rounded-[2px] border text-[11px] font-cinzel font-bold flex items-center gap-1.5 transition-all ${
              useAi
                ? 'bg-gradient-to-r from-[#2b1f11] to-[#1a140d] border-[#ffd100] text-[#ffd100] shadow-[0_0_8px_rgba(255,209,0,0.25)]'
                : 'bg-[#14100b] border-[#382b1d] text-[#8f7e6a] hover:text-[#d6c7b2]'
            }`}
            title={isEs ? 'Genera mediante IA Gemini con fallback automático al generador local' : 'Generate with Gemini AI with automatic fallback to local engine'}
          >
            <Sparkles className={`w-3.5 h-3.5 ${useAi ? 'text-[#ffd100] animate-pulse' : 'text-[#8f7e6a]'}`} />
            <span>
              {useAi
                ? (isEs ? 'IA Gemini: Forja Activa' : 'Gemini AI: Forge Active')
                : (isEs ? 'Forja Canónica (Local)' : 'Canonical Forge (Local)')}
            </span>
          </button>

          {/* Customizer Toggle */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setShowCustomizer(!showCustomizer);
            }}
            className="text-[11px] text-[#c69b3d] hover:text-[#ffd100] font-cinzel font-semibold flex items-center gap-1 transition-colors"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>
              {showCustomizer
                ? isEs ? 'Ocultar Prefijo/Sufijo' : 'Hide Custom Prefix'
                : isEs ? 'Forja Manual: Prefijo y Sufijo' : 'Manual Forge: Custom Affixes'}
            </span>
          </button>
        </div>

        {/* Customizer Drawer */}
        {showCustomizer && (
          <div className="p-2 bg-[#0d0a07] border border-[#261c11] rounded-[2px] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[10px] text-[#8f7e6a] font-cinzel block mb-0.5">{isEs ? 'Prefijo de Apellido' : 'Surname Prefix'}</span>
              <input
                type="text"
                placeholder={`Ej: ${prefixes[0]}...`}
                value={customPrefix}
                onChange={(e) => setCustomPrefix(e.target.value)}
                className="w-full bg-[#14100b] border border-[#332619] rounded-[2px] px-2 py-1 text-xs text-[#ded1bc] outline-none focus:border-[#ffd100]"
              />
            </div>
            <div>
              <span className="text-[10px] text-[#8f7e6a] font-cinzel block mb-0.5">{isEs ? 'Sufijo de Apellido' : 'Surname Suffix'}</span>
              <input
                type="text"
                placeholder={`Ej: ${suffixes[0]}...`}
                value={customSuffix}
                onChange={(e) => setCustomSuffix(e.target.value)}
                className="w-full bg-[#14100b] border border-[#332619] rounded-[2px] px-2 py-1 text-xs text-[#ded1bc] outline-none focus:border-[#ffd100]"
              />
            </div>
          </div>
        )}

        {/* Primary Action Button (Blizzard In-Game Style) */}
        <div className="flex justify-center pt-1">
          <button
            type="button"
            onClick={handleRoll}
            disabled={isRolling}
            className="wow-btn wow-btn-gold px-8 py-2.5 rounded-[2px] text-xs sm:text-sm font-bold tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Dices className={`w-4 h-4 text-[#ffd100] ${isRolling ? 'animate-spin' : ''}`} />
            <span>
              {isRolling
                ? (isEs ? 'FORJANDO CON IA...' : 'FORGING WITH AI...')
                : (isEs ? 'FORJAR NOMBRE Y APELLIDO' : 'FORGE CHARACTER NAME')}
            </span>
          </button>
        </div>

        {/* Generated Results List */}
        <div className="space-y-2 pt-2 border-t border-[#291e14]">
          <div className="flex items-center justify-between text-xs text-[#8c7b67]">
            <div className="flex items-center gap-2">
              <span className="font-cinzel font-semibold uppercase text-[#ffd100]">
                {isEs ? 'Identidad Forjada' : 'Forged Identity'}
              </span>
              {isAiGenerated && (
                <span className="inline-flex items-center gap-1 text-[10px] text-[#38bdf8] font-cinzel bg-[#0b223d] border border-[#1e4a7a] px-1.5 py-0.2 rounded-xs">
                  <Sparkles className="w-2.5 h-2.5" />
                  {isEs ? 'Generado con IA' : 'AI Generated'}
                </span>
              )}
            </div>
            <span className="text-[11px] font-cinzel text-[#8c7b67]">
              {isEs ? '1 palabra nombre + 1 palabra apellido' : '1 word first name + 1 word surname'}
            </span>
          </div>

          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {generatedList.map((char) => {
                const race = RACES_DATA[char.race];
                const isSaved = savedIds.has(char.id);
                const suggestedClass = char.suggestedClass ? CLASSES_DATA[char.suggestedClass] : null;

                return (
                  <motion.div
                    key={char.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="p-3 bg-[#0d0a07] border border-[#2e2316] rounded-[2px] hover:border-[#4d3a24] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-cinzel text-lg sm:text-xl font-bold text-[#ffffff] tracking-wide">
                          {char.firstName}
                        </span>
                        <span className="font-cinzel text-lg sm:text-xl font-bold text-[#ffd100] tracking-wide">
                          {char.surname}
                        </span>
                        {char.title && (
                          <span className="text-xs text-[#b89f76] italic font-cinzel font-medium">
                            «{char.title}»
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-[#8f7f6a] flex flex-wrap items-center gap-2 font-cinzel">
                        <span className="text-[#ded1bc] font-semibold">{isEs ? race.name : race.nameEn}</span>
                        <span aria-hidden="true">·</span>
                        {suggestedClass && (
                          <span className="font-semibold" style={{ color: suggestedClass.color }}>
                            {isEs ? suggestedClass.name : suggestedClass.nameEn}
                          </span>
                        )}
                        <span aria-hidden="true">·</span>
                        <span className="text-[#b5a692] font-sans">{char.meaning}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(char.fullName, `${char.id}-full`)}
                        className="wow-btn px-2.5 py-1 text-xs rounded-[2px] flex items-center gap-1"
                        title={isEs ? 'Copiar nombre completo' : 'Copy full name'}
                      >
                        {copiedId === `${char.id}-full` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{isEs ? 'Copiado' : 'Copied'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#ffd100]" />
                            <span>{isEs ? 'Copiar' : 'Copy'}</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSave(char)}
                        className={`wow-btn px-2.5 py-1 text-xs rounded-[2px] flex items-center gap-1 ${
                          isSaved ? 'text-[#ffd100] border-[#ffd100]' : ''
                        }`}
                        title={isSaved ? (isEs ? 'Guardado en Grimorio' : 'Saved in Grimoire') : (isEs ? 'Guardar en Grimorio' : 'Save to Grimoire')}
                      >
                        {isSaved ? (
                          <>
                            <BookmarkCheck className="w-3 h-3 text-[#ffd100]" />
                            <span className="text-[#ffd100]">{isEs ? 'Guardado' : 'Saved'}</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-3 h-3" />
                            <span>{isEs ? 'Grimorio' : 'Grimoire'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
