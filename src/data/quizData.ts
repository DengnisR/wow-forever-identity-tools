import { QuizQuestion, QuizResult, RaceId, ClassId, Language } from '../types';
import { RACES_DATA, CLASSES_DATA } from './namesData';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Convicción Moral & Filosofía',
    categoryEn: 'Moral Conviction & Philosophy',
    title: 'El Voto Sagrado del Aventurero',
    titleEn: 'The Adventurer’s Sacred Oath',
    prompt: 'El mundo de Azeroth está sumido en el conflicto perpetuo. ¿Cuál es el pilar inquebrantable que guía tus pasos?',
    promptEn: 'Azeroth is plunged into endless conflict. What unbreakable pillar guides your footsteps?',
    quote: '"Entre la Luz y las Sombras, cada alma debe trazar su propia frontera."',
    options: [
      {
        id: '1a',
        text: 'La Justicia, la protección de los débiles y el honor inquebrantable.',
        textEn: 'Justice, defending the innocent, and unwavering honor.',
        flavor: 'No toleras la cobardía. Donde hay tiranía, tu deber es ser un faro de rectitud y sacrificio.',
        flavorEn: 'You do not abide cowardice. Where tyranny rises, your duty is to stand as a beacon of sacrifice.',
        raceAffinity: { human: 4, dwarf: 3, skyborn: 2, tauren: 2 },
        classAffinity: { paladin: 5, warrior: 2, priest: 2 },
        factionTendency: 'alliance',
      },
      {
        id: '1b',
        text: 'El Honor marcial, la lealtad de sangre a mi hermandad y la fuerza en el combate.',
        textEn: 'Martial honor, blood brotherhood, and undeniable strength in combat.',
        flavor: 'Las palabras son vanas; solo los actos y el sudor en batalla definen la valía de un guerrero.',
        flavorEn: 'Words are hollow; only decisive deeds in the heat of battle define a true warrior.',
        raceAffinity: { orc: 5, tauren: 3, troll: 2, dwarf: 2 },
        classAffinity: { warrior: 5, shaman: 2, hunter: 2 },
        factionTendency: 'horde',
      },
      {
        id: '1c',
        text: 'La Preservación del equilibrio sagrado, la naturaleza y los ciclos celestes.',
        textEn: 'Preserving the sacred balance of nature and celestial atmospheric winds.',
        flavor: 'Los vientos, los ríos y los espíritus primigenios perduran mucho más que los imperios de piedra.',
        flavorEn: 'Winds, rivers, and elemental spirits endure long after stone empires crumble.',
        raceAffinity: { night_elf: 5, skyborn: 4, tauren: 3, troll: 2 },
        classAffinity: { druid: 5, shaman: 4, hunter: 2 },
      },
      {
        id: '1d',
        text: 'El Dominio arcano supremo y desentrañar los secretos del firmamento.',
        textEn: 'Mastery of supreme arcane arts and unraveling the mysteries of the sky.',
        flavor: 'Con el saber y la aeromancia correcta, las leyes de la gravedad y la materia se doblegan.',
        flavorEn: 'With proper knowledge and aeromancy, the laws of gravity and matter bend to your will.',
        raceAffinity: { skyborn: 5, gnome: 4, human: 2, undead: 1 },
        classAffinity: { mage: 5, priest: 2, warlock: 2 },
      },
      {
        id: '1e',
        text: 'La Supervivencia sin ataduras morales; el fin siempre justifica los medios.',
        textEn: 'Pragmatic survival unbound by morality; the end justifies the means.',
        flavor: 'Quien camina en las sombras decide quién amanece al día siguiente.',
        flavorEn: 'Those who walk silently in shadows decide who lives to see another dawn.',
        raceAffinity: { undead: 5, troll: 3, gnome: 1 },
        classAffinity: { rogue: 5, warlock: 4 },
      },
    ],
  },
  {
    id: 2,
    category: 'Filosofía de Combate',
    categoryEn: 'Combat Philosophy',
    title: 'Tu Papel en la Línea de Choque',
    titleEn: 'Your Role on the Frontline',
    prompt: 'El cuerno de guerra resuena y un ejército hostil carga hacia tu escuadrón. ¿En qué posición te encuentras instintivamente?',
    promptEn: 'The war horn echoes across the valley as enemy legions charge. Where do you instinctively position yourself?',
    quote: '"Un verdadero estratega conoce el terreno antes de que la primera flecha sea disparada."',
    options: [
      {
        id: '2a',
        text: 'En primera línea con armadura pesada y escudo impenetrable, parando la embestida.',
        textEn: 'Frontline heavy armor and impenetrable shield, bracing the initial impact.',
        flavor: 'El impacto enemigo se quiebra contra ti. Mientras sigas en pie, ningún aliado caerá.',
        flavorEn: 'The enemy assault shatters against your shield. While you stand, no ally falls.',
        raceAffinity: { dwarf: 4, human: 4, tauren: 3, orc: 2 },
        classAffinity: { warrior: 5, paladin: 4 },
      },
      {
        id: '2b',
        text: 'Embistiendo furioso con armas pesadas a dos manos, sembrando el pánico.',
        textEn: 'Rushing in with two-handed heavy weapons, breaking enemy ranks in fury.',
        flavor: 'Tu ataque es un torbellino implacable que devora escudos y armaduras.',
        flavorEn: 'A relentless whirlwind that sunders armor and terrorizes enemy ranks.',
        raceAffinity: { orc: 5, dwarf: 3, undead: 1, troll: 2 },
        classAffinity: { warrior: 5 },
      },
      {
        id: '2c',
        text: 'Desapareciendo en las sombras o el aire para cercenar la garganta del comandante.',
        textEn: 'Vanishing into shadow or gusting air to strike the enemy commander unseen.',
        flavor: 'Un golpe silencioso y letal desde un ángulo ciego antes de esfumarte.',
        flavorEn: 'A silent, lethal strike from a blind angle before melting back into the mist.',
        raceAffinity: { undead: 4, night_elf: 3, troll: 3, skyborn: 2 },
        classAffinity: { rogue: 5, hunter: 2 },
      },
      {
        id: '2d',
        text: 'Invocando torrentes devastadores de fuego, hielo y vendavales celestiales.',
        textEn: 'Channeling devastating torrents of fire, frost, and gale-force lightning.',
        flavor: 'Controlas los elementos a distancia; el enemigo arde o se congela antes de tocarte.',
        flavorEn: 'Commanding high-altitude elements; foes burn or shatter before reaching you.',
        raceAffinity: { skyborn: 5, gnome: 3, troll: 2, human: 2 },
        classAffinity: { mage: 5, shaman: 3, warlock: 2 },
      },
      {
        id: '2e',
        text: 'Bendiciendo a mis camaradas, zurciendo heridas mortales y sosteniendo la vida.',
        textEn: 'Healing fallen comrades, weaving protective wards, and restoring life.',
        flavor: 'Eres la diferencia entre una masacre y un milagro milagroso.',
        flavorEn: 'You stand as the sole difference between defeat and a miraculous comeback.',
        raceAffinity: { human: 3, night_elf: 3, tauren: 3, skyborn: 3 },
        classAffinity: { priest: 5, paladin: 3, shaman: 3, druid: 3 },
      },
    ],
  },
  {
    id: 3,
    category: 'Manejo de la Adversidad',
    categoryEn: 'Facing Adversity',
    title: 'La Prueba del Fracaso y la Traición',
    titleEn: 'The Trial of Betrayal and Loss',
    prompt: 'Un aliado cercano te traiciona a sangre fría y causa la pérdida de una fortaleza sagrada. ¿Cuál es tu reacción más íntima?',
    promptEn: 'A trusted ally betrays your fortress to enemy hands. What is your deepest internal reaction?',
    quote: '"La templanza de una espada se demuestra en el fuego; el corazón de un héroe, en la calamidad."',
    options: [
      {
        id: '3a',
        text: 'Someter al traidor a juicio formal de la ley y purgar la corrupción sin crueldad.',
        textEn: 'Bring the traitor before righteous justice and purge corruption lawfully.',
        flavor: 'La justicia ciega debe prevalecer; la venganza desmedida corrompe el alma.',
        flavorEn: 'Law and righteousness must prevail; wanton cruelty corrupts the victor.',
        raceAffinity: { human: 5, dwarf: 3, skyborn: 2 },
        classAffinity: { paladin: 5, priest: 3, warrior: 2 },
        factionTendency: 'alliance',
      },
      {
        id: '3b',
        text: 'Desafiarlo al Mak\'gora o a un duelo a muerte público para limpiar la afrenta con sangre.',
        textEn: 'Challenge him to Mak\'gora or a duel to the death to reclaim clan honor.',
        flavor: 'No hay excusa para la deshonra. Solo el acero cara a cara limpia la mancha.',
        flavorEn: 'No excuse for dishonor. Only honest blade against blade washes the stain.',
        raceAffinity: { orc: 5, tauren: 3, troll: 2 },
        classAffinity: { warrior: 5, shaman: 2 },
        factionTendency: 'horde',
      },
      {
        id: '3c',
        text: 'Una venganza fría, paciente e irreversible. Que sienta el veneno y la ruina en silencio.',
        textEn: 'Cold, patient, and irreversible retribution delivered in the dead of night.',
        flavor: 'Esperarás semanas si es necesario; su castigo será una obra meticulosa.',
        flavorEn: 'You will wait patiently for weeks; their punishment will be absolute.',
        raceAffinity: { undead: 5, troll: 3 },
        classAffinity: { rogue: 4, warlock: 4 },
      },
      {
        id: '3d',
        text: 'Elevar mi espíritu a las corrientes del cielo y meditar con los ancestros para sanar la tierra.',
        textEn: 'Ascend to high winds, meditating with ancestral currents to heal the rift.',
        flavor: 'El rencor ata el alma; la sabiduría espiritual renueva el curso del destino.',
        flavorEn: 'Grudges weigh the soul down; high spiritual vision renews our destiny.',
        raceAffinity: { skyborn: 5, night_elf: 4, tauren: 3 },
        classAffinity: { shaman: 4, druid: 4, priest: 3 },
      },
    ],
  },
];

