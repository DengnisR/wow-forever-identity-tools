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

                {/* GitHub Repository Link */}
                <a
                  href="https://github.com/DengnisR/wow-forever-identity-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wow-btn p-1.5 rounded-[3px] text-[#8f7e6a] hover:text-[#ffd100]"
                  title="GitHub: DengnisR/wow-forever-identity-tools"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

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

      {/* Comprehensive In-Game Lore & Legal Footer */}
      <footer className="border-t border-[#241a10] bg-[#070604] py-5 text-[11px] text-[#8f7e6a] select-none">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-3.5">
          {/* Top Row: Brand & Main Interactive Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="font-cinzel font-bold text-[#ffd100] tracking-wide">
                ⚔️ World of Warcraft Forever · {isEs ? 'Suite de Identidad' : 'Identity Suite'}
              </span>
              <span className="hidden sm:inline text-[#3d2f20]">|</span>
              
              {/* GitHub Link */}
              <a
                href="https://github.com/DengnisR/wow-forever-identity-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[2px] bg-[#14100b] border border-[#3d2f20] text-[#c9b89d] hover:text-[#ffd100] hover:border-[#ffd100] transition-colors font-cinzel text-[11px]"
                title="Ver código fuente en GitHub"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              {/* Recommended Games Smartlink */}
              <a
                href="https://latherburial.com/tunne861?key=37651080aa9b1bc573fcdb06840ab635"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-[#14100b] border border-[#52402a] text-[#ffd100] hover:text-[#fff0a6] hover:border-[#ffd100] hover:bg-[#1f170e] transition-all font-cinzel text-[11px] shadow-sm tracking-wide"
                title={isEs ? 'Explora reinos, servidores y juegos de rol recomendados' : 'Explore featured RPGs & community servers'}
              >
                <span>🎮</span>
                <span>{isEs ? 'Reinos & Juegos Recomendados' : 'Featured Realms & Games'}</span>
                <span className="text-[10px] text-[#8c7353]">↗</span>
              </a>
            </div>

            {/* Author Credit */}
            <div className="font-cinzel text-[#8f7e6a] whitespace-nowrap">
              {isEs ? 'Desarrollado con pasión por' : 'Developed with passion by'}{' '}
              <a
                href="https://github.com/DengnisR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline font-bold"
              >
                DengnisR
              </a>
            </div>
          </div>

          {/* Legal Notice / Blizzard Disclaimer */}
          <div className="pt-2.5 border-t border-[#1a140d] text-[10px] text-[#70604e] leading-relaxed text-center sm:text-left">
            <p>
              {isEs
                ? 'Aviso Legal & Afiliación: World of Warcraft®, Warcraft® y Blizzard Entertainment® son marcas comerciales o marcas registradas de Blizzard Entertainment, Inc. en los EE. UU. y/u otros países. Esta web es una herramienta comunitaria independiente y de acceso 100% libre y gratuito para aficionados al rol, alojada en la infraestructura global de Cloudflare. No está afiliada, respaldada ni patrocinada por Blizzard Entertainment. La publicidad mostrada en este sitio tiene como único propósito sufragar el consumo de la API de IA (Gemini), los servicios de red y el tiempo de desarrollo continuo para mantener las herramientas abiertas y actualizadas para la comunidad.'
                : 'Legal Disclaimer & Affiliation: World of Warcraft®, Warcraft®, and Blizzard Entertainment® are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries. This website is an independent community tool, completely free and open for roleplaying enthusiasts, powered by Cloudflare global infrastructure. It is not affiliated with, endorsed by, or sponsored by Blizzard Entertainment. Advertisements displayed on this site serve solely to help support Gemini AI API consumption, network services, and ongoing development time to keep these tools freely accessible.'}
            </p>
            <p className="mt-1 font-mono text-[9px] text-[#55493d]">
              © 2026 DengnisR · wow-forever-identity-tools · {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
