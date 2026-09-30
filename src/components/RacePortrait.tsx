import React from 'react';
import { RaceId } from '../types';

interface RacePortraitProps {
  race: RaceId;
  size?: number;
  className?: string;
}

export const RacePortrait: React.FC<RacePortraitProps> = ({ race, size = 52, className = '' }) => {
  // SVG avatars styled after the WoW Character Creation Portraits in the user's screenshot
  switch (race) {
    case 'human':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#1e1812" />
          <path d="M14 20 Q32 4 50 20 Q54 44 48 54 Q40 50 32 50 Q24 50 16 54 Z" fill="#d49b38" />
          <path d="M22 24 Q32 20 42 24 Q44 42 32 48 Q20 42 22 24 Z" fill="#f2c8a0" />
          <circle cx="27" cy="30" r="2.5" fill="#3b7a57" />
          <circle cx="37" cy="30" r="2.5" fill="#3b7a57" />
          <circle cx="28" cy="29" r="0.8" fill="#ffffff" />
          <circle cx="38" cy="29" r="0.8" fill="#ffffff" />
          <path d="M31 35 L33 35 L32 37 Z" fill="#d99a77" />
          <path d="M28 41 Q32 44 36 41" stroke="#c45d58" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M16 20 Q30 10 38 18 Q46 12 48 24 Q44 18 36 18 Q26 16 16 28 Z" fill="#f5c258" />
        </svg>
      );

    case 'dwarf':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#18130d" />
          <path d="M12 22 Q32 6 52 22 Q56 46 50 56 Q40 52 32 52 Q24 52 14 56 Z" fill="#b84d18" />
          <path d="M20 25 Q32 20 44 25 Q46 44 32 49 Q18 44 20 25 Z" fill="#e8b890" />
          <circle cx="26" cy="31" r="3" fill="#4d7c38" />
          <circle cx="38" cy="31" r="3" fill="#4d7c38" />
          <circle cx="27" cy="30" r="1" fill="#ffffff" />
          <circle cx="39" cy="30" r="1" fill="#ffffff" />
          <ellipse cx="32" cy="37" rx="3.5" ry="2.5" fill="#cf916b" />
          <path d="M27 42 Q32 46 37 42" stroke="#a84338" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="16" cy="36" r="4" fill="#cc5a22" />
          <circle cx="48" cy="36" r="4" fill="#cc5a22" />
        </svg>
      );

    case 'night_elf':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#120e1c" />
          <path d="M8 26 L22 30 L16 38 Z" fill="#8a6ba8" />
          <path d="M56 26 L42 30 L48 38 Z" fill="#8a6ba8" />
          <path d="M14 18 Q32 4 50 18 Q54 48 48 58 Q32 50 16 58 Z" fill="#0ea368" />
          <path d="M22 24 Q32 18 42 24 Q44 44 32 50 Q20 44 22 24 Z" fill="#9e80be" />
          <ellipse cx="26" cy="31" rx="3.5" ry="2" fill="#ffffff" />
          <ellipse cx="38" cy="31" rx="3.5" ry="2" fill="#ffffff" />
          <ellipse cx="26" cy="31" rx="4.5" ry="2.5" fill="none" stroke="#93c5fd" strokeWidth="1" />
          <ellipse cx="38" cy="31" rx="4.5" ry="2.5" fill="none" stroke="#93c5fd" strokeWidth="1" />
          <path d="M24 35 L26 40 L28 35" stroke="#4c1d95" strokeWidth="1.2" fill="none" />
          <path d="M36 35 L38 40 L40 35" stroke="#4c1d95" strokeWidth="1.2" fill="none" />
          <path d="M29 44 Q32 46 35 44" stroke="#6b21a8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'gnome':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#181310" />
          <path d="M10 30 Q16 26 22 32 Q18 42 12 38 Z" fill="#f0c2a8" />
          <path d="M54 30 Q48 26 42 32 Q46 42 52 38 Z" fill="#f0c2a8" />
          <circle cx="20" cy="18" r="7" fill="#f472b6" />
          <circle cx="44" cy="18" r="7" fill="#f472b6" />
          <path d="M16 20 Q32 10 48 20 Q50 36 44 48 Q32 46 20 48 Z" fill="#ec4899" />
          <path d="M22 26 Q32 22 42 26 Q44 44 32 48 Q20 44 22 26 Z" fill="#f5cfb8" />
          <circle cx="27" cy="33" r="4" fill="#10b981" />
          <circle cx="37" cy="33" r="4" fill="#10b981" />
          <circle cx="28" cy="32" r="1.5" fill="#ffffff" />
          <circle cx="38" cy="32" r="1.5" fill="#ffffff" />
          <ellipse cx="32" cy="39" rx="2" ry="1.5" fill="#d98270" />
          <path d="M29 43 Q32 45 35 43" stroke="#b91c1c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'orc':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#181308" />
          <path d="M14 18 Q32 8 50 18 Q54 44 48 54 Q32 48 16 54 Z" fill="#1e1b24" />
          <path d="M20 22 Q32 18 44 22 Q46 44 32 50 Q18 44 20 22 Z" fill="#65a30d" />
          <circle cx="26" cy="30" r="2.5" fill="#eab308" />
          <circle cx="38" cy="30" r="2.5" fill="#eab308" />
          <circle cx="26" cy="30" r="1" fill="#7f1d1d" />
          <circle cx="38" cy="30" r="1" fill="#7f1d1d" />
          <polygon points="32,32 35,37 29,37" fill="#4d7c0f" />
          <polygon points="25,44 27,37 28,44" fill="#fef08a" />
          <polygon points="39,44 37,37 36,44" fill="#fef08a" />
          <path d="M27 43 Q32 45 37 43" stroke="#365314" strokeWidth="2" fill="none" />
        </svg>
      );

    case 'undead':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#0d1410" />
          <path d="M16 18 Q32 10 48 18 Q52 46 46 56 Q32 50 18 56 Z" fill="#134e4a" />
          <path d="M22 24 Q32 18 42 24 Q44 44 32 50 Q20 44 22 24 Z" fill="#99f6e4" />
          <circle cx="26" cy="31" r="3.5" fill="#134e4a" />
          <circle cx="38" cy="31" r="3.5" fill="#134e4a" />
          <circle cx="26" cy="31" r="1.8" fill="#facc15" />
          <circle cx="38" cy="31" r="1.8" fill="#facc15" />
          <path d="M22 36 L26 38" stroke="#115e59" strokeWidth="1.5" />
          <path d="M28 44 Q32 42 36 44" stroke="#042f2e" strokeWidth="2" fill="none" />
        </svg>
      );

    case 'tauren':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#18120c" />
          <path d="M12 28 Q8 10 2 12 Q14 16 18 22" fill="#d4c3aa" />
          <path d="M52 28 Q56 10 62 12 Q50 16 46 22" fill="#d4c3aa" />
          <path d="M18 20 Q32 14 46 20 Q48 48 32 54 Q16 48 18 20 Z" fill="#593b22" />
          <circle cx="25" cy="28" r="2.5" fill="#1c1917" />
          <circle cx="39" cy="28" r="2.5" fill="#1c1917" />
          <circle cx="25.5" cy="27.5" r="0.8" fill="#ffffff" />
          <circle cx="39.5" cy="27.5" r="0.8" fill="#ffffff" />
          <path d="M24 38 Q32 35 40 38 Q42 49 32 49 Q22 49 24 38 Z" fill="#2d1b0d" />
          <ellipse cx="28" cy="42" rx="1.5" ry="1" fill="#0c0a09" />
          <ellipse cx="36" cy="42" rx="1.5" ry="1" fill="#0c0a09" />
          <path d="M30 44 Q32 48 34 44" stroke="#facc15" strokeWidth="1.5" fill="none" />
        </svg>
      );

    case 'troll':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#0c121e" />
          <path d="M8 26 L22 32 L16 38 Z" fill="#0284c7" />
          <path d="M56 26 L42 32 L48 38 Z" fill="#0284c7" />
          <path d="M26 4 Q32 0 38 4 Q42 20 40 24 Q32 18 24 24 Z" fill="#db2777" />
          <path d="M22 24 Q32 18 42 24 Q44 44 32 52 Q20 44 22 24 Z" fill="#38bdf8" />
          <circle cx="26" cy="31" r="2.5" fill="#f97316" />
          <circle cx="38" cy="31" r="2.5" fill="#f97316" />
          <path d="M24 44 Q20 36 22 34 Q25 38 27 43" fill="#fef08a" />
          <path d="M40 44 Q44 36 42 34 Q39 38 37 43" fill="#fef08a" />
          <circle cx="14" cy="38" r="2.5" stroke="#facc15" strokeWidth="1.2" fill="none" />
        </svg>
      );

    case 'skyborn':
    default:
      // The Blue Elves (Cielonato / Skyborn) from the user's screenshot!
      // Light blue skin, pale silver/cyan hair, pointed ears, glowing amber/gold eyes
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" fill="#091326" />
          {/* Pointed Elf Ears */}
          <path d="M10 24 L22 28 L14 36 Z" fill="#60a5fa" />
          <path d="M54 24 L42 28 L50 36 Z" fill="#60a5fa" />
          {/* Pale Silver/Blue Hair */}
          <path d="M14 16 Q32 4 50 16 Q54 48 48 58 Q32 50 16 58 Z" fill="#93c5fd" />
          {/* Light Blue Skin */}
          <path d="M22 23 Q32 18 42 23 Q44 44 32 50 Q20 44 22 23 Z" fill="#7dd3fc" />
          {/* Glowing Amber / Golden Eyes from the screenshot! */}
          <ellipse cx="26" cy="30" rx="3.5" ry="2.2" fill="#fbbf24" />
          <ellipse cx="38" cy="30" rx="3.5" ry="2.2" fill="#fbbf24" />
          <ellipse cx="26" cy="30" rx="4.5" ry="2.8" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <ellipse cx="38" cy="30" rx="4.5" ry="2.8" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <circle cx="26" cy="30" r="1.2" fill="#ffffff" />
          <circle cx="38" cy="30" r="1.2" fill="#ffffff" />
          {/* Nose and ethereal smile */}
          <path d="M31 34 L33 34 L32 37 Z" fill="#38bdf8" />
          <path d="M28 42 Q32 44 36 42" stroke="#0284c7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Forehead celestial hair strands */}
          <path d="M16 16 Q28 14 34 22 Q40 14 48 18 Q38 12 32 18 Q26 12 16 16 Z" fill="#bfdbfe" />
        </svg>
      );
  }
};
