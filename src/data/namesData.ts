import { RaceId, RaceInfo, ClassId, ClassInfo, Gender, Tone, GeneratedName, Faction, Language } from '../types';

export const RACES_DATA: Record<RaceId, RaceInfo> = {
  human: {
    id: 'human',
    name: 'Humano',
    nameEn: 'Human',
    faction: 'alliance',
    capital: 'Ventormenta',
    capitalEn: 'Stormwind',
    leader: 'Varian Wrynn (Regente: Bolvar Fordragon)',
    leaderEn: 'Varian Wrynn (Regent: Bolvar Fordragon)',
    description: 'Resilientes, nobles y tenaces. Los humanos fundaron la Alianza y portan con orgullo la herencia del reino caído de Lordaeron y Ventormenta.',
    descriptionEn: 'Resilient, noble, and tenacious. Humans forged the Alliance and proudly bear the legacy of Lordaeron and Stormwind.',
    namingPhilosophy: 'Nombres medievales con apellidos compuestos que reflejan hazañas heroicas, virtudes de la Luz o lugares de origen.',
    namingPhilosophyEn: 'Medieval names with compound single-word surnames reflecting heroic deeds, holy virtues, or ancestral origins.',
    allowedClasses: ['warrior', 'rogue', 'hunter', 'paladin', 'priest', 'mage', 'warlock'],
    crestColor: '#3b82f6',
    iconSymbol: '🦁',
  },
  dwarf: {
    id: 'dwarf',
    name: 'Enano',
    nameEn: 'Dwarf',
    faction: 'alliance',
    capital: 'Forjaz',
    capitalEn: 'Ironforge',
    leader: 'Magni Barbabronce',
    leaderEn: 'Magni Bronzebeard',
    description: 'Hijos de los Titanes nacidos de la roca viva. Maestros artesanos del metal, arqueólogos implacables y guerreros de la montaña.',
    descriptionEn: 'Children of the Titans born from living stone. Master metalsmiths, relentless archaeologists, and sturdy mountain warriors.',
    namingPhilosophy: 'Nombres nórdicos y célticos con apellidos compuestos de una sola palabra que honran la forja, el yunque y los metales.',
    namingPhilosophyEn: 'Nordic and Celtic names with single-word compound surnames honoring the forge, anvil, stone, and battle prowess.',
    allowedClasses: ['warrior', 'rogue', 'hunter', 'paladin', 'priest', 'shaman', 'mage', 'warlock'],
    crestColor: '#f59e0b',
    iconSymbol: '🔨',
  },
  night_elf: {
    id: 'night_elf',
    name: 'Elfo de la noche',
    nameEn: 'Night Elf',
    faction: 'alliance',
    capital: 'Darnassus',
    capitalEn: 'Darnassus',
    leader: 'Tyrande Susurravientos',
    leaderEn: 'Tyrande Whisperwind',
    description: 'Antiguos protectores inmortales de Kalimdor, devotos de la diosa Elune y guardianes de las arboledas del Sueño Esmeralda.',
    descriptionEn: 'Ancient immortal protectors of Kalimdor, devoted to the goddess Elune and guardians of the Emerald Dream.',
    namingPhilosophy: 'Nombres líricos en darnassiano combinados con apellidos poéticos de una sola palabra que invocan la luna, estrellas y viento.',
    namingPhilosophyEn: 'Lyrical Darnassian names paired with single-word poetic compounds evoking the moon, stars, winds, and nocturnal beasts.',
    allowedClasses: ['warrior', 'rogue', 'hunter', 'priest', 'druid', 'mage'],
    crestColor: '#8b5cf6',
    iconSymbol: '🌙',
  },
  gnome: {
    id: 'gnome',
    name: 'Gnomo',
    nameEn: 'Gnome',
    faction: 'alliance',
    capital: 'Gnomeregan (Refugiados en Forjaz - Distrito de los Chatarreros)',
    capitalEn: 'Gnomeregan (Refugees in Ironforge - Tinker Town)',
    leader: 'Gelbin Mekkatorque',
    leaderEn: 'Gelbin Mekkatorque',
    description: 'Mentes científicas brillantes y diminutas. Diseñan maravillas de ingeniería a vapor, láseres y girocópteros con entusiasmo explosivo.',
    descriptionEn: 'Brilliant and diminutive scientific minds. Master engineers of steamworks, gyro-copters, and whimsical inventions.',
    namingPhilosophy: 'Nombres enérgicos con apellidos compuestos que describen piezas mecánicas, invenciones extraordinarias o fallos ruidosos.',
    namingPhilosophyEn: 'Energetic names with compound surnames describing engineering parts, ingenious gadgets, or explosive mishaps.',
    allowedClasses: ['warrior', 'rogue', 'mage', 'warlock', 'priest', 'hunter'],
    crestColor: '#06b6d4',
    iconSymbol: '⚙️',
  },
  orc: {
    id: 'orc',
    name: 'Orco',
    nameEn: 'Orc',
    faction: 'horde',
    capital: 'Orgrimmar',
    capitalEn: 'Orgrimmar',
    leader: 'Thrall',
    leaderEn: 'Thrall',
    description: 'Guerreros feroces de Draenor con un profundo sentido del honor marcial, comunión chamánica y hermandad de sangre.',
    descriptionEn: 'Fierce warriors of Draenor with a deep sense of martial honor, shamanic communion, and blood brotherhood.',
    namingPhilosophy: 'Nombres guturales fuertes. Apellidos de una sola palabra ganados como hazaña bélica o heredados de clanes legendarios.',
    namingPhilosophyEn: 'Strong guttural names with single-word deed-names earned in battle or inherited from legendary clans.',
    allowedClasses: ['warrior', 'hunter', 'mage', 'rogue', 'warlock', 'shaman'],
    crestColor: '#dc2626',
    iconSymbol: '⚔️',
  },
  undead: {
    id: 'undead',
    name: 'No-muerto',
    nameEn: 'Undead',
    faction: 'horde',
    capital: 'Entrañas',
    capitalEn: 'Undercity',
    leader: 'Sylvanas Brisaveloz',
    leaderEn: 'Sylvanas Windrunner',
    description: 'Humanos que rompieron el yugo del Rey Exánime. Viven en las sombras con una voluntad de hierro y una lealtad a su supervivencia.',
    descriptionEn: 'Humans who broke free from the Lich King\'s grasp. Resilient survivors bound by iron will and dark perseverance.',
    namingPhilosophy: 'Nombres humanos adaptados con apellidos tétricos de una sola palabra que recuerdan la cripta, la peste y la noche eterna.',
    namingPhilosophyEn: 'Former human names paired with grim single-word epithets recalling the grave, cold shadows, and dark rebirth.',
    allowedClasses: ['warrior', 'mage', 'rogue', 'priest', 'warlock', 'paladin'],
    crestColor: '#10b981',
    iconSymbol: '💀',
  },
  tauren: {
    id: 'tauren',
    name: 'Tauren',
    nameEn: 'Tauren',
    faction: 'horde',
    capital: 'Cima del Trueno',
    capitalEn: 'Thunder Bluff',
    leader: 'Cairne Pezuña de Sangre',
    leaderEn: 'Cairne Bloodhoof',
    description: 'Nobles gigantes pacíficos pero temibles en batalla. Dedicados al culto de la Madre Tierra y al equilibrio sagrado de los vientos.',
    descriptionEn: 'Noble giants peaceful by nature but unstoppable in battle. Reverent servants of the Earth Mother and open plains.',
    namingPhilosophy: 'Nombres solemnes con apellidos totémicos de una sola palabra basados en animales sagrados, astros y ancestros.',
    namingPhilosophyEn: 'Solemn names with single-word totemic surnames derived from sacred beasts, the sun, thunder, and ancestors.',
    allowedClasses: ['warrior', 'hunter', 'druid', 'shaman'],
    crestColor: '#b45309',
    iconSymbol: '🦬',
  },
  troll: {
    id: 'troll',
    name: 'Trol',
    nameEn: 'Troll',
    faction: 'horde',
    capital: 'Orgrimmar (Poblado de Sen\'jin)',
    capitalEn: 'Orgrimmar (Sen\'jin Village)',
    leader: 'Vol\'jin',
    leaderEn: 'Vol\'jin',
    description: 'Supervivientes astutos con conexiones místicas con los espíritus Loa, dominio de las sombras y el vudú sagrado de la jungla.',
    descriptionEn: 'Cunning jungle stalkers with mystical bonds to animal Loa spirits, voodoo rituals, and unmatched tribal prowess.',
    namingPhilosophy: 'Nombres con prefijos rituales combinados con apellidos de una sola palabra otorgados por los Loa o ritos de caza.',
    namingPhilosophyEn: 'Rhythmic names with single-word surnames bestowed by Loa spirits or jungle hunting feats.',
    allowedClasses: ['warrior', 'hunter', 'mage', 'rogue', 'priest', 'warlock', 'shaman'],
    crestColor: '#14b8a6',
    iconSymbol: '🪶',
  },
  skyborn: {
    id: 'skyborn',
    name: 'Cielonatos',
    nameEn: 'Skyborne',
    faction: 'neutral',
    capital: 'Dalaran (Alianza) / El Círculo de la Tierra (Horda)',
    capitalEn: 'Dalaran (Alliance) / The Earthen Ring (Horde)',
    capitalAlliance: 'Dalaran',
    capitalAllianceEn: 'Dalaran',
    capitalHorde: 'El Círculo de la Tierra',
    capitalHordeEn: 'The Earthen Ring',
    description: 'Seres celestiales de las altas cumbres con piel etérea y ojos de ámbar radiante. No poseen una ciudad capital única ni líder soberano debido a su división espiritual: la vertiente de la Alianza se asienta en Dalaran dominando las artes arcanas (Magos), mientras que la de la Horda tiene su centro de reunión en El Círculo de la Tierra canalizando las tempestades (Chamanes).',
    descriptionEn: 'Celestial beings of the high summits with ethereal skin and radiant amber eyes. They hold no single sovereign capital or supreme leader due to their spiritual divergence: the Alliance branch establishes its seat in Dalaran mastering the arcane (Mage), while the Horde branch convenes at The Earthen Ring channeling the storm elements (Shaman).',
    namingPhilosophy: 'Nombres etéreos combinados con apellidos de una sola palabra que invocan el cielo, la brisa, el vuelo y la luz cenital.',
    namingPhilosophyEn: 'Ethereal melodic names paired with single-word compounds invoking the sky, wind currents, and stellar radiance.',
    allowedClasses: ['warrior', 'hunter', 'rogue', 'druid', 'mage', 'shaman'],
    crestColor: '#38bdf8',
    iconSymbol: '⚡',
  },
};

