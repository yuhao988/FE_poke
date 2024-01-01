function HitRate(hit, skill, luck) {
  const hitrate = hit + skill * 2 + Math.floor(luck / 2);
  return hitrate;
}
function avoidRate(speed, weight, luck) {
  const avoid = speed * 2 + luck - weight * 2;
  return avoid;
}
function CritChance(skill, critical) {
  const crit = Math.floor(skill / 2) + critical;
  return crit;
}
function SuperEffectiveMultiplier(weapon, target) {
  for (const item in weapon.Double_might) {
    if (weapon.Double_might[item] === target) {
      return 3;
    }
  }
  return 1;
}
function Damage(attack, weapon, target) {
  const multiplier = SuperEffectiveMultiplier(weapon, target);
  const dmg = attack + weapon.Might * multiplier;
  //console.log(multiplier)
  return dmg;
}

export function getStatistics(Attacker, Defender, Weapon) {
  const hit = HitRate(Weapon.Hit_rate, Attacker.Skill, Attacker.Luck);
  const avoid = avoidRate(Attacker.Speed, Weapon.Weight, Attacker.Luck);
  const crit = CritChance(Attacker.Skill, Weapon.Critical_rate);
  const dmg = Damage(Attacker.Attack, Weapon, Defender.Name);
  const statArray = [hit, avoid, crit, dmg];
  return statArray;
}

export function levelUp(stat, level, growth) {
  for (let i = 1; i < level; i++) {
    const randNum = Math.random();
    if (randNum < growth) {
      stat++;
    }
  }
  return stat;
}

export function leveledChar(character, level) {
  const charHP = levelUp(character.HP, level, character.HpGrowth);
  let charAtk;
  if (character.Strength) {
    charAtk = levelUp(character.Strength, level, character.StrGrowth);
  } else if (character.Magic) {
    charAtk = levelUp(character.Magic, level, character.MagGrowth);
  }
  const charSkl = levelUp(character.Skill, level, character.SklGrowth);
  const charSpd = levelUp(character.Speed, level, character.SpdGrowth);
  const charLck = levelUp(character.Luck, level, character.LckGrowth);
  const charDef = levelUp(character.Defence, level, character.DefGrowth);
  const charRes = levelUp(character.Resistance, level, character.ResGrowth);
  const levelChar = {
    ID: character.ID,
    Name: character.Name,
    HP: charHP,
    Attack: charAtk,
    Skill: charSkl,
    Speed: charSpd,
    Luck: charLck,
    Defence: charDef,
    Resistance: charRes,
  };
  return levelChar;
}

export function outputText(attacker) {
  if (attacker === 1) {
    return "Unit 1 attacks unit 2 and dealt 5 damage. ";
  } else {
    return "Unit 2 attacks unit 1 and dealt 50000 damage. ";
  }
}
