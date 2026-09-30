/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Bookmark, Volume2, VolumeX, Globe } from 'lucide-react';
import { NameGenerator } from './components/NameGenerator';
import { PersonalityQuiz } from './components/PersonalityQuiz';
import { LoreEncyclopedia } from './components/LoreEncyclopedia';
import { SavedCharactersModal } from './components/SavedCharactersModal';
import { WowWindow } from './components/OrnateFrame';
import { GeneratedName, SavedCharacter, RaceId, Language } from './types';
import { isSoundEnabled, setSoundEnabled, playTabSound, playClickSound } from './utils/soundEffects';

export default function App() {
  const [activeTab, setActiveTab] = useState<'generator' | 'quiz' | 'encyclopedia'>('generator');
  const [language, setLanguage] = useState<Language>('es');
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(!isSoundEnabled());
  const [preselectedRace, setPreselectedRace] = useState<RaceId>('human');

  // Persistent saved characters in localStorage
  const [savedCharacters, setSavedCharacters] = useState<SavedCharacter[]>(() => {
    try {
      const stored = localStorage.getItem('wow_saved_characters');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wow_saved_characters', JSON.stringify(savedCharacters));
    } catch {
      // Ignore quota errors
    }
  }, [savedCharacters]);

  const handleToggleSound = () => {
    const nextState = !isSoundMuted;
    setIsSoundMuted(nextState);
    setSoundEnabled(!nextState);
    if (!nextState) {
      playClickSound();
    }
  };

  const handleToggleLanguage = (lang: Language) => {
    playClickSound();
    setLanguage(lang);
  };

  const handleSaveCharacter = (char: GeneratedName) => {
    setSavedCharacters((prev) => {
      if (prev.some((c) => c.id === char.id)) {
        return prev.filter((c) => c.id !== char.id);
      }
      return [char, ...prev];
    });
  };

  const handleRemoveCharacter = (id: string) => {
    setSavedCharacters((prev) => prev.filter((c) => c.id !== id));
  };

  const handleUpdateNotes = (id: string, notes: string) => {
    setSavedCharacters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, customNotes: notes } : c))
    );
  };

  const handleClearAll = () => {
    setSavedCharacters([]);
  };

  const handleSelectRaceFromOtherTab = (raceId: RaceId) => {
    setPreselectedRace(raceId);
    setActiveTab('generator');
  };

  const savedIdsSet = new Set(savedCharacters.map((c) => c.id));
  const isEs = language === 'es';

  const getWindowTitle = () => {
    switch (activeTab) {
      case 'generator':
        return isEs
          ? 'Generador de Nombres & Linajes · WoW Forever'
          : 'Fantasy Name & Lineage Generator · WoW Forever';
      case 'quiz':
        return isEs
          ? 'Oráculo de Personalidad: Clase & Raza'
          : 'Personality Oracle: Class & Race';
      case 'encyclopedia':
        return isEs
          ? 'Enciclopedia de Linajes & Requisitos'
          : 'Lineage Encyclopedia & Guidelines';
    }
  };

  const getMedallionIcon = () => {
    switch (activeTab) {
      case 'generator':
        return '⚔️';
      case 'quiz':
        return '✨';
      case 'encyclopedia':
        return '📜';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070605] text-[#e0cfbc] selection:bg-[#ffd100]/25 selection:text-[#fff4d1]">
      {/* Central Component Screen */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-2 sm:p-5 flex flex-col justify-start">
        {/* Authentic In-Game WoW Dialog Frame with Directly Attached Tabs */}
        <WowWindow
          title={getWindowTitle()}
          medallionIcon={<span>{getMedallionIcon()}</span>}
          onClose={() => {
            if (activeTab !== 'generator') {
              setActiveTab('generator');
            }
          }}
          className="shadow-2xl"
          tabs={
            <div className="flex flex-wrap items-end justify-between gap-2 w-full">
              {/* Central Section Selector Tabs (Attached flush with border) */}
              <div className="flex items-end gap-1">
                <button
                  type="button"
                  onClick={() => {
                    playTabSound();
                    setActiveTab('generator');
                  }}
                  className={`wow-tab ${activeTab === 'generator' ? 'active' : ''}`}
                >
                  <span className="mr-1.5 text-xs">⚔️</span>
                  {isEs ? 'Generador' : 'Generator'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playTabSound();
                    setActiveTab('quiz');
                  }}
                  className={`wow-tab ${activeTab === 'quiz' ? 'active' : ''}`}
                >
                  <span className="mr-1.5 text-xs">✨</span>
                  {isEs ? 'Oráculo de Rol' : 'Role Oracle'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playTabSound();
                    setActiveTab('encyclopedia');
                  }}
                  className={`wow-tab ${activeTab === 'encyclopedia' ? 'active' : ''}`}
                >
                  <span className="mr-1.5 text-xs">📜</span>
                  {isEs ? 'Enciclopedia' : 'Encyclopedia'}
                </button>
              </div>

              {/* Right Utilities: Language Selector, Saved Grimoire, Sound */}
              <div className="flex items-center gap-1.5 ml-auto pb-1.5">
                {/* Language Selector (ES / EN) */}
                <div className="flex items-center bg-[#14100b] border border-[#382b1d] rounded-[3px] p-0.5 shadow-sm">
                  <span className="pl-1.5 pr-1 text-[#8f7e6a] text-xs">
                    <Globe className="w-3.5 h-3.5" />
                  </span>
                  <button
                    type="button"
                    onClick={() => handleToggleLanguage('es')}
                    className={`px-2 py-0.5 rounded-[2px] font-cinzel text-xs font-bold transition-all ${
                      language === 'es'
                        ? 'bg-[#2e2316] text-[#ffd100] border border-[#ffd100]/60 shadow-xs'
                        : 'text-[#8f7e6a] hover:text-[#ded1bc]'
                    }`}
                    title="Español"
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleLanguage('en')}
                    className={`px-2 py-0.5 rounded-[2px] font-cinzel text-xs font-bold transition-all ${
                      language === 'en'
                        ? 'bg-[#2e2316] text-[#ffd100] border border-[#ffd100]/60 shadow-xs'
                        : 'text-[#8f7e6a] hover:text-[#ded1bc]'
                    }`}
                    title="English"
                  >
                    EN
                  </button>
                </div>

                {/* Saved Characters Grimoire Button */}
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setIsSavedModalOpen(true);
                  }}
                  className="wow-btn px-2.5 py-1 text-xs rounded-[3px] flex items-center gap-1.5"
                  title={isEs ? 'Ver Grimorio de personajes guardados' : 'View Grimoire of saved characters'}
                >
                  <Bookmark className="w-3.5 h-3.5 text-[#ffd100]" />
                  <span className="hidden xs:inline font-cinzel font-semibold">
                    {isEs ? 'Grimorio' : 'Grimoire'}
                  </span>
                  <span className="bg-[#ffd100] text-[#070605] px-1.5 py-0.2 rounded-full font-bold text-[10px]">
                    {savedCharacters.length}
                  </span>
                </button>

                {/* Sound Toggle */}
                <button
                  type="button"
                  onClick={handleToggleSound}
                  className="wow-btn p-1.5 rounded-[3px] text-[#8f7e6a] hover:text-[#ffd100]"
                  title={isSoundMuted ? (isEs ? 'Activar sonido' : 'Unmute sound') : (isEs ? 'Silenciar sonido' : 'Mute sound')}
                >
                  {isSoundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#ffd100]" />}
                </button>
              </div>
            </div>
          }
        >
          {activeTab === 'generator' && (
            <NameGenerator
              onSaveCharacter={handleSaveCharacter}
              savedIds={savedIdsSet}
              initialRace={preselectedRace}
              language={language}
            />
          )}

          {activeTab === 'quiz' && (
            <PersonalityQuiz
              onSelectRaceForName={handleSelectRaceFromOtherTab}
              language={language}
            />
          )}

          {activeTab === 'encyclopedia' && (
            <LoreEncyclopedia
              onSelectRaceForName={handleSelectRaceFromOtherTab}
              language={language}
            />
          )}
        </WowWindow>
      </main>

      {/* Saved Characters Modal */}
      <SavedCharactersModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedCharacters={savedCharacters}
        onRemoveCharacter={handleRemoveCharacter}
        onUpdateNotes={handleUpdateNotes}
        onClearAll={handleClearAll}
        language={language}
      />

      {/* Minimalist In-Game Status Footer */}
      <footer className="border-t border-[#241a10] bg-[#070604] py-2.5 text-[11px] text-[#70604e] text-center select-none">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="font-cinzel">World of Warcraft Forever · {isEs ? 'Suite de Identidad' : 'Identity Suite'}</span>
          <span className="font-cinzel text-[#8f7e6a]">{isEs ? 'DengnisR - Todos los derechos reservados 2026' : 'DengnisR - All rights reserved 2026'}</span>
        </div>
      </footer>
    </div>
  );
}
