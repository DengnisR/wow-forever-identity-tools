import React, { useState } from 'react';
import { Trash2, Copy, Check, Download, FileText } from 'lucide-react';
import { SavedCharacter, Language } from '../types';
import { RACES_DATA, CLASSES_DATA } from '../data/namesData';
import { playClickSound } from '../utils/soundEffects';

interface SavedCharactersModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedCharacters: SavedCharacter[];
  onRemoveCharacter: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onClearAll: () => void;
  language: Language;
}

export const SavedCharactersModal: React.FC<SavedCharactersModalProps> = ({
  isOpen,
  onClose,
  savedCharacters,
  onRemoveCharacter,
  onUpdateNotes,
  onClearAll,
  language,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const isEs = language === 'es';

  const handleCopy = (text: string, id: string) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1600);
  };

  const handleExportText = () => {
    playClickSound();
    const content = savedCharacters
      .map(
        (c, idx) =>
          `=== ${isEs ? 'PERSONAJE' : 'CHARACTER'} #${idx + 1} ===\n${isEs ? 'Nombre Completo' : 'Full Name'}: ${c.fullName}\n${isEs ? 'Nombre' : 'First Name'}: ${c.firstName}\n${isEs ? 'Apellido' : 'Surname'}: ${c.surname}\n${isEs ? 'Raza' : 'Race'}: ${isEs ? RACES_DATA[c.race].name : RACES_DATA[c.race].nameEn}\n${isEs ? 'Facción' : 'Faction'}: ${c.faction === 'alliance' ? (isEs ? 'Alianza' : 'Alliance') : c.faction === 'horde' ? (isEs ? 'Horda' : 'Horde') : (isEs ? 'Neutra' : 'Neutral')}\n${isEs ? 'Título' : 'Title'}: ${c.title || (isEs ? 'Ninguno' : 'None')}\n${isEs ? 'Significado' : 'Meaning'}: ${c.meaning}\n${isEs ? 'Notas' : 'Notes'}: ${c.customNotes || (isEs ? 'Sin notas' : 'No notes')}\n`
      )
      .join('\n----------------------------------------\n\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `WoW_Forever_Personajes_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    playClickSound();
    const jsonStr = JSON.stringify(savedCharacters, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `WoW_Forever_Personajes_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-2xl wow-window max-h-[85vh] flex flex-col">
        {/* Title Bar */}
        <div className="relative h-10 border-b border-[#3d2f20] bg-gradient-to-b from-[#1c1610] to-[#100d08] flex items-center justify-between px-3 select-none flex-shrink-0">
          <div className="font-cinzel text-xs sm:text-sm font-bold text-[#ffd100] tracking-wide">
            {isEs ? 'Grimorio de Personajes Guardados' : 'Grimoire of Saved Characters'} ({savedCharacters.length})
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-5 h-5 rounded-[2px] bg-[#611313] hover:bg-[#851919] border border-[#a88238] hover:border-[#ffd100] flex items-center justify-center text-[11px] font-bold text-[#ffd100] transition-colors"
            title={isEs ? 'Cerrar' : 'Close'}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 overflow-y-auto flex-1 space-y-2">
          {savedCharacters.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#8f7e6a] font-cinzel">
              {isEs
                ? 'No tienes personajes guardados en el grimorio. Genera un nombre y pulsa "Guardar".'
                : 'No characters saved in your grimoire yet. Generate a name and click "Save".'}
            </div>
          ) : (
            savedCharacters.map((char) => {
              const race = RACES_DATA[char.race];
              const cls = char.suggestedClass ? CLASSES_DATA[char.suggestedClass] : null;

              return (
                <div
                  key={char.id}
                  className="p-2.5 bg-[#0d0a07] border border-[#2e2316] rounded-[2px] space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{race.iconSymbol}</span>
                      <div>
                        <span className="font-cinzel text-sm font-bold text-[#ffd100]">
                          {char.fullName}
                        </span>
                        <span className="text-[11px] text-[#8c7b67] ml-2">
                          {isEs ? race.name : race.nameEn} {cls && `· ${isEs ? cls.name : cls.nameEn}`}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleCopy(char.fullName, char.id)}
                        className="wow-btn px-2 py-0.5 text-xs rounded-[2px] flex items-center gap-1"
                        title={isEs ? 'Copiar' : 'Copy'}
                      >
                        {copiedId === char.id ? (
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
                        onClick={() => onRemoveCharacter(char.id)}
                        className="wow-btn px-2 py-0.5 text-xs rounded-[2px] text-[#fca5a5] hover:border-[#dc2626]"
                        title={isEs ? 'Eliminar' : 'Delete'}
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#9c8c78]">{char.meaning}</p>

                  <input
                    type="text"
                    placeholder={isEs ? 'Añadir notas (servidor, rol)...' : 'Add notes (realm, role)...'}
                    value={char.customNotes || ''}
                    onChange={(e) => onUpdateNotes(char.id, e.target.value)}
                    className="w-full bg-[#14100b] border border-[#2b2014] text-[11px] text-[#d6c7b2] rounded-[2px] px-2 py-0.5 outline-none focus:border-[#ffd100]"
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {savedCharacters.length > 0 && (
          <div className="p-2.5 border-t border-[#291e14] bg-[#0c0906] flex items-center justify-between gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                if (confirm(isEs ? '¿Vaciar todos los personajes guardados?' : 'Clear all saved characters?')) {
                  onClearAll();
                }
              }}
              className="text-[11px] text-[#f87171] hover:underline font-cinzel"
            >
              {isEs ? 'Vaciar todos' : 'Clear all'}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleExportText}
                className="wow-btn px-2.5 py-1 text-xs rounded-[2px] flex items-center gap-1"
              >
                <FileText className="w-3 h-3 text-[#ffd100]" />
                <span>{isEs ? 'Exportar .TXT' : 'Export .TXT'}</span>
              </button>
              <button
                type="button"
                onClick={handleExportJSON}
                className="wow-btn px-2.5 py-1 text-xs rounded-[2px] flex items-center gap-1"
              >
                <Download className="w-3 h-3 text-[#ffd100]" />
                <span>{isEs ? 'Exportar .JSON' : 'Export .JSON'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