/**
 * Returns allowed classes taking faction into account (especially for Skyborne:
 * Alliance has Mage; Horde has Shaman; both have Warrior, Hunter, Rogue, Druid).
 */
export function getRaceAllowedClasses(raceId: RaceId, faction: Faction = 'alliance'): ClassId[] {
  if (raceId === 'skyborn') {
    if (faction === 'horde') {
      return ['warrior', 'hunter', 'rogue', 'druid', 'shaman'];
    }
    return ['warrior', 'hunter', 'rogue', 'druid', 'mage'];
  }
  return RACES_DATA[raceId].allowedClasses;
}

export const CLASSES_DATA: Record<ClassId, ClassInfo> = {
  warrior: {
    id: 'warrior',
    name: 'Guerrero',
    nameEn: 'Warrior',
    role: 'Tanque / Daño Cuerpo a Cuerpo',
    roleEn: 'Tank / Melee Damage',
    color: '#C79C6E',
    description: 'Señor del combate físico, forjado en la disciplina marcial y enfurecido por el fragor de la batalla. Porta armaduras de placas pesadas.',
    descriptionEn: 'Master of physical combat, forged in martial discipline and empowered by rage. Wields heavy plate armor.',
    specs: ['Armas', 'Furia', 'Protección'],
    specsEn: ['Arms', 'Fury', 'Protection'],
    primaryStat: 'Fuerza',
    icon: '🛡️',
  },
  paladin: {
    id: 'paladin',
    name: 'Paladín',
    nameEn: 'Paladin',
    role: 'Tanque / Sanador / Daño Melee',
    roleEn: 'Tank / Healer / Melee Damage',
    color: '#F58CBA',
    description: 'Defensor devoto de la Luz Sagrada. Imbuye sus armas con justicia divina, escuda a sus aliados y purga las sombras.',
    descriptionEn: 'Devout defender of the Holy Light. Infuses weapons with divine justice, shields allies, and purges darkness.',
    specs: ['Sagrado', 'Protección', 'Reprensión'],
    specsEn: ['Holy', 'Protection', 'Retribution'],
    primaryStat: 'Fuerza / Intelecto',
    icon: '✨',
  },
  hunter: {
    id: 'hunter',
    name: 'Cazador',
    nameEn: 'Hunter',
    role: 'Daño a Distancia / Supervivencia',
    roleEn: 'Ranged Damage / Survival',
    color: '#ABD473',
    description: 'Rastreador insuperable de las tierras salvajes. Lucha hombro con hombro con bestias adiestradas y dispara con precisión letal.',
    descriptionEn: 'Unrivaled tracker of wilderness. Fights alongside tamed beasts and strikes with deadly precision.',
    specs: ['Dominio de Bestias', 'Puntería', 'Supervivencia'],
    specsEn: ['Beast Mastery', 'Marksmanship', 'Survival'],
    primaryStat: 'Agilidad',
    icon: '🏹',
  },
  rogue: {
    id: 'rogue',
    name: 'Pícaro',
    nameEn: 'Rogue',
    role: 'Daño Furtivo Cuerpo a Cuerpo',
    roleEn: 'Stealth Melee Damage',
    color: '#FFF569',
    description: 'Asesino letal de las sombras y maestro de venenos. Ataca cuando el enemigo menos lo espera y se desvanece en el aire.',
    descriptionEn: 'Lethal assassin of shadows and master of poisons. Strikes from stealth and vanishes without a trace.',
    specs: ['Asesinato', 'Forajido', 'Sutileza'],
    specsEn: ['Assassination', 'Outlaw', 'Subtlety'],
    primaryStat: 'Agilidad',
    icon: '🗡️',
  },
  priest: {
    id: 'priest',
    name: 'Sacerdote',
    nameEn: 'Priest',
    role: 'Sanador / Daño Mágico a Distancia',
    roleEn: 'Healer / Ranged Magic Damage',
    color: '#FFFFFF',
    description: 'Canalizador de las dos caras del cosmos: la sanación devota de la Luz y la corrupción insidiosa de las Sombras.',
    descriptionEn: 'Wielder of cosmic duality: devoted holy healing and the insidious corruptive whispers of Shadow.',
    specs: ['Disciplina', 'Sagrado', 'Sombras'],
    specsEn: ['Discipline', 'Holy', 'Shadow'],
    primaryStat: 'Intelecto',
    icon: '🕊️',
  },
  shaman: {
    id: 'shaman',
    name: 'Chamán',
    nameEn: 'Shaman',
    role: 'Sanador / Daño a Distancia o Melee',
    roleEn: 'Healer / Ranged or Melee Damage',
    color: '#0070DE',
    description: 'Mediador supremo con los espíritus de la tierra, fuego, agua y aire. Clava tótems sagrados y descarga relámpagos.',
    descriptionEn: 'Supreme mediator with the spirits of earth, fire, water, and air. Summons totems and unleashes lightning.',
    specs: ['Elemental', 'Mejora', 'Restauración'],
    specsEn: ['Elemental', 'Enhancement', 'Restoration'],
    primaryStat: 'Intelecto / Agilidad',
    icon: '⚡',
  },
  mage: {
    id: 'mage',
    name: 'Mago',
    nameEn: 'Mage',
    role: 'Daño Mágico a Distancia',
    roleEn: 'Ranged Magic Damage',
    color: '#40C7EB',
    description: 'Erudito de las artes arcanas capaz de doblar el tiempo, desatar tormentas de escarcha congelante e incinerar con fuego.',
    descriptionEn: 'Scholar of the arcane capable of bending time, conjuring blizzards, and incinerating foes with fireballs.',
    specs: ['Arcano', 'Fuego', 'Escarcha'],
    specsEn: ['Arcane', 'Fire', 'Frost'],
    primaryStat: 'Intelecto',
    icon: '🔮',
  },
  warlock: {
    id: 'warlock',
    name: 'Brujo',
    nameEn: 'Warlock',
    role: 'Daño Mágico / Maldiciones & Demonios',
    roleEn: 'Ranged Magic / Curses & Demons',
    color: '#8787ED',
    description: 'Practicante de magia vil prohibida. Somete demonios de la Legión Ardiente a su voluntad y drena almas.',
    descriptionEn: 'Practitioner of forbidden fel magic. Commands demonic minions and drains the souls of enemies.',
    specs: ['Aflicción', 'Demonología', 'Destrucción'],
    specsEn: ['Affliction', 'Demonology', 'Destruction'],
    primaryStat: 'Intelecto',
    icon: '🔥',
  },
  druid: {
    id: 'druid',
    name: 'Druida',
    nameEn: 'Druid',
    role: 'Híbrido (Tanque / Sanador / Daño)',
    roleEn: 'Hybrid (Tank / Healer / Damage)',
    color: '#FF7D0A',
    description: 'Guardián mutaformas de la naturaleza. Puede convertirse en oso férreo, felino sigiloso o lechúcico lunar.',
    descriptionEn: 'Shapeshifting guardian of nature. Transforms into bear, cat, travel form, or moonkin to protect the wild.',
    specs: ['Equilibrio', 'Feral', 'Guardián', 'Restauración'],
    specsEn: ['Balance', 'Feral', 'Guardian', 'Restoration'],
    primaryStat: 'Agilidad / Intelecto',
    icon: '🌿',
  },
};

