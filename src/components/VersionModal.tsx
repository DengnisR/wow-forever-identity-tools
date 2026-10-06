import React from 'react';
import { X, ShieldCheck, Sparkles, Code2, History, GitBranch } from 'lucide-react';

interface VersionModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'en';
}

export const VersionModal: React.FC<VersionModalProps> = ({
  isOpen,
  onClose,
  language = 'es',
}) => {
  if (!isOpen) return null;
  const isEs = language === 'es';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0e0b08] border-2 border-[#5c4626] rounded-[3px] shadow-[0_0_30px_rgba(0,0,0,0.95)] text-[#d6c7b2] flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-[#1c140c] via-[#291e13] to-[#1c140c] border-b border-[#47361e] select-none">
          <div className="flex items-center gap-2">
            <span className="text-sm">📜</span>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-[#ffd100] tracking-wider">
              {isEs ? 'Versión del Programa & Registro' : 'Program Version & Changelog'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-5 h-5 rounded-[2px] bg-[#611313] hover:bg-[#851919] border border-[#a88238] hover:border-[#ffd100] flex items-center justify-center text-[11px] font-bold text-[#ffd100] shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-colors cursor-pointer"
            title={isEs ? 'Cerrar' : 'Close'}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-4 overflow-y-auto space-y-3.5 text-xs leading-relaxed">
          {/* Main Version Banner */}
          <div className="p-3 bg-gradient-to-b from-[#17110a] to-[#0c0906] border border-[#3b2c19] rounded-[2px] flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-sm font-bold text-[#ffd100]">
                  World of Warcraft Forever
                </span>
                <span className="px-1.5 py-0.5 rounded-[2px] bg-[#291f14] border border-[#ffd100]/40 font-mono text-[10px] text-[#ffd100] font-bold">
                  v1.2.0
                </span>
              </div>
              <p className="text-[11px] text-[#8f7e69]">
                {isEs ? 'Suite de Identidad, Linajes & Oráculo Rolero' : 'Identity Suite, Lineages & Roleplay Oracle'}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[10px] text-[#38bdf8] font-cinzel bg-[#0b223d] border border-[#1e4a7a] px-2 py-0.5 rounded-xs">
                <ShieldCheck className="w-3 h-3 text-[#38bdf8]" />
                <span>{isEs ? 'Build 2026.10' : 'Build 2026.10'}</span>
              </span>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 font-cinzel text-xs font-bold text-[#ffd100]">
              <Code2 className="w-3.5 h-3.5" />
              <span>{isEs ? 'Especificaciones del Motor' : 'Engine Specifications'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 bg-[#120e0a] border border-[#2b2014] rounded-[2px]">
                <span className="text-[#8c7b67] block text-[10px]">{isEs ? 'Motor de IA:' : 'AI Engine:'}</span>
                <span className="text-[#38bdf8] font-semibold">Gemini 3.8 Flash</span>
              </div>
              <div className="p-2 bg-[#120e0a] border border-[#2b2014] rounded-[2px]">
                <span className="text-[#8c7b67] block text-[10px]">{isEs ? 'Motor de Respaldo:' : 'Fallback Engine:'}</span>
                <span className="text-[#e6c07b] font-semibold">{isEs ? 'Motor Canónico Local' : 'Local Canon Engine'}</span>
              </div>
              <div className="p-2 bg-[#120e0a] border border-[#2b2014] rounded-[2px]">
                <span className="text-[#8c7b67] block text-[10px]">{isEs ? 'Alojamiento:' : 'Hosting:'}</span>
                <span className="text-[#f97316] font-semibold">Cloudflare Infrastructure</span>
              </div>
              <div className="p-2 bg-[#120e0a] border border-[#2b2014] rounded-[2px]">
                <span className="text-[#8c7b67] block text-[10px]">{isEs ? 'Desarrollador:' : 'Developer:'}</span>
                <span className="text-[#d4af37] font-semibold">DengnisR</span>
              </div>
            </div>
          </div>

          {/* Changelog Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 font-cinzel text-xs font-bold text-[#ffd100]">
              <History className="w-3.5 h-3.5" />
              <span>{isEs ? 'Registro de Actualizaciones (Changelog)' : 'Update Changelog'}</span>
            </div>

            <div className="space-y-2">
              {/* v1.2.0 */}
              <div className="p-2.5 bg-[#140f0b] border-l-2 border-[#ffd100] border-y border-r border-[#261b11] rounded-r-[2px] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel font-bold text-[#ffd100] text-[11px]">
                    v1.2.0 — {isEs ? 'Actualización de Linajes & Cloudflare' : 'Lineage & Cloudflare Update'}
                  </span>
                  <span className="text-[10px] text-[#736350] font-mono">2026.10</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-[#a69682] space-y-0.5">
                  <li>{isEs ? 'Oficialización de la raza Cielonatos (Skyborne) para Alianza y Horda.' : 'Official release of the Skyborne race for Alliance and Horde.'}</li>
                  <li>{isEs ? 'Enciclopedia actualizada con las 9 Clases icónicas clásicas de Azeroth.' : 'Lore Encyclopedia updated with the 9 iconic classic Azeroth classes.'}</li>
                  <li>{isEs ? 'Generación estricta de nombres y apellidos de una sola palabra.' : 'Strict single-word firstName and surname generation rules.'}</li>
                  <li>{isEs ? 'Optimización de tokens y parser directo para Gemini 3.8 Flash.' : 'Token limit expansion and direct JSON parsing for Gemini 3.8 Flash.'}</li>
                  <li>{isEs ? 'Compatibilidad y configuración para Cloudflare (Workers / Pages).' : 'Native compatibility and configuration for Cloudflare (Workers / Pages).'}</li>
                </ul>
              </div>

              {/* v1.1.0 */}
              <div className="p-2.5 bg-[#120e0a] border-l-2 border-[#5c4626] border-y border-r border-[#261b11] rounded-r-[2px] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel font-semibold text-[#c7b59e] text-[11px]">
                    v1.1.0 — {isEs ? 'Oráculo de Rol & Grimorio' : 'Role Oracle & Grimoire'}
                  </span>
                  <span className="text-[10px] text-[#736350] font-mono">2026.09</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-[#8f7f6d] space-y-0.5">
                  <li>{isEs ? 'Cuestionario de 6 preguntas de afinidad para clase y raza.' : '6-question affinity quiz for class and race discovery.'}</li>
                  <li>{isEs ? 'Grimorio con guardado local persistente, notas y exportación.' : 'Grimoire with persistent local storage, character notes and export.'}</li>
                </ul>
              </div>

              {/* v1.0.0 */}
              <div className="p-2.5 bg-[#0f0b08] border-l-2 border-[#3b2c19] border-y border-r border-[#21160d] rounded-r-[2px] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-[#8c7b67] text-[11px]">
                    v1.0.0 — {isEs ? 'Lanzamiento Inicial' : 'Initial Release'}
                  </span>
                  <span className="text-[10px] text-[#5e5040] font-mono">2026.08</span>
                </div>
                <p className="text-[10px] text-[#7a6b5a]">
                  {isEs ? 'Estética Blizzard fiel, marcos góticos, selector bilingüe y audio analógico Web Audio API.' : 'Authentic Blizzard styling, gothic parchment frames, bilingual mode and Web Audio API.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3.5 py-2.5 bg-[#140f0a] border-t border-[#382b1b] flex items-center justify-between text-[11px] select-none">
          <div className="flex items-center gap-1.5 text-[#8f7e6a]">
            <GitBranch className="w-3 h-3 text-[#d4af37]" />
            <span className="font-mono text-[10px]">wow-forever-identity-tools</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="wow-btn px-3 py-1 text-xs rounded-[2px]"
          >
            {isEs ? 'Cerrar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
