import { RaceId, Faction, Gender, Tone, GeneratedName, Language, ClassId } from '../types';
import { generateFantasyName, getRaceAllowedClasses } from '../data/namesData';

export interface GenerationResult {
  names: GeneratedName[];
  isAi: boolean;
}

/**
 * Generates fantasy names using the server-side Gemini AI model with
 * automatic, seamless fallback to the local canonical generator.
 */
export async function generateNamesWithAI(
  race: RaceId,
  faction: Faction,
  gender: Gender,
  tone: Tone,
  customPrefix?: string,
  customSuffix?: string,
  language: Language = 'es',
  count: number = 1,
  characterClass?: ClassId
): Promise<GenerationResult> {
  try {
    const res = await fetch('/api/generate-fantasy-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        race,
        faction,
        gender,
        tone,
        characterClass,
        customPrefix: customPrefix?.trim() || undefined,
        customSuffix: customSuffix?.trim() || undefined,
        language,
        count,
      }),
    });

    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data = await res.json();

    if (data.names && Array.isArray(data.names) && data.names.length > 0) {
      const allowedClasses = getRaceAllowedClasses(race, faction);

      const parsed: GeneratedName[] = data.names.map((item: any) => {
        // Enforce strictly 1 single word without spaces
        const cleanFirst = String(item.firstName || 'Heroe').replace(/\s+/g, '');
        const cleanSur = String(item.surname || 'Forjador').replace(/\s+/g, '');

        let suggested = characterClass || item.suggestedClass;
        if (!allowedClasses.includes(suggested)) {
          suggested = allowedClasses[Math.floor(Math.random() * allowedClasses.length)];
        }

        return {
          id: `ai-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          firstName: cleanFirst,
          surname: cleanSur,
          fullName: `${cleanFirst} ${cleanSur}`,
          title: item.title ? String(item.title).trim() : undefined,
          race,
          faction,
          gender,
          tone,
          meaning: String(item.meaning || ''),
          lineageNote: String(item.lineageNote || ''),
          suggestedClass: suggested,
          createdAt: Date.now(),
        };
      });

      return { names: parsed, isAi: true };
    }

    throw new Error('Invalid format returned by AI model');
  } catch (error) {
    // Seamless fallback to canonical generator
    console.info('Using local canonical fantasy name engine fallback:', error);
    const fallbackList: GeneratedName[] = [];
    for (let i = 0; i < count; i++) {
      fallbackList.push(
        generateFantasyName(
          race,
          gender,
          tone,
          customPrefix,
          customSuffix,
          language,
          faction,
          characterClass
        )
      );
    }
    return { names: fallbackList, isAi: false };
  }
}
