import React, { useState } from 'react';
import { RACES_DATA, CLASSES_DATA, RACE_NAME_POOLS } from '../data/namesData';
import { RaceId, Language } from '../types';
import { playClickSound } from '../utils/soundEffects';

interface LoreEncyclopediaProps {
  onSelectRaceForName: (raceId: RaceId) => void;
  language: Language;
}

export const LoreEncyclopedia: React.FC<LoreEncyclopediaProps> = ({ onSelectRaceForName, language }) => {
  const [selectedRace, setSelectedRace] = useState<RaceId>('human');
  const [selectedTab, setSelectedTab] = useState<'rules' | 'races' | 'classes'>('rules');

  const isEs = language === 'es';
  const race = RACES_DATA[selectedRace];
  const pool = RACE_NAME_POOLS[selectedRace];

  const fixedSurnames = isEs ? pool.fixedSurnamesEs : pool.fixedSurnamesEn;

  return (
    <div className="space-y-4">
      {/* Sub Tabs */}
      <div className="flex items-center gap-1 border-b border-[#2d2217] pb-2">
        <button
          type="button"
          onClick={() => {
            playClickSound();
            setSelectedTab('rules');
          }}
          className={`px-3 py-1 text-xs font-cinzel font-bold rounded-[2px] transition-colors ${
            selectedTab === 'rules'
              ? 'bg-[#291f14] text-[#ffd100] border border-[#5c4626]'
              : 'text-[#8c7b67] hover:text-[#d6c7b2]'
          }`}
        >
          {isEs ? 'El Requisito: Nombre + Apellido' : 'Requirement: Name + Surname'}
        </button>
        <button
          type="button"
          onClick={() => {
            playClickSound();
            setSelectedTab('races');
          }}
          className={`px-3 py-1 text-xs font-cinzel font-bold rounded-[2px] transition-colors ${
            selectedTab === 'races'
              ? 'bg-[#291f14] text-[#ffd100] border border-[#5c4626]'
              : 'text-[#8c7b67] hover:text-[#d6c7b2]'
          }`}
        >
          {isEs ? 'Linajes por Raza' : 'Lineages by Race'}
        </button>
        <button
          type="button"
          onClick={() => {
            playClickSound();
            setSelectedTab('classes');
          }}
          className={`px-3 py-1 text-xs font-cinzel font-bold rounded-[2px] transition-colors ${
            selectedTab === 'classes'
              ? 'bg-[#291f14] text-[#ffd100] border border-[#5c4626]'
              : 'text-[#8c7b67] hover:text-[#d6c7b2]'
          }`}
        >
          {isEs ? 'Clases de Azeroth' : 'Classes of Azeroth'}
        </button>
      </div>

      {/* Rules View */}
      {selectedTab === 'rules' && (
        <div className="space-y-3 text-xs leading-relaxed text-[#c4b59f]">
          <div className="p-3 bg-[#0d0a07] border border-[#2b2014] rounded-[2px] space-y-2">
            <h3 className="font-cinzel text-sm font-bold text-[#ffd100]">
              {isEs
                ? '¿Por qué World of Warcraft Forever exige Nombre y Apellido (Una Sola Palabra Cada Uno)?'
                : 'Why does World of Warcraft Forever require First Name and Surname (Single Word Each)?'}
            </h3>
            <p>
              {isEs
                ? 'El nuevo cliente de WoW moderniza el registro de identidades al exigir [Nombre de Pila] [Apellido o Hazaña], donde tanto el nombre como el apellido son palabras únicas sin espacios interiores (ej. Reginald Vadoargénteo, Kargath Gritoinfernal o Celestis Cielonato).'
                : 'The new WoW client modernizes character identity by requiring [First Name] [Surname or Deed-name], where both first name and surname must strictly be single words without inner spaces (e.g., Reginald Silverford, Kargath Hellscream, or Celestis Skyborn).'}
            </p>
            <p>
              {isEs
                ? 'En el WoW clásico los nombres estaban limitados a un término único, provocando que los nombres más emblemáticos estuvieran ocupados desde el primer día y obligando a los jugadores a usar caracteres extraños. La combinación de dos palabras únicas permite identidades infinitas y compatibles con la interfaz de rol.'
                : 'In classic WoW, names were limited to a single term, causing famous names to be claimed immediately. Combining two single words allows infinite unique identities perfectly tailored for roleplaying.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 bg-[#0d0a07] border border-[#2b2014] rounded-[2px]">
              <div className="font-cinzel font-bold text-[#93c5fd] mb-0.5">
                {isEs ? '🦁 Alianza: Linajes & Forja' : '🦁 Alliance: Lineage & Forge'}
              </div>
              <p className="text-[11px] text-[#8f7e69]">
                {isEs
                  ? 'Humanos, Enanos, Elfos de la Noche y Gnomos utilizan apellidos nobiliarios, toponímicos o hazañas de luna y taller (ej. Vientorruna, Forjapiedra, Susurravientos, Chispatuerca).'
                  : 'Humans, Dwarves, Night Elves, and Gnomes use noble heraldry, forgecraft deeds, or astral feats (e.g., Stormwind, Ironforge, Whisperwind, Sparkcog).'}
              </p>
            </div>
            <div className="p-2.5 bg-[#0d0a07] border border-[#2b2014] rounded-[2px]">
              <div className="font-cinzel font-bold text-[#fca5a5] mb-0.5">
                {isEs ? '⚔️ Horda: Clanes & Hazañas' : '⚔️ Horde: Clans & Blood Deeds'}
              </div>
              <p className="text-[11px] text-[#8f7e69]">
                {isEs
                  ? 'Orcos, Tauren, Troles y Renegados adoptan nombres de combate, tótems de la tierra o pactos con Loas y criptas (ej. Martillomaldito, Pezuñasangre, Lanzanegra, Tumbanegra).'
                  : 'Orcs, Tauren, Trolls, and Forsaken claim battle deeds, sacred earth totems, or Loa pacts (e.g., Doomhammer, Bloodhoof, Darkspear, Graveshade).'}
              </p>
            </div>
            <div className="p-2.5 bg-[#0d0a07] border border-[#2b2014] rounded-[2px]">
              <div className="font-cinzel font-bold text-[#38bdf8] mb-0.5">
                {isEs ? '⚡ Cielonatos' : '⚡ Skyborne'}
              </div>
              <p className="text-[11px] text-[#8f7e69]">
                {isEs
                  ? 'Los Cielonatos no poseen una ciudad capital única ni líder soberano debido a su división espiritual: la vertiente de la Alianza se asienta en Dalaran, mientras que la de la Horda se congrega en El Círculo de la Tierra. Veneran las corrientes de viento y la luz estelar con apellidos etéreos de una sola palabra (ej. Cielonato, Formavientos, Alaceleste).'
                  : 'The Skyborne hold no single sovereign capital or supreme leader due to spiritual divergence: the Alliance branch operates from Dalaran, while the Horde convenes at The Earthen Ring. They revere atmospheric currents and starlight with single-word ethereal names (e.g., Skyborn, Windshaper, Cloudstrider).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Race Explorer View */}
      {selectedTab === 'races' && (
        <div className="space-y-3">
          {/* Race slots row */}
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-1">
            {(Object.keys(RACES_DATA) as RaceId[]).map((rId) => {
              const r = RACES_DATA[rId];
              const isSelected = selectedRace === rId;
              const displayName = isEs ? r.name : r.nameEn;
              return (
                <button
                  key={rId}
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setSelectedRace(rId);
                  }}
                  className={`wow-slot p-1.5 rounded-[2px] flex flex-col items-center justify-center text-center cursor-pointer ${
                    isSelected ? 'active-gold' : ''
                  }`}
                  title={displayName}
                >
                  <span className="text-base">{r.iconSymbol}</span>
                  <span className="font-cinzel text-[9px] font-bold text-[#e0cfbc] truncate w-full">
                    {displayName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Race Details */}
          <div className="p-3 bg-[#0d0a07] border border-[#2b2014] rounded-[2px] space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-cinzel text-base font-bold text-[#ffd100]">
                  {isEs ? race.name : race.nameEn}
                </span>
                <span className="text-[#8f7e69] ml-2 text-[11px]">
                  {isEs ? 'Capital:' : 'Capital:'} {isEs ? race.capital : race.capitalEn}
                  {race.leader ? ` · ${isEs ? 'Líder:' : 'Leader:'} ${isEs ? race.leader : race.leaderEn || race.leader}` : ''}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onSelectRaceForName(race.id);
                }}
                className="wow-btn px-2.5 py-1 text-xs rounded-[2px]"
              >
                {isEs ? `Forjar ${race.name}` : `Forge ${race.nameEn}`}
              </button>
            </div>

            <p className="text-[#b5a692]">{isEs ? race.description : race.descriptionEn}</p>

            {/* Allowed Classes in WoW Forever */}
            <div className="space-y-1.5 pt-1 border-t border-[#291e13]">
              <span className="font-cinzel font-bold text-[#ffd100] text-[11px] block">
                {isEs ? 'Clases Habilitadas (WoW Forever):' : 'Available Classes (WoW Forever):'}
              </span>
              <div className="flex flex-wrap gap-1">
                {race.allowedClasses.map((cId) => {
                  const cls = CLASSES_DATA[cId];
                  return (
                    <span
                      key={cId}
                      className="px-2 py-0.5 bg-[#14100b] border border-[#2e2316] rounded-[2px] text-[11px] font-cinzel font-semibold inline-flex items-center gap-1"
                      style={{ color: cls.color }}
                    >
                      <span>{cls.icon}</span>
                      <span>{isEs ? cls.name : cls.nameEn}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-cinzel font-bold text-[#ffd100] text-[11px] block">
                {isEs ? 'Convención de Apellido:' : 'Surname Philosophy:'}
              </span>
              <p className="text-[#a1907b] text-[11px]">{isEs ? race.namingPhilosophy : race.namingPhilosophyEn}</p>
            </div>

            {/* Examples */}
            <div>
              <span className="font-cinzel font-bold text-[#ffd100] text-[11px] block mb-1">
                {isEs ? 'Ejemplos Canónicos (Palabra Única):' : 'Canonical Examples (Single Word):'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {fixedSurnames.slice(0, 6).map((f, i) => (
                  <span
                    key={i}
                    className="font-cinzel px-2 py-0.5 bg-[#14100b] border border-[#2e2316] rounded-[2px] text-[11px] text-[#e0cfbc] font-semibold"
                    title={f.meaning}
                  >
                    {f.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Classes View */}
      {selectedTab === 'classes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {Object.values(CLASSES_DATA).map((cls) => (
            <div
              key={cls.id}
              className="p-2.5 bg-[#0d0a07] border border-[#291e13] rounded-[2px] space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel font-bold" style={{ color: cls.color }}>
                  {cls.icon} {isEs ? cls.name : cls.nameEn}
                </span>
                <span className="text-[10px] text-[#786957]">{isEs ? cls.role : cls.roleEn}</span>
              </div>
              <p className="text-[11px] text-[#9c8c78] line-clamp-2">{isEs ? cls.description : cls.descriptionEn}</p>
              <div className="flex gap-1 pt-0.5">
                {(isEs ? cls.specs : cls.specsEn).map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-1.5 py-0.2 bg-[#14100b] border border-[#2b2014] rounded-[2px] text-[#c2b29d]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
