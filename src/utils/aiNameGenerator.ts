import { RaceId, Faction, Gender, Tone, GeneratedName, Language, ClassId } from '../types';
import { generateFantasyName, getRaceAllowedClasses, RACES_DATA } from '../data/namesData';

export interface GenerationResult {
  names: GeneratedName[];
  isAi: boolean;
}

/**
 * Direct client-side Gemini API caller for static hosting environments (e.g. GitHub Pages)
 * where a Node.js backend server cannot run.
 */
async function generateWithDirectGemini(
  apiKey: string,
  race: RaceId,
  faction: Faction,
  gender: Gender,
  tone: Tone,
  customPrefix?: string,
  customSuffix?: string,
  language: Language = 'es',
  count: number = 1,
  characterClass?: ClassId
): Promise<GeneratedName[]> {
  const raceInfo = RACES_DATA[race] || RACES_DATA.human;
  const raceContext = language === 'en' ? raceInfo.namingPhilosophyEn : raceInfo.namingPhilosophy;

  const prompt = `Generate 1 authentic Warcraft name.
Race: ${race} (${faction}) - ${raceContext}
${characterClass ? `Class: ${characterClass}` : ''}
Gender: ${gender}
Tone: ${tone}
Language: ${language === 'en' ? 'English' : 'Spanish'}
${customPrefix ? `Surname Prefix: "${customPrefix}"` : ''}
${customSuffix ? `Surname Suffix: "${customSuffix}"` : ''}

Rules:
- firstName: Exactly 1 single word (no spaces).
- surname: Exactly 1 single compound word (no spaces, e.g. Vadoargénteo, Doomhammer, Cielonato).
- title: Short optional title.
- meaning: 1 short sentence about the surname lore.
- suggestedClass: ${characterClass || 'Appropriate class for race'}.`;

  const callModel = async (modelName: string) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const body = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.8,
        maxOutputTokens: 220,
        responseSchema: {
          type: 'OBJECT',
          properties: {
            firstName: { type: 'STRING', description: 'First name - strictly 1 single word.' },
            surname: { type: 'STRING', description: 'Surname - strictly 1 single word.' },
            title: { type: 'STRING', description: 'Short title.' },
            meaning: { type: 'STRING', description: 'Brief surname lore meaning.' },
            suggestedClass: { type: 'STRING', description: 'WoW class.' },
          },
          required: ['firstName', 'surname', 'meaning'],
        },
      },
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Gemini direct API (${modelName}) returned status ${res.status}: ${errText}`);
    }

    return res.json();
  };

  let data;
  try {
    data = await callModel('gemini-3.8-flash');
  } catch (err) {
    console.warn('gemini-3.8-flash failed, attempting gemini-3.1-flash-lite fallback:', err);
    data = await callModel('gemini-3.1-flash-lite');
  }
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error('No candidate content returned from Gemini');

  const parsed = JSON.parse(rawText);
  const items = Array.isArray(parsed) ? parsed : [parsed];
  const allowedClasses = getRaceAllowedClasses(race, faction);

  return items.map((item: any) => {
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
}

/**
 * Generates fantasy names using:
 * 1. Server-side proxy route (/api/generate-fantasy-name) if backend is running.
 * 2. Direct Gemini client-side API call (VITE_GEMINI_API_KEY) on static hosting like GitHub Pages.
 * 3. Local canonical lore generator fallback if no API is available or errors occur.
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
  // Strategy 1: Attempt local/production server endpoint
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

    if (res.ok) {
      const data = await res.json();
      if (data.names && Array.isArray(data.names) && data.names.length > 0) {
        const allowedClasses = getRaceAllowedClasses(race, faction);

        const parsed: GeneratedName[] = data.names.map((item: any) => {
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
    }
  } catch {
    // Server endpoint not reachable (typical on static GitHub Pages)
  }

  // Strategy 2: If on static hosting, use client-side VITE_GEMINI_API_KEY if configured
  const clientKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();
  if (clientKey && clientKey !== 'MY_GEMINI_API_KEY' && clientKey.length > 10) {
    try {
      const names = await generateWithDirectGemini(
        clientKey,
        race,
        faction,
        gender,
        tone,
        customPrefix,
        customSuffix,
        language,
        count,
        characterClass
      );
      if (names.length > 0) {
        return { names, isAi: true };
      }
    } catch (directErr) {
      console.warn('Direct client Gemini generation failed:', directErr);
    }
  }

  // Strategy 3: Seamless fallback to local canonical Warcraft lore engine
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
