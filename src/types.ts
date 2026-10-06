export type Faction = 'alliance' | 'horde' | 'neutral';

export type Language = 'es' | 'en';

export type RaceId =
  | 'human'
  | 'orc'
  | 'night_elf'
  | 'undead'
  | 'dwarf'
  | 'tauren'
  | 'gnome'
  | 'troll'
  | 'skyborn';

export type ClassId =
  | 'warrior'
  | 'paladin'
  | 'hunter'
  | 'rogue'
  | 'priest'
  | 'shaman'
  | 'mage'
  | 'warlock'
  | 'druid';

export type Gender = 'male' | 'female' | 'neutral';

export type Tone =
  | 'all'
  | 'heroic'
  | 'dark'
  | 'ancestral'
  | 'arcane'
  | 'wild'
  | 'eccentric';

export interface RaceInfo {
  id: RaceId;
  name: string;
  nameEn: string;
  faction: Faction;
  capital: string;
  capitalEn: string;
  capitalAlliance?: string;
  capitalAllianceEn?: string;
  capitalHorde?: string;
  capitalHordeEn?: string;
  leader?: string;
  leaderEn?: string;
  description: string;
  descriptionEn: string;
  namingPhilosophy: string;
  namingPhilosophyEn: string;
  allowedClasses: ClassId[];
  crestColor: string;
  iconSymbol: string;
}

export interface ClassInfo {
  id: ClassId;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  color: string;
  description: string;
  descriptionEn: string;
  specs: string[];
  specsEn: string[];
  primaryStat: string;
  icon: string;
}

export interface GeneratedName {
  id: string;
  firstName: string;
  surname: string;
  fullName: string;
  title?: string;
  race: RaceId;
  faction: Faction;
  gender: Gender;
  tone: Tone;
  meaning: string;
  lineageNote: string;
  suggestedClass?: ClassId;
  createdAt: number;
}

export interface SavedCharacter extends GeneratedName {
  customNotes?: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  prompt: string;
  promptEn: string;
  quote?: string;
  options: {
    id: string;
    text: string;
    textEn: string;
    flavor: string;
    flavorEn: string;
    raceAffinity: Partial<Record<RaceId, number>>;
    classAffinity: Partial<Record<ClassId, number>>;
    factionTendency?: Faction;
  }[];
}

export interface QuizResult {
  primaryRace: RaceId;
  primaryClass: ClassId;
  matchScore: number;
  archetypeTitle: string;
  archetypeTitleEn: string;
  roleplayHook: string;
  roleplayHookEn: string;
  virtues: string[];
  virtuesEn: string[];
  vulnerabilities: string[];
  vulnerabilitiesEn: string[];
  recommendedSpecs: string[];
  recommendedSpecsEn: string[];
  faction: Faction;
  runnerUps: {
    race: RaceId;
    class: ClassId;
    score: number;
  }[];
}