// Bilingual Name Datasets
interface RaceNamePoolBilingual {
  maleFirst: string[];
  femaleFirst: string[];
  neutralFirst: string[];
  // Spanish naming sets
  surnamePrefixesEs: string[];
  surnameSuffixesEs: string[];
  fixedSurnamesEs: { name: string; meaning: string }[];
  meaningsEs: string[];
  // English naming sets
  surnamePrefixesEn: string[];
  surnameSuffixesEn: string[];
  fixedSurnamesEn: { name: string; meaning: string }[];
  meaningsEn: string[];
  honorificTitlesEs: string[];
  honorificTitlesEn: string[];
}

export const RACE_NAME_POOLS: Record<RaceId, RaceNamePoolBilingual> = {
  human: {
    maleFirst: [
      'Anduin', 'Turalyon', 'Danath', 'Reginald', 'Gavin', 'Beric', 'Sterling', 'Cedric',
      'Valdemar', 'Lucan', 'Aldous', 'Gareth', 'Jared', 'Morwen', 'Roderick', 'Rowan',
      'Tobias', 'Alonsus', 'Leopold', 'Balian', 'Thorne', 'Corwin', 'Mathias', 'Gregor'
    ],
    femaleFirst: [
      'Jaina', 'Calia', 'Brigitte', 'Lianne', 'Aleria', 'Evelyn', 'Claire', 'Gwen',
      'Morgana', 'Rosalind', 'Teresa', 'Valerie', 'Isolde', 'Beatrice', 'Helena', 'Eleanor',
      'Marianne', 'Katelyn', 'Yvaine', 'Astrid', 'Cecilia', 'Gwendolyn', 'Lynette', 'Sybilla'
    ],
    neutralFirst: ['Robin', 'Morgan', 'Avery', 'Rowan', 'Kendall', 'Darcy', 'Quinn', 'Ellis'],
    surnamePrefixesEs: ['Vado', 'Cresta', 'Halcon', 'Piedra', 'Espada', 'Corona', 'Hierro', 'Valle', 'Brisa', 'Roble', 'Leon', 'Luz', 'Acero'],
    surnameSuffixesEs: ['argenteo', 'blanca', 'noble', 'bravo', 'real', 'valiente', 'fiel', 'solar', 'dorado', 'mayor', 'austero'],
    fixedSurnamesEs: [
      { name: 'Fordragon', meaning: 'Heredero de la antigua guardia del dragón de Ventormenta' },
      { name: 'Proudmoore', meaning: 'Aterramares: Gran linaje naval de Kul Tiras' },
      { name: 'Lothbrok', meaning: 'Portador de la capa sagrada de la hermandad' },
      { name: 'Vadoargenteo', meaning: 'Familia oriunda del cruce brillante de Trabalomas' },
      { name: 'Brisagrante', meaning: 'Linaje noble de la costa del Bosque de Elwynn' },
      { name: 'Coronadeluz', meaning: 'Antigua orden de cruzados de la Mano de Plata' },
      { name: 'Crestablanca', meaning: 'Descendientes de las cumbres nevadas de Montañas de Crestagrana' },
      { name: 'Halconacero', meaning: 'Casa militar de exploradores y guardias de muralla' },
      { name: 'Escudoroble', meaning: 'Defensores centenarios de las granjas de Páramos de Poniente' }
    ],
    meaningsEs: [
      'Refleja virtud inquebrantable y linaje devoto a la Alianza.',
      'Nombre forjado en los antiguos tratados feudales de Lordaeron.',
      'Sello de honor otorgado tras defender la capital contra la invasión.',
      'Noble apellido transmitido a través de generaciones de soldados libres.'
    ],
    surnamePrefixesEn: ['Silver', 'Storm', 'Stone', 'Iron', 'White', 'Light', 'Gold', 'High', 'Oak', 'Hawk', 'Lion', 'Bright'],
    surnameSuffixesEn: ['stream', 'wind', 'bridge', 'crest', 'shield', 'ford', 'dale', 'vale', 'hall', 'guard', 'wood', 'more'],
    fixedSurnamesEn: [
      { name: 'Proudmoore', meaning: 'Renowned naval dynasty and lord admirals of Kul Tiras' },
      { name: 'Fordragon', meaning: 'Ancient bloodline of valiant Stormwind dragon guards' },
      { name: 'Silverstream', meaning: 'Descended from the shimmering crossroads of Hillsbrad' },
      { name: 'Stormwind', meaning: 'Bearing the true namesake of the proud human kingdom' },
      { name: 'Whitecrest', meaning: 'Born of the snowy ridges of the Redridge Mountains' },
      { name: 'Lightshield', meaning: 'Ancient crusader heritage of the Silver Hand' },
      { name: 'Ironridge', meaning: 'Sturdy defenders of Westfall farmlands and frontier outposts' }
    ],
    meaningsEn: [
      'Reflects unyielding virtue and loyal lineage to the Alliance.',
      'Forged during the feudal covenants of Lordaeron.',
      'Noble surname passed down through generations of free soldiers.'
    ],
    honorificTitlesEs: ['Defensor de Ventormenta', 'Caballero de la Mano de Plata', 'Guardián del Reino'],
    honorificTitlesEn: ['Defender of Stormwind', 'Knight of the Silver Hand', 'Champion of the Realm']
  },
  dwarf: {
    maleFirst: [
      'Magni', 'Muradin', 'Brann', 'Falstad', 'Kurdran', 'Thargas', 'Torvin', 'Baelgun',
      'Hjalmar', 'Borin', 'Durgin', 'Brom', 'Thorek', 'Gimrik', 'Korgan', 'Baruk', 'Thorin'
    ],
    femaleFirst: [
      'Moira', 'Aerin', 'Thalgra', 'Belgrima', 'Griselda', 'Donna', 'Helga', 'Astrid',
      'Brynhild', 'Freya', 'Branwen', 'Sigrid', 'Hulda', 'Kara', 'Svala'
    ],
    neutralFirst: ['Khel', 'Thor', 'Brim', 'Dron', 'Gim', 'Bael', 'Rune'],
    surnamePrefixesEs: ['Barba', 'Yunque', 'Martillo', 'Pica', 'Espuma', 'Forja', 'Pico', 'Corazon', 'Rompe', 'Hacha', 'Mano', 'Piedra'],
    surnameSuffixesEs: ['bronce', 'fuego', 'salvaje', 'fria', 'amarga', 'tormentas', 'oro', 'piedra', 'escudos', 'hierro', 'runico'],
    fixedSurnamesEs: [
      { name: 'Barbabronce', meaning: 'Linaje regio de Khaz Modan que desciende de los reyes de la montaña' },
      { name: 'Yunquefuego', meaning: 'Forjadores legendarios de la Gran Forja de Forjaz' },
      { name: 'Martillosalvaje', meaning: 'Jinetes de grifos impávidos de las Tierras del Interior' },
      { name: 'Espumamarga', meaning: 'Maestros cerveceros de la ilustre Taberna de Kharanos' },
      { name: 'Piedraférrea', meaning: 'Mineros intrépidos que desentrañan vetas rúnicas en lo profundo' },
      { name: 'Forjatormentas', meaning: 'Chamán o herrero bendecido con la furia eléctrica de los cielos' },
      { name: 'Rompeescudos', meaning: 'Guerrero enano que despedaza defensas orcas de un solo impacto' }
    ],
    meaningsEs: ['Sellado en piedra viva con runas titánicas hace incontables inviernos.', 'Orgullo de clan forjado en las brasas incandescentes de la montaña nevada.'],
    surnamePrefixesEn: ['Bronze', 'Iron', 'Storm', 'Stone', 'Wild', 'Fire', 'Copper', 'Frost', 'Gold', 'Thunder'],
    surnameSuffixesEn: ['beard', 'hammer', 'forge', 'anvil', 'fist', 'shield', 'pick', 'heart', 'foam', 'axe'],
    fixedSurnamesEn: [
      { name: 'Bronzebeard', meaning: 'Royal mountain line descending from the ancient Kings of Khaz Modan' },
      { name: 'Ironhammer', meaning: 'Master blacksmiths of the Great Forge of Ironforge' },
      { name: 'Wildhammer', meaning: 'Fearless gryphon riders of the Hinterlands' },
      { name: 'Stormforge', meaning: 'Shaman or smith blessed with the electric tempest of the peaks' },
      { name: 'Bitterfoam', meaning: 'Master brewers of the renowned Kharanos tavern' },
      { name: 'Stonefist', meaning: 'Miners who crush boulders with their armored gauntlets' }
    ],
    meaningsEn: ['Etched into Titan stone runes centuries ago.', 'Clan pride forged in the roaring embers of the Ironforge mountain.'],
    honorificTitlesEs: ['Señor de la Montaña', 'Maestro de la Gran Forja', 'Jinete de Grifos'],
    honorificTitlesEn: ['Lord of the Mountain', 'Master of the Great Forge', 'Gryphon Master']
  },
  night_elf: {
    maleFirst: [
      'Malfurion', 'Illidan', 'Jarod', 'Fandral', 'Broll', 'Shandris', 'Vaelin', 'Eldarath',
      'Alysran', 'Kaelen', 'Theron', 'Dorion', 'Althalor', 'Danador', 'Lyriador'
    ],
    femaleFirst: [
      'Tyrande', 'Maiev', 'Shandris', 'Naisha', 'Cordana', 'Delaryn', 'Lyria', 'Asteria',
      'Elenora', 'Sylveria', 'Naevia', 'Mirana', 'Arya', 'Seryn', 'Amara', 'Vaelia'
    ],
    neutralFirst: ['Ael', 'Sylvan', 'Ilun', 'Val', 'Cael', 'Shaer', 'Aeren'],
    surnamePrefixesEs: ['Susurra', 'Canta', 'Pluma', 'Hoja', 'Canto', 'Brisa', 'Raiz', 'Caza', 'Fauce', 'Mirada', 'Sombra', 'Estrella'],
    surnameSuffixesEs: ['vientos', 'sombras', 'luna', 'estelar', 'silente', 'arboleda', 'plateada', 'eterna', 'nocturna', 'esmeralda'],
    fixedSurnamesEs: [
      { name: 'Susurravientos', meaning: 'Comunión directa con las brisas sagradas enviadas por la diosa Elune' },
      { name: 'Cantasombra', meaning: 'Centinela guardiana que acecha velada por el velo de la noche' },
      { name: 'Plumaestelar', meaning: 'Herederos de los mensajeros celestiales de Teldrassil' },
      { name: 'Hojaluna', meaning: 'Guerrero de la media luna cuya hoja destella con luz sagrada blanca' },
      { name: 'Raizargéntea', meaning: 'Druidas de la garra vinculados a las raíces profundas de Hyjal' },
      { name: 'Faucesilente', meaning: 'Cazador de sombras que se mueve sin quebrar una sola rama del bosque' }
    ],
    meaningsEs: ['Poema élfico que conmemora el vínculo perpetuo entre la luna y las arboledas.', 'Voto místico de los Kaldorei pronunciado bajo el follaje de Ashenvale.'],
    surnamePrefixesEn: ['Whisper', 'Shadow', 'Star', 'Moon', 'Wind', 'Silver', 'Night', 'Swift', 'Silent', 'Feather'],
    surnameSuffixesEn: ['wind', 'song', 'blade', 'runner', 'stalker', 'bow', 'wood', 'glen', 'feather', 'fall'],
    fixedSurnamesEn: [
      { name: 'Whisperwind', meaning: 'Communion with sacred night breezes guided by the goddess Elune' },
      { name: 'Shadowsong', meaning: 'Vigilant sentinel warden prowling under the canopy of night' },
      { name: 'Moonblade', meaning: 'Crescent guardian whose edge gleams with silvery sacred light' },
      { name: 'Starfeather', meaning: 'Heir of the celestial messengers of the ancient World Tree' },
      { name: 'Silverwood', meaning: 'Druid of the claw bound to the ancient roots of Mount Hyjal' },
      { name: 'Nightstalker', meaning: 'Master huntress moving silently across shadowy woodland boughs' }
    ],
    meaningsEn: ['Elven poetry celebrating the sacred bond between moon and groves.', 'Ancient Kaldorei covenant sworn before the Great Sundering.'],
    honorificTitlesEs: ['Guardián del Sueño', 'Centinela de Darnassus', 'Heraldo de Elune'],
    honorificTitlesEn: ['Guardian of the Dream', 'Sentinel of Darnassus', 'Herald of Elune']
  },
  gnome: {
    maleFirst: [
      'Gelbin', 'Millhouse', 'Mekkatorque', 'Silas', 'Fizzlebang', 'Toshley', 'Cogx', 'Sprocket',
      'Bink', 'Willy', 'Pippin', 'Fizban', 'Tink', 'Gizmo', 'Boink', 'Norbert'
    ],
    femaleFirst: [
      'Kinndy', 'Kelsey', 'Trixie', 'Penny', 'Fizzi', 'Nim', 'Wink', 'Sparkle',
      'Zanna', 'Bixi', 'Trix', 'Calla', 'Pippa', 'Mimi', 'Lilli'
    ],
    neutralFirst: ['Pip', 'Gizmo', 'Zip', 'Bolt', 'Chip', 'Spunk', 'Twist'],
    surnamePrefixesEs: ['Chispa', 'Llave', 'Manitas', 'Tornillo', 'Perno', 'Piston', 'Termo', 'Bobina', 'Engranaje', 'Fusible'],
    surnameSuffixesEs: ['luz', 'tuerca', 'volt', 'ardiente', 'veloz', 'tanque', 'rayo', 'cobre', 'rapido', 'giro'],
    fixedSurnamesEs: [
      { name: 'Chispaluz', meaning: 'Inventores del tubo incandescente de cuarzo y lámparas seguras' },
      { name: 'Llavedetuerca', meaning: 'Mecánico prodigioso capaz de desarmar un tanque a vapor en segundos' },
      { name: 'Pernoardiente', meaning: 'Artificiero que sobrevivió a 47 explosiones experimentales consecutivas' },
      { name: 'Pistónveloz', meaning: 'Constructor de turbocars y girocópteros de alta velocidad' },
      { name: 'Bobinarrayo', meaning: 'Tecnomago que combina campos electromagnéticos con rayos arcanos' },
      { name: 'Fusibleroto', meaning: 'Nombre cariñoso para quien inventa cosas que superan el límite seguro' }
    ],
    meaningsEs: ['Patente de ingeniería registrada en el archivo central de Gnomeregan.', 'Designación de excelencia técnica aprobada por el Gran Consejo Científico.'],
    surnamePrefixesEn: ['Spark', 'Cog', 'Bolt', 'Gear', 'Steam', 'Wrench', 'Piston', 'Volt', 'Fuse', 'Spring'],
    surnameSuffixesEn: ['light', 'wrench', 'turner', 'shock', 'valve', 'sprocket', 'spring', 'quick', 'rotor', 'gauge'],
    fixedSurnamesEn: [
      { name: 'Sparklight', meaning: 'Pioneers of safe incandescent lamps and crystal circuits' },
      { name: 'Wrenchturner', meaning: 'Master mechanic capable of stripping a steam tank in seconds' },
      { name: 'Hotbolt', meaning: 'Demolitions artificer who survived 47 consecutive experimental blasts' },
      { name: 'Fastpiston', meaning: 'Chief tuner of high-velocity racing gyrocopters' },
      { name: 'Coilshock', meaning: 'Technomage combining electromagnetic flux with arcane blasts' },
      { name: 'Brokenfuse', meaning: 'Affectionate title for inventors whose devices exceed safe limits' }
    ],
    meaningsEn: ['Official engineering patent registered in Gnomeregan microfilm archives.', 'Technical badge of honor awarded by the High Tinkers Council.'],
    honorificTitlesEs: ['Manitas Mayor Adjunto', 'Ingeniero Jefe de Gnomeregan', 'Tecnomago Prodigio'],
    honorificTitlesEn: ['High Tinker Deputy', 'Chief Engineer of Gnomeregan', 'Prodigy Technomage']
  },
  orc: {
    maleFirst: [
      'Varok', 'Grommash', 'Thrall', 'Durotan', 'Nazgrel', 'Broxigar', 'Drek\'Thar', 'Kilrogg',
      'Rehgar', 'Kargath', 'Gorfang', 'Mogor', 'Thromok', 'Krag\'jin', 'Draknor', 'Korgath'
    ],
    femaleFirst: [
      'Draka', 'Aggra', 'Garona', 'Zaela', 'Geyah', 'Azuka', 'Shokia', 'Morka', 'Rogra',
      'Vula', 'Kaggra', 'Thura', 'Shagar', 'Kora', 'Morra'
    ],
    neutralFirst: ['Drak', 'Krag', 'Mork', 'Throm', 'Garr', 'Ruk', 'Zar'],
    surnamePrefixesEs: ['Grito', 'Martillo', 'Rompe', 'Hoja', 'Colmillo', 'Garra', 'Fauces', 'Puno', 'Calavera', 'Hueso', 'Furia', 'Sangre'],
    surnameSuffixesEs: ['infernal', 'maldito', 'huesos', 'sangrienta', 'lobo', 'trueno', 'hierro', 'frenesi', 'bestia', 'partido'],
    fixedSurnamesEs: [
      { name: 'Gritoinfernal', meaning: 'Aullido de guerra ensordecedor que aterroriza a las legiones enemigas' },
      { name: 'Martillomaldito', meaning: 'Portador de la profecía de roca negra y redención orca' },
      { name: 'Garralobo', meaning: 'Cazador sagrado bendecido por los espíritus del Clan Lobo Gélido' },
      { name: 'Rompehuesos', meaning: 'Fuerza bruta capaz de aplastar escudos en primera línea' },
      { name: 'Colmillotrueno', meaning: 'Hazaña lograda al abatir a un kodo titánico con las manos desnudas' },
      { name: 'Hojasangrienta', meaning: 'Guerrero fiero que jamás desenvaina sin cobrar tributo en batalla' },
      { name: 'Faucedraco', meaning: 'Linaje ancestral domador de bestias de las Tierras Altas' }
    ],
    meaningsEs: ['Nombre de victoria ganado al clavar el estandarte en el corazón del enemigo.', 'Sello de sangre que honra los pactos elementales y la fuerza bruta de la Horda.'],
    surnamePrefixesEn: ['Hell', 'Doom', 'Blood', 'Frost', 'Iron', 'Thunder', 'Skull', 'Gore', 'Bone', 'War'],
    surnameSuffixesEn: ['scream', 'hammer', 'wolf', 'blade', 'fang', 'crusher', 'fury', 'jaw', 'strike', 'song'],
    fixedSurnamesEn: [
      { name: 'Hellscream', meaning: 'Deafening battle cry that shatters enemy resolve on the battlefield' },
      { name: 'Doomhammer', meaning: 'Bearers of the historic blackrock prophecy and orcish redemption' },
      { name: 'Frostwolf', meaning: 'Sacred huntmaster bound to the great winter wolves of Alterac' },
      { name: 'Skullcrusher', meaning: 'Frontline colossus renowned for shattering shield walls' },
      { name: 'Thunderfang', meaning: 'Warrior who bested a raging thunder lizard in bare-handed duel' },
      { name: 'Goreblade', meaning: 'Berserker who never sheathes an axe without blood payment' },
      { name: 'Warsong', meaning: 'Clan veterans famous for their rhythmically terrifying chants' }
    ],
    meaningsEn: ['Battle title earned by planting the war banner in enemy heartlands.', 'Blood mark honoring the shamanic elements and savage Horde strength.'],
    honorificTitlesEs: ['Campeón de Orgrimmar', 'Guerrero del Lobo Gélido', 'Hacha de la Horda'],
    honorificTitlesEn: ['Champion of Orgrimmar', 'Frostwolf Warrior', 'Axe of the Horde']
  },
  undead: {
    maleFirst: [
      'Nathanos', 'Helcular', 'Gunther', 'Almaric', 'Bartholomew', 'Darnell', 'Valdred',
      'Trevor', 'Mortis', 'Leoric', 'Castor', 'Orson', 'Percival', 'Victor', 'Lucian'
    ],
    femaleFirst: [
      'Lilian', 'Theresa', 'Morigan', 'Agnes', 'Lenore', 'Ophelia', 'Vespera', 'Beatrice',
      'Constance', 'Selina', 'Rowena', 'Evangeline', 'Marilyn', 'Claudia'
    ],
    neutralFirst: ['Mort', 'Graves', 'Shade', 'Cinder', 'Vane', 'Frost', 'Grim'],
    surnamePrefixesEs: ['Podre', 'Diente', 'Hueso', 'Sin', 'Tumba', 'Ceniza', 'Morte', 'Clama', 'Corazon', 'Sudario', 'Cripta'],
    surnameSuffixesEs: ['dumbre', 'amargo', 'negro', 'alma', 'fria', 'muerta', 'eterno', 'penas', 'gris', 'marchito', 'tenebroso'],
    fixedSurnamesEs: [
      { name: 'Podredumbre', meaning: 'Orgulloso recuerdo de la no-muerte y la plaga trascendida' },
      { name: 'Dientemargo', meaning: 'La amarga mueca de quien contempló su propio funeral' },
      { name: 'Clamamuertes', meaning: 'Voz espectral que arrastra almas descarriadas hacia el sepulcro' },
      { name: 'Tumbafría', meaning: 'Familia noble de Lordaeron cuyo mausoleo fue su hogar durante la peste' },
      { name: 'Sinalma', meaning: 'Desafío desafiante al destino impuesto por los Carceleros de la plaga' },
      { name: 'Corazónmarchito', meaning: 'Indiferente al dolor terrenal, fiel seguidor del Consejo Desolado' }
    ],
    meaningsEs: ['Epitafio adoptado al despertar de la tumba fría en Camposanto.', 'Blasón de supervivencia tras quebrar las cadenas del Rey Exánime.'],
    surnamePrefixesEn: ['Blight', 'Grave', 'Cold', 'Dead', 'Bitter', 'Soul', 'Shadow', 'Dark', 'Bone', 'Grim'],
    surnameSuffixesEn: ['shade', 'tomb', 'tooth', 'caller', 'less', 'walker', 'heart', 'dust', 'bane', 'shroud'],
    fixedSurnamesEn: [
      { name: 'Blightshade', meaning: 'Master apothecary harvesting plague compounds in Undercity' },
      { name: 'Bittertooth', meaning: 'The cold sneer of one who survived their own burial ceremony' },
      { name: 'Deathcaller', meaning: 'Spectral voice drawing wayward spirits toward their crypt' },
      { name: 'Coldtomb', meaning: 'Lordaeron noble house whose crypt sheltered them through the Scourge' },
      { name: 'Soulless', meaning: 'Defiant epitaph mocking the Lich King who sought to enslave them' },
      { name: 'Gravewalker', meaning: 'Shadow assassin who stalks silently across moonlit tombstones' }
    ],
    meaningsEn: ['Epitaph chosen upon awakening from the cold soil of Deathknell.', 'Badge of unyielding defiance against the living and the Scourge.'],
    honorificTitlesEs: ['Ejecutor de Entrañas', 'Boticario de la Peste', 'Sombra Desolada'],
    honorificTitlesEn: ['Executor of Undercity', 'Plague Apothecary', 'Desolate Shade']
  },
  tauren: {
    maleFirst: [
      'Cairne', 'Baine', 'Hamuul', 'Trag', 'Kador', 'Tamar', 'Xarantaur', 'Sunwalker',
      'Arakor', 'Tahonda', 'Bovan', 'Gorn', 'Turan', 'Mokor', 'Brak'
    ],
    femaleFirst: [
      'Magatha', 'Maybeline', 'Jorh', 'Uma', 'Koya', 'Tahu', 'Tama', 'Heta',
      'Kaya', 'Mahla', 'Awen', 'Tula', 'Suna', 'Nara'
    ],
    neutralFirst: ['Shu', 'Toh', 'Brah', 'Koa', 'Maw', 'Run'],
    surnamePrefixesEs: ['Pezuna', 'Cuerno', 'Totem', 'Camina', 'Ojo', 'Caza', 'Huella', 'Bisonte', 'Clamor', 'Brama', 'Espiritu'],
    surnameSuffixesEs: ['sangre', 'runico', 'bravo', 'sol', 'aguila', 'trombas', 'negra', 'blanco', 'trueno', 'vientos', 'tierra'],
    fixedSurnamesEs: [
      { name: 'Pezuñasangre', meaning: 'El linaje imperial de líderes espirituales y guerreros de Mulgore' },
      { name: 'Caminasol', meaning: 'Sacerdotes y paladines devotos de An\'she, el ojo solar de la Madre Tierra' },
      { name: 'Cuernorúnico', meaning: 'Chamanes ancestrales que graban petroglifos sagrados en sus astas' },
      { name: 'Tótembravo', meaning: 'Defensores inamovibles de los campamentos sagrados contra los centauros' },
      { name: 'Ojoáguila', meaning: 'Cazadores de las llanuras con la visión del vigía de las nubes' },
      { name: 'Cazatrombas', meaning: 'Corredores veloces capaces de predecir las tempestades de Las Barrens' },
      { name: 'Bramavientos', meaning: 'Druidas de la Cima del Trueno que convocan los tifones purificadores' }
    ],
    meaningsEs: ['Bautismo sagrado susurrado por los chamanes junto al fuego de Mulgore.', 'Pacto totémico que liga el alma del guerrero a las llanuras interminables.'],
    surnamePrefixesEn: ['Blood', 'Sun', 'Rune', 'Thunder', 'Storm', 'Eagle', 'Brave', 'Plain', 'Earth', 'Wind'],
    surnameSuffixesEn: ['hoof', 'walker', 'totem', 'horn', 'eye', 'chaser', 'heart', 'strider', 'caller', 'song'],
    fixedSurnamesEn: [
      { name: 'Bloodhoof', meaning: 'Sovereign line of chieftain leaders and spiritual protectors of Mulgore' },
      { name: 'Sunwalker', meaning: 'Devout paladins and priests channeling An\'she, the sun eye of the Earth Mother' },
      { name: 'Runetotem', meaning: 'Ancient shamanic lineage carving sacred petroglyphs upon their totems' },
      { name: 'Thunderhorn', meaning: 'Mighty warriors whose war stomps rattle the canyon stones' },
      { name: 'Eagleeye', meaning: 'Plainstriders with the keen vision of the mountain birds of prey' },
      { name: 'Stormchaser', meaning: 'Swift scouts who can sense approaching gale fronts across the Barrens' }
    ],
    meaningsEn: ['Sacred naming ceremony whispered around Mulgore campfires.', 'Totemic covenant linking the warrior’s soul to the eternal plains.'],
    honorificTitlesEs: ['Voz de la Madre Tierra', 'Guerrero de Mulgore', 'Portador del Tótem'],
    honorificTitlesEn: ['Voice of the Earth Mother', 'Warrior of Mulgore', 'Totem Bearer']
  },
  troll: {
    maleFirst: [
      'Vol\'jin', 'Sen\'jin', 'Rokhan', 'Zul\'jin', 'Bwonsamdi', 'Rastakhan', 'Kaz\'tik', 'Jani',
      'Taz\'dingo', 'Gadrin', 'Zuni', 'Jin\'rokh', 'Mandokir', 'Venoxis', 'Thekal'
    ],
    femaleFirst: [
      'Talanji', 'Zen\'tabra', 'Mar\'li', 'Vanira', 'Bwemba', 'Hexx', 'Nalorakk', 'Zaza',
      'Vola', 'Kiya', 'Jalu', 'Seta', 'Tiki', 'Kalama'
    ],
    neutralFirst: ['Zul', 'Vol', 'Taz', 'Rok', 'Jin', 'Sen'],
    surnamePrefixesEs: ['Diente', 'Sombra', 'Danza', 'Hueso', 'Caza', 'Colmillo', 'Veneno', 'Ojo', 'Vudu', 'Tromba', 'Lanza'],
    surnameSuffixesEs: ['loa', 'sol', 'sangre', 'tromba', 'craneos', 'negro', 'tropico', 'furia', 'tormenta', 'espiritu', 'veloz'],
    fixedSurnamesEs: [
      { name: 'Dientedeloa', meaning: 'Marcado por el favor de los grandes espíritus animales de Zandalar' },
      { name: 'Cazacráneos', meaning: 'Rastreador tribal implacable de las Islas del Eco' },
      { name: 'Danzasangre', meaning: 'Guerrero bersérker cuya lanza se mueve con un ritmo hipnótico' },
      { name: 'Ojobwonsamdi', meaning: 'Sacerdote que puede vislumbrar el reino de las sombras y pactar almas' },
      { name: 'Colmillonegro', meaning: 'Veterano de mil emboscadas en las junglas de Vega de Tuercespina' },
      { name: 'Vudúfuria', meaning: 'Médico brujo temido por sus maldiciones de encogimiento de cabezas' },
      { name: 'Lanzaveloz', meaning: 'Lanzador de jabalinas legendario de la tribu Lanza Negra' }
    ],
    meaningsEs: ['Voto tribal sellado con tintura ritual en los altares de los Loa.', 'Nombre de guerra que hace temblar a los intrusos en las selvas de Tuercespina.'],
    surnamePrefixesEn: ['Loa', 'Skull', 'Blood', 'Shadow', 'Venom', 'Spear', 'Hex', 'Jungle', 'Night', 'Fang'],
    surnameSuffixesEn: ['tooth', 'hunter', 'dancer', 'stalker', 'fury', 'tusk', 'strike', 'caller', 'gaze', 'step'],
    fixedSurnamesEn: [
      { name: 'Loatooth', meaning: 'Blessed with the divine favor of the mighty ancient animal Loa' },
      { name: 'Skullhunter', meaning: 'Relentless scout and headhunter of the Darkspear tribe' },
      { name: 'Blooddancer', meaning: 'Berserker spearman moving in deadly rhythmic combat trance' },
      { name: 'Venomfang', meaning: 'Veteran of a thousand ambushes across Stranglethorn Vale' },
      { name: 'Hexfury', meaning: 'Witch doctor feared for voodoo curses and spirit charms' },
      { name: 'Spearwind', meaning: 'Swift javelin thrower who never misses a fleeing beast' }
    ],
    meaningsEn: ['Tribal oath sealed with ritual pigment before Loa shrines.', 'War deed that strikes dread into jungle trespassers.'],
    honorificTitlesEs: ['Hijo de los Loa', 'Médico Brujo de la Tribu', 'Guerrero Lanza Negra'],
    honorificTitlesEn: ['Child of the Loa', 'Witch Doctor of the Tribe', 'Darkspear Shadow']
  },
  skyborn: {
    maleFirst: [
      'Célico', 'Aelir', 'Vaelor', 'Zephyr', 'Solan', 'Eridor', 'Caelum', 'Aero',
      'Altaris', 'Orion', 'Kaelis', 'Thalor', 'Aelidor', 'Zenithar', 'Corvus'
    ],
    femaleFirst: [
      'Célica', 'Lyria', 'Aeloria', 'Zephyra', 'Aelene', 'Silvia', 'Caelia', 'Astris',
      'Vespera', 'Lunaria', 'Seraphina', 'Aeriel', 'Thalessa', 'Auraea'
    ],
    neutralFirst: ['Zeph', 'Ael', 'Cael', 'Aero', 'Astris', 'Zen', 'Skye'],
    surnamePrefixesEs: ['Cielo', 'Forma', 'Brisa', 'Nube', 'Aura', 'Viento', 'Estrella', 'Ala', 'Cénit', 'Alba'],
    surnameSuffixesEs: ['nato', 'vientos', 'azul', 'eterno', 'celeste', 'puro', 'estelar', 'alado', 'brillante'],
    fixedSurnamesEs: [
      { name: 'Cielonato', meaning: 'El linaje primordial nacido entre las corrientes de la estratósfera de Azeroth' },
      { name: 'Formavientos', meaning: 'Grandes magos capaces de dar forma corpórea a las ráfagas tempestuosas' },
      { name: 'Vientoeterno', meaning: 'Guerreros ágiles cuyos pies jamás tocan la tierra con pesadez' },
      { name: 'Alaceleste', meaning: 'Rastreadores que se lanzan desde cumbres escarpadas con capas planeadoras' },
      { name: 'Nubeazul', meaning: 'Anacoretas que meditan en templos flotantes rodeados de niebla diamantina' },
      { name: 'Brisacénit', meaning: 'Guardianes del equilibrio entre la luz solar y el vacío del firmamento' },
      { name: 'Aurostelar', meaning: 'Eruditos de la magia del alba que tejen mantos protectores de maná puro' }
    ],
    meaningsEs: ['Herencia celestial de los Cielonatos de las altas cumbres.', 'Consonancia mística con el flujo perpetuo de las corrientes de aire.'],
    surnamePrefixesEn: ['Sky', 'Wind', 'Cloud', 'Storm', 'Star', 'Aura', 'Zenith', 'Aero', 'Frost', 'Dawn'],
    surnameSuffixesEn: ['born', 'shaper', 'strider', 'wing', 'weaver', 'crest', 'singer', 'gazer', 'rider', 'flite'],
    fixedSurnamesEn: [
      { name: 'Skyborn', meaning: 'The primordial Skyborne bloodline born upon highest aerial reaches' },
      { name: 'Windshaper', meaning: 'Archmages capable of weaving gale-force winds into protective barriers' },
      { name: 'Cloudstrider', meaning: 'Nimble scouts leaping across mountain crags with gliding cloaks' },
      { name: 'Stormwing', meaning: 'Fierce aeromancers commanding the lightning currents of the troposphere' },
      { name: 'Starweaver', meaning: 'Mystics drawing luminous starlight into crystalline staves' },
      { name: 'Zenithcrest', meaning: 'High guardians watching over Azeroth from floating celestial sanctums' },
      { name: 'Skygazer', meaning: 'Oracles who interpret cosmic omens from shimmering atmospheric auroras' }
    ],
    meaningsEn: ['Celestial lineage of the Skyborne of the high summits.', 'Mystic attunement to the eternal currents of wind and light.'],
    honorificTitlesEs: ['Magistrado del Cénit', 'Tejedor de Vientos', 'Heraldo del Firmamento'],
    honorificTitlesEn: ['Magister of the Zenith', 'Windweaver of the Clouds', 'Herald of the Sky']
  }
};

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/**
 * Generate a complete WoW fantasy name with surname, lore notes, title, etc.
 * Enforces STRICTLY 1 single word for firstName and 1 single word for surname!
 * Generates in ES or EN based on selected language.
 */
