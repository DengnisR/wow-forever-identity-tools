import React from 'react';
import { Volume2, VolumeX, Bookmark } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface HeaderProps {
  activeTab: 'generator' | 'quiz' | 'encyclopedia';
  setActiveTab: (tab: 'generator' | 'quiz' | 'encyclopedia') => void;
  savedCount: number;
  onOpenSaved: () => void;
  isSoundMuted: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onOpenSaved,
  isSoundMuted,
  onToggleSound,
}) => {
  const handleNav = (tab: 'generator' | 'quiz' | 'encyclopedia') => {
    playClickSound();
    setActiveTab(tab);
  };

  return (
    <header className="w-full bg-[#0a0806] border-b border-[#2d2217]">
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        {/* Zone 1: Clean Single Wordmark in Blizzard Gold */}
        <button
          onClick={() => handleNav('generator')}
          className="text-sm sm:text-base font-bold text-[#ffd100] hover:text-[#fff0a6] transition-colors whitespace-nowrap text-left flex items-center gap-2 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-[#ffd100]" />
          <span>WoW Forever</span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 text-xs font-semibold tracking-wide">
          <button
            onClick={() => handleNav('generator')}
            className={`whitespace-nowrap transition-colors pb-0.5 ${
              activeTab === 'generator'
                ? 'text-[#ffd100] border-b-2 border-[#ffd100]'
                : 'text-[#8c7b68] hover:text-[#d4c3ac]'
            }`}
          >
            Generador de Nombres
          </button>
          <button
            onClick={() => handleNav('quiz')}
            className={`whitespace-nowrap transition-colors pb-0.5 ${
              activeTab === 'quiz'
                ? 'text-[#ffd100] border-b-2 border-[#ffd100]'
                : 'text-[#8c7b68] hover:text-[#d4c3ac]'
            }`}
          >
            Oráculo de Clase y Raza
          </button>
          <button
            onClick={() => handleNav('encyclopedia')}
            className={`whitespace-nowrap transition-colors pb-0.5 ${
              activeTab === 'encyclopedia'
                ? 'text-[#ffd100] border-b-2 border-[#ffd100]'
                : 'text-[#8c7b68] hover:text-[#d4c3ac]'
            }`}
          >
            Enciclopedia
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onToggleSound();
              playClickSound();
            }}
            title={isSoundMuted ? 'Activar sonido' : 'Silenciar sonido'}
            className="p-1.5 rounded bg-[#14100b] border border-[#3d2f20] text-[#a08b73] hover:text-[#ffd100] hover:border-[#634e36] transition-colors"
          >
            {isSoundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => {
              playClickSound();
              onOpenSaved();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#ded1bc] bg-[#1a140d] border border-[#423321] rounded-[2px] hover:border-[#ffd100] hover:text-[#ffd100] transition-colors whitespace-nowrap"
          >
            <Bookmark className="w-3 h-3 text-[#ffd100]" />
            <span className="hidden sm:inline">Grimorio</span>
            <span className="font-mono text-[10px] px-1 bg-[#0d0905] rounded-[2px] text-[#ffd100] border border-[#2d2114]">
              {savedCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