interface ArchetypeDossier {
  title: string;
  titleEn: string;
  hook: string;
  hookEn: string;
  virtues: string[];
  virtuesEn: string[];
  vulnerabilities: string[];
  vulnerabilitiesEn: string[];
  specs: string[];
  specsEn: string[];
}

export const ARCHETYPE_DOSSIERS: Partial<Record<`${RaceId}_${ClassId}`, ArchetypeDossier>> = {
  human_paladin: {
    title: 'Cruzado Inquebrantable de la Mano de Plata',
    titleEn: 'Unyielding Crusader of the Silver Hand',
    hook: 'Creciste escuchando las leyendas de Uther y Turalyon. Portas un martillo bendito forjado con metal de Crestagrana.',
    hookEn: 'Raised on tales of Uther and Turalyon, you wield a blessed hammer dedicated to the sacred Light of Lordaeron.',
    virtues: ['Devoción incorruptible', 'Liderazgo en crisis', 'Sanación y defensa simultáneas'],
    virtuesEn: ['Incorruptible devotion', 'Crisis leadership', 'Simultaneous healing and bastion defense'],
    vulnerabilities: ['Dogmatismo estricto', 'Dificultad para perdonar la herejía'],
    vulnerabilitiesEn: ['Strict dogmatism', 'Difficulty forgiving apostasy'],
    specs: ['Protección', 'Reprensión', 'Sagrado'],
    specsEn: ['Protection', 'Retribution', 'Holy'],
  },
  skyborn_mage: {
    title: 'Gran Aeromante del Cénit Celeste',
    titleEn: 'High Aeromancer of the Skyward Zenith',
    hook: 'Nacido en las torres flotantes sobre las nubes de Kalimdor. Moldeas las corrientes de aire y el maná puro para gobernar las tempestades.',
    hookEn: 'Born in floating spire citadels above Kalimdor. You shape high-altitude air currents and pure mana to command raging tempests.',
    virtues: ['Movilidad etérea sobre el campo', 'Dominio magistral de vendavales arcanos', 'Percepción cenital amplia'],
    virtuesEn: ['Ethereal battlefield mobility', 'Mastery of gale-force arcane gusts', 'Panoramic aerial awareness'],
    vulnerabilities: ['Fragilidad física en espacios cerrados', 'Desapego de los asuntos mundanos'],
    vulnerabilitiesEn: ['Physical vulnerability in enclosed caverns', 'Aloofness from mundane earthly squabbles'],
    specs: ['Arcano (Tempestad)', 'Escarcha (Viento Gélido)', 'Fuego (Rayo Solar)'],
    specsEn: ['Arcane (Tempest)', 'Frost (Glacial Wind)', 'Fire (Solar Ray)'],
  },
  orc_warrior: {
    title: 'Bersérker Indomable del Lobo Gélido',
    titleEn: 'Indomitable Frostwolf Berserker',
    hook: 'Nacido en el rigor del invierno y curtido por el choque de hachas. En tu pecho ruge el grito de Lok\'tar Ogar.',
    hookEn: 'Born in harsh mountain frost and hardened by the clash of battleaxes. Your chest roars with the call of Lok\'tar Ogar.',
    virtues: ['Fuerza física implacable', 'Frenesí de batalla motivador', 'Honor innegociable'],
    virtuesEn: ['Implacable brute strength', 'Inspiring battle frenzy', 'Non-negotiable martial honor'],
    vulnerabilities: ['Ceguera provocada por la ira', 'Desprecio por retiradas tácticas'],
    vulnerabilitiesEn: ['Tunnel vision fueled by rage', 'Disdain for strategic retreat'],
    specs: ['Furia', 'Armas', 'Protección'],
    specsEn: ['Fury', 'Arms', 'Protection'],
  },
};