export function generateFantasyName(
  raceId: RaceId,
  gender: Gender = 'male',
  tone: Tone = 'all',
  customPrefix?: string,
  customSuffix?: string,
  language: Language = 'es',
  overrideFaction?: Faction,
  preferredClass?: ClassId
): GeneratedName {
  const pool = RACE_NAME_POOLS[raceId];
  const race = RACES_DATA[raceId];
  const actualFaction = overrideFaction || (raceId === 'skyborn' ? 'alliance' : race.faction);

  // Pick first name based on gender
  let firstNamePool: string[] = [];
  if (gender === 'male') {
    firstNamePool = [...pool.maleFirst, ...pool.neutralFirst];
  } else if (gender === 'female') {
    firstNamePool = [...pool.femaleFirst, ...pool.neutralFirst];
  } else {
    firstNamePool = [...pool.neutralFirst, ...pool.maleFirst.slice(0, 5), ...pool.femaleFirst.slice(0, 5)];
  }

  // Strictly 1 single word without spaces
  let firstName = pick(firstNamePool).trim().replace(/\s+/g, '');

  // Select language sets
  const prefixes = language === 'en' ? pool.surnamePrefixesEn : pool.surnamePrefixesEs;
  const suffixes = language === 'en' ? pool.surnameSuffixesEn : pool.surnameSuffixesEs;
  const fixedSurnames = language === 'en' ? pool.fixedSurnamesEn : pool.fixedSurnamesEs;
  const meanings = language === 'en' ? pool.meaningsEn : pool.meaningsEs;
  const titles = language === 'en' ? pool.honorificTitlesEn : pool.honorificTitlesEs;

  let surname = '';
  let meaning = '';

  const useFixedSurname = Math.random() > 0.45 && fixedSurnames.length > 0;

  if (customPrefix || customSuffix) {
    const pre = (customPrefix || pick(prefixes)).trim().replace(/\s+/g, '');
    const suf = (customSuffix || pick(suffixes)).trim().replace(/\s+/g, '');
    surname = `${pre}${suf}`.replace(/\s+/g, '');
    meaning = language === 'en'
      ? `Custom surname: "${pre}" combined with "${suf}", fitting ${race.nameEn}.`
      : `Apellido forjado a medida: "${pre}" combinado con "${suf}", evocando la esencia de ${race.name}.`;
  } else if (useFixedSurname) {
    const fixed = pick(fixedSurnames);
    surname = fixed.name.replace(/\s+/g, '');
    meaning = fixed.meaning;
  } else {
    const pre = pick(prefixes).replace(/\s+/g, '');
    const suf = pick(suffixes).replace(/\s+/g, '');
    surname = `${pre}${suf.toLowerCase()}`.replace(/\s+/g, '');
    meaning = pick(meanings);
  }

  // Strictly enforce single-word format (no spaces)
  firstName = firstName.replace(/\s+/g, '');
  surname = surname.replace(/\s+/g, '');
  surname = surname.charAt(0).toUpperCase() + surname.slice(1);

  const title = Math.random() > 0.3 ? pick(titles) : undefined;
  const allowedClasses = getRaceAllowedClasses(raceId, actualFaction);
  const suggestedClass = preferredClass && allowedClasses.includes(preferredClass)
    ? preferredClass
    : pick(allowedClasses);

  return {
    id: `${raceId}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    firstName,
    surname,
    fullName: `${firstName} ${surname}`,
    title,
    race: raceId,
    faction: actualFaction,
    gender,
    tone,
    meaning,
    lineageNote: language === 'en' ? race.namingPhilosophyEn : race.namingPhilosophy,
    suggestedClass,
    createdAt: Date.now(),
  };
}
