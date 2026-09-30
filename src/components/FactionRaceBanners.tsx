import React from 'react';
import { RaceId, Language, Faction } from '../types';
import { RacePortrait } from './RacePortrait';
import { playClickSound } from '../utils/soundEffects';

interface FactionRaceBannersProps {
  selectedRace: RaceId;
  selectedFaction?: Faction;
  onSelectRace: (race: RaceId, faction?: Faction) => void;
  language: Language;
}

export const FactionRaceBanners: React.FC<FactionRaceBannersProps> = ({
  selectedRace,
  selectedFaction = 'alliance',
  onSelectRace,
  language,
}) => {
  const ALLIANCE_RACES: { id: RaceId; nameEs: string; nameEn: string }[] = [
    { id: 'human', nameEs: 'Humano', nameEn: 'Human' },
    { id: 'dwarf', nameEs: 'Enano', nameEn: 'Dwarf' },
    { id: 'night_elf', nameEs: 'Elfo nocturno', nameEn: 'Night Elf' },
    { id: 'gnome', nameEs: 'Gnomo', nameEn: 'Gnome' },
  ];

  const HORDE_RACES: { id: RaceId; nameEs: string; nameEn: string }[] = [
    { id: 'orc', nameEs: 'Orco', nameEn: 'Orc' },
    { id: 'undead', nameEs: 'No-muerto (Renegado)', nameEn: 'Undead (Forsaken)' },
    { id: 'tauren', nameEs: 'Tauren', nameEn: 'Tauren' },
    { id: 'troll', nameEs: 'Trol', nameEn: 'Troll' },
  ];

  const isSkybornSelected = selectedRace === 'skyborn';
  const isAllianceSkyborn = isSkybornSelected && selectedFaction === 'alliance';
  const isHordeSkyborn = isSkybornSelected && selectedFaction === 'horde';

  return (
    <div className="flex flex-col items-center flex-shrink-0 select-none w-full max-w-[260px]">
      {/* Alliance (Left) & Horde (Right) Top Banners */}
      <div className="flex gap-2 justify-center w-full">
        {/* Alliance Banner */}
        <div className="wow-banner-alliance flex-1 p-2 rounded-t-sm flex flex-col items-center relative pb-5">
          {/* Alliance Crest */}
          <div className="w-7 h-7 mb-1 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-5 h-5 drop-shadow">
              <path
                d="M16 3 L24 8 L24 18 C24 23 16 29 16 29 C16 29 8 23 8 18 L8 8 Z"
                fill="#1e3a8a"
                stroke="#ffd100"
                strokeWidth="1.5"
              />
              <circle cx="16" cy="14" r="5" fill="#ffd100" />
              <path d="M14 13 L15 15 L17 15 L18 13" stroke="#1e3a8a" strokeWidth="1" fill="none" />
              <circle cx="14.5" cy="12.5" r="0.7" fill="#1e3a8a" />
              <circle cx="17.5" cy="12.5" r="0.7" fill="#1e3a8a" />
            </svg>
          </div>

          {/* ALIANZA / ALLIANCE Title */}
          <div className="font-cinzel text-[11px] font-bold text-[#ffd100] tracking-wider mb-2 text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            {language === 'es' ? 'ALIANZA' : 'ALLIANCE'}
          </div>

          {/* Alliance Races Vertical List */}
          <div className="flex flex-col gap-2 w-full items-center">
            {ALLIANCE_RACES.map((r) => {
              const isSelected = selectedRace === r.id;
              const displayName = language === 'es' ? r.nameEs : r.nameEn;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    playClickSound();
                    onSelectRace(r.id, 'alliance');
                  }}
                  className={`flex flex-col items-center group cursor-pointer w-full text-center p-1.5 rounded-[3px] transition-all border ${
                    isSelected
                      ? 'bg-[#1e3a8a]/40 border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.45)] ring-1 ring-[#ffd100]'
                      : 'border-transparent hover:bg-black/40 hover:border-[#ffd100]/60 active:scale-95'
                  }`}
                >
                  <div
                    className={`wow-race-slot w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-150 group-hover:scale-105 ${
                      isSelected ? 'selected ring-2 ring-[#ffd100]' : 'group-hover:border-[#ffd100]'
                    }`}
                  >
                    <RacePortrait race={r.id} size={48} className="w-full h-full object-cover" />
                  </div>
                  <span
                    className={`font-cinzel text-[10px] font-bold mt-1 leading-tight px-0.5 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,1)] ${
                      isSelected ? 'text-[#ffd100]' : 'text-[#f0e4cf] group-hover:text-[#ffd100]'
                    }`}
                  >
                    {displayName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pointed bottom ribbon edge */}
          <div
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '10px solid #06132b',
            }}
          />
        </div>

        {/* Horde Banner */}
        <div className="wow-banner-horde flex-1 p-2 rounded-t-sm flex flex-col items-center relative pb-5">
          {/* Horde Crest */}
          <div className="w-7 h-7 mb-1 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-5 h-5 drop-shadow">
              <circle cx="16" cy="16" r="10" fill="none" stroke="#ef4444" strokeWidth="2" />
              <path
                d="M16 6 L16 26 M10 12 L22 12 M10 20 L22 20 M12 9 L20 23 M20 9 L12 23"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="16" cy="16" r="3" fill="#ef4444" />
            </svg>
          </div>

          {/* HORDA / HORDE Title */}
          <div className="font-cinzel text-[11px] font-bold text-[#ffd100] tracking-wider mb-2 text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            {language === 'es' ? 'HORDA' : 'HORDE'}
          </div>

          {/* Horde Races Vertical List */}
          <div className="flex flex-col gap-2 w-full items-center">
            {HORDE_RACES.map((r) => {
              const isSelected = selectedRace === r.id;
              const displayName = language === 'es' ? r.nameEs : r.nameEn;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    playClickSound();
                    onSelectRace(r.id, 'horde');
                  }}
                  className={`flex flex-col items-center group cursor-pointer w-full text-center p-1.5 rounded-[3px] transition-all border ${
                    isSelected
                      ? 'bg-[#5c1212]/50 border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.45)] ring-1 ring-[#ffd100]'
                      : 'border-transparent hover:bg-black/40 hover:border-[#ffd100]/60 active:scale-95'
                  }`}
                >
                  <div
                    className={`wow-race-slot w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-150 group-hover:scale-105 ${
                      isSelected ? 'selected ring-2 ring-[#ffd100]' : 'group-hover:border-[#ffd100]'
                    }`}
                  >
                    <RacePortrait race={r.id} size={48} className="w-full h-full object-cover" />
                  </div>
                  <span
                    className={`font-cinzel text-[10px] font-bold mt-1 leading-tight px-0.5 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,1)] ${
                      isSelected ? 'text-[#ffd100]' : 'text-[#f0e4cf] group-hover:text-[#ffd100]'
                    }`}
                  >
                    {displayName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pointed bottom ribbon edge */}
          <div
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '10px solid #290505',
            }}
          />
        </div>
      </div>

      {/* New Race: Skyborne placed at the bottom (Elfos Azules) with Alliance / Horde options */}
      <div className="mt-3.5 w-full">
        <div
          className={`w-full p-2.5 rounded-sm flex flex-col items-center transition-all ${
            isSkybornSelected
              ? selectedFaction === 'horde'
                ? 'bg-gradient-to-b from-[#3b0d0d] via-[#1a0808] to-[#071326] border-2 border-[#ef4444] shadow-[0_0_16px_rgba(239,68,68,0.4)]'
                : 'bg-gradient-to-b from-[#0f294d] via-[#091d38] to-[#071326] border-2 border-[#38bdf8] shadow-[0_0_16px_rgba(56,189,248,0.4)]'
              : 'bg-gradient-to-b from-[#0b1e38] to-[#050d1a] border border-[#1e3a8a] hover:border-[#38bdf8]/70 shadow-md'
          }`}
        >
          <div className="flex items-center gap-1.5 text-[9px] font-cinzel font-bold text-[#38bdf8] tracking-widest uppercase mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            {language === 'es' ? 'NUEVA RAZA · SKYBORNE' : 'NEW RACE · SKYBORNE'}
          </div>

          {/* Main Portrait & Title as Clickable Button */}
          <button
            type="button"
            aria-pressed={isSkybornSelected}
            onClick={() => {
              playClickSound();
              onSelectRace('skyborn', selectedFaction || 'alliance');
            }}
            className={`flex items-center gap-2.5 w-full justify-center px-2 py-1.5 mb-2 rounded-[3px] group cursor-pointer text-left transition-all border ${
              isSkybornSelected
                ? 'bg-black/50 border-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.3)]'
                : 'border-transparent hover:bg-black/35 hover:border-[#38bdf8]/60 active:scale-95'
            }`}
          >
            <div
              className={`wow-race-slot w-12 h-12 relative flex-shrink-0 transition-transform duration-150 group-hover:scale-105 ${
                isSkybornSelected ? 'selected ring-2 ring-[#38bdf8]' : 'border-[#38bdf8]/50 group-hover:border-[#38bdf8]'
              }`}
            >
              <RacePortrait race="skyborn" size={48} className="w-full h-full object-cover" />
            </div>

            <div className="text-left flex flex-col justify-center">
              <span
                className={`font-cinzel text-xs font-bold leading-tight transition-colors ${
                  isSkybornSelected ? 'text-[#ffd100]' : 'text-[#f0e4cf] group-hover:text-[#ffd100]'
                }`}
              >
                Skyborne
              </span>
              <span className="text-[10px] text-[#7dd3fc] font-cinzel leading-tight mt-0.5">
                {language === 'es' ? 'Elfos Azules' : 'Blue Elves'}
              </span>
              <span className="text-[9px] text-[#93c5fd]/80 leading-tight">
                {isHordeSkyborn
                  ? (language === 'es' ? 'Chamanes de la Tempestad' : 'Storm Shamans')
                  : (language === 'es' ? 'Magos del Firmamento' : 'Sky Mages')}
              </span>
            </div>
          </button>

          {/* Faction Choice for Skyborne (Alliance vs Horde) */}
          <div className="w-full pt-1.5 border-t border-[#1e3a8a]/40 grid grid-cols-2 gap-1 text-[10px]">
            <button
              type="button"
              aria-pressed={isAllianceSkyborn}
              onClick={() => {
                playClickSound();
                onSelectRace('skyborn', 'alliance');
              }}
              className={`py-1.5 px-1 rounded-[2px] font-cinzel font-bold text-center cursor-pointer transition-all active:scale-95 ${
                isAllianceSkyborn
                  ? 'bg-[#1e3a8a] text-[#ffd100] border border-[#ffd100] shadow-[0_0_8px_rgba(255,209,0,0.4)]'
                  : 'bg-[#0d1e38] text-[#93c5fd] border border-[#1e3a8a]/60 hover:border-[#38bdf8] hover:text-white'
              }`}
              title={language === 'es' ? 'Skyborne Alianza (Acceso a Mago)' : 'Alliance Skyborne (Mage access)'}
            >
              🦁 {language === 'es' ? 'Alianza' : 'Alliance'}
            </button>

            <button
              type="button"
              aria-pressed={isHordeSkyborn}
              onClick={() => {
                playClickSound();
                onSelectRace('skyborn', 'horde');
              }}
              className={`py-1.5 px-1 rounded-[2px] font-cinzel font-bold text-center cursor-pointer transition-all active:scale-95 ${
                isHordeSkyborn
                  ? 'bg-[#5c1212] text-[#ffd100] border border-[#ffd100] shadow-[0_0_8px_rgba(255,209,0,0.4)]'
                  : 'bg-[#290a0a] text-[#fca5a5] border border-[#8f2929]/60 hover:border-[#ef4444] hover:text-white'
              }`}
              title={language === 'es' ? 'Skyborne Horda (Acceso a Chamán)' : 'Horde Skyborne (Shaman access)'}
            >
              ⚔️ {language === 'es' ? 'Horda' : 'Horde'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