export function calculateQuizResult(selectedOptionIds: string[], language: Language = 'es'): QuizResult {
  const raceScores: Record<RaceId, number> = {
    human: 0,
    orc: 0,
    night_elf: 0,
    undead: 0,
    dwarf: 0,
    tauren: 0,
    gnome: 0,
    troll: 0,
    skyborn: 0,
  };

  const classScores: Record<ClassId, number> = {
    warrior: 0,
    paladin: 0,
    hunter: 0,
    rogue: 0,
    priest: 0,
    shaman: 0,
    mage: 0,
    warlock: 0,
    druid: 0,
  };

  QUIZ_QUESTIONS.forEach((q) => {
    const chosenOption = q.options.find((opt) => selectedOptionIds.includes(opt.id));
    if (!chosenOption) return;

    Object.entries(chosenOption.raceAffinity).forEach(([rId, score]) => {
      const race = rId as RaceId;
      if (raceScores[race] !== undefined) {
        raceScores[race] += score || 0;
      }
    });

    Object.entries(chosenOption.classAffinity).forEach(([cId, score]) => {
      const cls = cId as ClassId;
      if (classScores[cls] !== undefined) {
        classScores[cls] += score || 0;
      }
    });
  });

  const sortedRaces = (Object.keys(raceScores) as RaceId[]).sort((a, b) => raceScores[b] - raceScores[a]);
  const primaryRace = sortedRaces[0];
  const raceInfo = RACES_DATA[primaryRace];

  const sortedClasses = (Object.keys(classScores) as ClassId[]).sort((a, b) => classScores[b] - classScores[a]);
  const compatibleClass = sortedClasses.find((cls) => raceInfo.allowedClasses.includes(cls)) || raceInfo.allowedClasses[0];

  const runnerUps: { race: RaceId; class: ClassId; score: number }[] = [];
  const primaryRawScore = raceScores[primaryRace] + classScores[compatibleClass];
  const primaryMatchScore = Math.min(99, Math.max(82, Math.round((primaryRawScore / 22) * 100)));

  for (const r of sortedRaces) {
    if (runnerUps.length >= 2) break;
    if (r === primaryRace) continue;
    const rInfo = RACES_DATA[r];
    const bestCls = sortedClasses.find((cls) => rInfo.allowedClasses.includes(cls)) || rInfo.allowedClasses[0];
    runnerUps.push({
      race: r,
      class: bestCls,
      score: Math.max(70, primaryMatchScore - (runnerUps.length + 1) * 7),
    });
  }

  const pairKey = `${primaryRace}_${compatibleClass}` as `${RaceId}_${ClassId}`;
  const dossier = ARCHETYPE_DOSSIERS[pairKey] || {
    title: `${CLASSES_DATA[compatibleClass].name} ${raceInfo.name} de Azeroth`,
    titleEn: `${CLASSES_DATA[compatibleClass].nameEn} ${raceInfo.nameEn} of Azeroth`,
    hook: `Tu espíritu combina la herencia de los ${raceInfo.name} con la maestría de combate del ${CLASSES_DATA[compatibleClass].name}.`,
    hookEn: `Your spirit combines the heritage of the ${raceInfo.nameEn} with mastery of the ${CLASSES_DATA[compatibleClass].nameEn}.`,
    virtues: ['Resiliencia en combate', 'Afinidad con su pueblo', 'Adaptabilidad táctica'],
    virtuesEn: ['Combat resilience', 'Loyalty to kindred', 'Tactical adaptability'],
    vulnerabilities: ['Orgullo marcial', 'Renuencia ante compromisos'],
    vulnerabilitiesEn: ['Martial pride', 'Reluctance to compromise'],
    specs: CLASSES_DATA[compatibleClass].specs,
    specsEn: CLASSES_DATA[compatibleClass].specsEn,
  };

  return {
    primaryRace,
    primaryClass: compatibleClass,
    matchScore: primaryMatchScore,
    archetypeTitle: language === 'en' ? dossier.titleEn : dossier.title,
    archetypeTitleEn: dossier.titleEn,
    roleplayHook: language === 'en' ? dossier.hookEn : dossier.hook,
    roleplayHookEn: dossier.hookEn,
    virtues: language === 'en' ? dossier.virtuesEn : dossier.virtues,
    virtuesEn: dossier.virtuesEn,
    vulnerabilities: language === 'en' ? dossier.vulnerabilitiesEn : dossier.vulnerabilities,
    vulnerabilitiesEn: dossier.vulnerabilitiesEn,
    recommendedSpecs: language === 'en' ? dossier.specsEn : dossier.specs,
    recommendedSpecsEn: dossier.specsEn,
    faction: raceInfo.faction,
    runnerUps,
  };
}
