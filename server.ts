import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Race context descriptions to guide AI in authentic WoW naming lore
const RACE_LORE: Record<string, { es: string; en: string }> = {
  human: {
    es: 'Humanos de Ventormenta y Lordaeron: nombres medievales de fantasía heroica. Apellido compuesto de una sola palabra que refleja hazañas nobles, la Luz o lugares de origen (ej: Vadoargénteo, Guardasol, Vientorruna).',
    en: 'Humans of Stormwind and Lordaeron: noble high-fantasy medieval names. Single-word compound surnames reflecting heroic feats, holy Light, or origins (e.g. Silverford, Sunshield, Stormstride).',
  },
  dwarf: {
    es: 'Enanos de Forjaz: nombres nórdicos y célticos. Apellido compuesto de una sola palabra sobre forja, yunque, piedra, montaña o clan (ej: Barbapiedra, Bramamartillo, Forjapiedra).',
    en: 'Dwarves of Ironforge: Norse and Celtic fantasy names. Single-word compound surnames reflecting anvil, forge, stone, or clan deeds (e.g. Stonebeard, Thunderhammer, Ironforge).',
  },
  night_elf: {
    es: 'Elfos de la Noche (Kaldorei): nombres líricos en darnassiano. Apellido compuesto poético de una sola palabra sobre luna, estrellas, sombras, arboledas o viento (ej: Susurravientos, Cantoluna, Plumalunar).',
    en: 'Night Elves (Kaldorei): lyrical Darnassian names. Single-word poetic surnames invoking moon, stars, shadows, grove, or winds (e.g. Whisperwind, Moonrunner, Shadowsong).',
  },
  gnome: {
    es: 'Gnomos de Gnomeregan: nombres vivaces y excéntricos. Apellido compuesto de una sola palabra sobre engranajes, vapor, muelles, chispas o artilugios (ej: Chispatuerca, Girovapor, Muelleloco).',
    en: 'Gnomes of Gnomeregan: quirky and energetic names. Single-word compound surnames about gears, steam, springs, sparks, or gadgets (e.g. Sparkcog, Steamgear, Fizzlespring).',
  },
  orc: {
    es: 'Orcos de Draenor y Orgrimmar: nombres guturales fuertes. Apellido compuesto de una sola palabra ganado como hazaña bélica o clan (ej: Martillomaldito, Gritoinfernal, Rompehuesos).',
    en: 'Orcs of Draenor and Durotar: strong guttural names. Single-word deed-names earned in battle or legendary clans (e.g. Doomhammer, Hellscream, Skullcrusher).',
  },
  undead: {
    es: 'Renegados / No-muertos: antiguos nombres humanos. Apellido compuesto de una sola palabra tétrico sobre criptas, muerte, sombras, peste o frialdad (ej: Tumbanegra, Pestepudrida, Mortajasombría).',
    en: 'Forsaken / Undead: former human names. Single-word grim compound surnames about crypts, rot, shadows, plague, or cold (e.g. Graveshade, Rottenbone, Darkveil).',
  },
  tauren: {
    es: 'Tauren de Mulgore: nombres solemnes y majestuosos. Apellido compuesto totémico de una sola palabra sobre tierra, pezuñas, cuernos, tótems o ancestros (ej: Pezuñasangre, Tótembravo, Astafiel).',
    en: 'Tauren of Mulgore: solemn and nature-grounded names. Single-word totemic surnames derived from earth, hooves, horns, totems, or ancestors (e.g. Bloodhoof, Thunderhorn, Earthwalker).',
  },
  troll: {
    es: 'Troles Lanza Negra: nombres rituales con apóstrofes o sílabas místicas. Apellido compuesto de una sola palabra otorgado por los Loa o ritos de caza (ej: Lanzanegra, Dientevudú, Sombraselva).',
    en: 'Darkspear Trolls: ritualistic names. Single-word surnames given by Loa spirits or jungle hunting rites (e.g. Darkspear, Voodootooth, Hexspitter).',
  },
  skyborn: {
    es: 'Cielonatos (Elfos Azules): nueva raza etérea de piel azul y ojos dorados/ámbar. Apellido compuesto de una sola palabra sobre el cielo, vientos, nubes, brisas, luz estelar o el firmamento (ej: Cielonato, Formavientos, Alaceleste, Vientoeterno).',
    en: 'Skyborn (Blue Elves): new ethereal race with cyan/blue skin and radiant amber eyes. Single-word compound surnames evoking sky, wind currents, clouds, starlight, or celestial flight (e.g. Skyborn, Windshaper, Cloudstrider, Stormwing).',
  },
};

// API endpoint for AI fantasy name generation
app.post('/api/generate-fantasy-name', async (req, res) => {
  try {
    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on server',
        fallback: true,
      });
    }

    const {
      race = 'human',
      faction = 'alliance',
      gender = 'male',
      tone = 'all',
      language = 'es',
      characterClass,
      customPrefix,
      customSuffix,
      count = 1,
    } = req.body;

    const lore = RACE_LORE[race] || RACE_LORE.human;
    const raceContext = language === 'en' ? lore.en : lore.es;

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
- meaning: 1 short sentence about the surname.
- suggestedClass: ${characterClass || 'Appropriate class for race'}.`;

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          systemInstruction:
            'Fast Warcraft name forge. Output valid JSON. Strictly 1 single word for firstName and 1 single word for surname (no spaces).',
          responseMimeType: 'application/json',
          maxOutputTokens: 1500,
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              firstName: {
                type: Type.STRING,
                description: 'First name - strictly 1 single word.',
              },
              surname: {
                type: Type.STRING,
                description: 'Surname - strictly 1 single word.',
              },
              title: {
                type: Type.STRING,
                description: 'Short title.',
              },
              meaning: {
                type: Type.STRING,
                description: 'Brief surname lore meaning.',
              },
              suggestedClass: {
                type: Type.STRING,
                description: 'WoW class.',
              },
            },
            required: ['firstName', 'surname', 'meaning'],
          },
        },
      });
    } catch {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'Fast Warcraft name forge. Output valid JSON. Strictly 1 single word for firstName and 1 single word for surname.',
          responseMimeType: 'application/json',
          maxOutputTokens: 1500,
        },
      });
    }

    let text = response.text?.trim() || '{}';
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace >= firstBrace) {
      text = text.substring(firstBrace, lastBrace + 1);
    }
    const parsed = JSON.parse(text);
    const names = Array.isArray(parsed) ? parsed : [parsed];

    return res.json({ names });
  } catch (error: any) {
    console.error('Server error generating names with Gemini:', error);
    return res.status(500).json({
      error: error.message || 'Error generating names with AI',
      fallback: true,
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey) });
});

// Vite middleware in dev or static files in prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
