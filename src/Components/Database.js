export const ClassStat = {
  0: {
    Name: "Normal Soldier",
    HP: 19,
    HpGrowth: 0.85,
    Strength: 7,
    StrGrowth: 0.7,
    Skill: 8,
    SklGrowth: 0.75,
    Speed: 7,
    SpdGrowth: 0.6,
    Luck: 6,
    LckGrowth: 0.5,
    Defence: 7,
    DefGrowth: 0.55,
    Resistance: 2,
    ResGrowth: 0.3,
    Movement: 5,
  },
  1: {
    Name: "Water Pirate",
    HP: 22,
    HpGrowth: 1.15,
    Strength: 10,
    StrGrowth: 1,
    Skill: 6,
    SklGrowth: 0.6,
    Speed: 7,
    SpdGrowth: 0.7,
    Luck: 7,
    LckGrowth: 0.55,
    Defence: 5,
    DefGrowth: 0.6,
    Resistance: 4,
    ResGrowth: 0.35,
    Movement: 5,
  },
  2: {
    Name: "Steel Armor",
    HP: 20,
    HpGrowth: 0.95,
    Strength: 8,
    StrGrowth: 0.8,
    Skill: 8,
    SklGrowth: 0.75,
    Speed: 5,
    SpdGrowth: 0.5,
    Luck: 7,
    LckGrowth: 0.65,
    Defence: 9,
    DefGrowth: 1.05,
    Resistance: 2,
    ResGrowth: 0.25,
    Movement: 4,
  },
  3: {
    Name: "Flying Rider",
    HP: 17,
    HpGrowth: 0.8,
    Strength: 6,
    StrGrowth: 0.7,
    Skill: 8,
    SklGrowth: 0.9,
    Speed: 9,
    SpdGrowth: 1,
    Luck: 8,
    LckGrowth: 0.7,
    Defence: 5,
    DefGrowth: 0.6,
    Resistance: 5,
    ResGrowth: 0.6,
    Movement: 7,
  },
  4: {
    Name: "Ground Rider",
    HP: 20,
    HpGrowth: 0.9,
    Strength: 8,
    StrGrowth: 0.85,
    Skill: 8,
    SklGrowth: 0.8,
    Speed: 8,
    SpdGrowth: 0.85,
    Luck: 6,
    LckGrowth: 0.6,
    Defence: 7,
    DefGrowth: 0.8,
    Resistance: 3,
    ResGrowth: 0.3,
    Movement: 7,
  },
  5: {
    Name: "Dragonkind",
    HP: 21,
    HpGrowth: 1,
    Strength: 9,
    StrGrowth: 0.95,
    Skill: 7,
    SklGrowth: 0.65,
    Speed: 7,
    SpdGrowth: 0.7,
    Luck: 6,
    LckGrowth: 0.8,
    Defence: 6,
    DefGrowth: 0.9,
    Resistance: 4,
    ResGrowth: 0.45,
    Movement: 6,
  },
  6: {
    Name: "Fire Mage",
    HP: 15,
    HpGrowth: 0.75,
    Magic: 8,
    MagGrowth: 0.9,
    Skill: 8,
    SklGrowth: 0.75,
    Speed: 7,
    SpdGrowth: 0.65,
    Luck: 6,
    LckGrowth: 0.7,
    Defence: 5,
    DefGrowth: 0.7,
    Resistance: 8,
    ResGrowth: 0.75,
    Movement: 5,
  },
  7: {
    Name: "Electric Mage",
    HP: 14,
    HpGrowth: 0.6,
    Magic: 7,
    MagGrowth: 0.75,
    Skill: 9,
    SklGrowth: 1,
    Speed: 9,
    SpdGrowth: 0.9,
    Luck: 7,
    LckGrowth: 0.7,
    Defence: 3,
    DefGrowth: 0.55,
    Resistance: 8,
    ResGrowth: 0.7,
    Movement: 5,
  },
  8: {
    Name: "Ice Mage",
    HP: 14,
    HpGrowth: 0.6,
    Magic: 9,
    MagGrowth: 1,
    Skill: 7,
    SklGrowth: 0.7,
    Speed: 7,
    SpdGrowth: 0.6,
    Luck: 8,
    LckGrowth: 0.85,
    Defence: 4,
    DefGrowth: 0.55,
    Resistance: 8,
    ResGrowth: 0.75,
    Movement: 5,
  },
};

export const EquipStat = {
  0: {
    Name: "Brick Break",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Flying Rider","Steel Armor", "Ground Rider"],
    Durability: 20,
    Range_min: 1,
    Range_max: 1,
    Might: 6,
    Weight: 5,
    Hit_rate: 90,
    Critical_rate: 5,
    Double_might: ["Steel Armor"],
  },
  1: {
    Name: "Knock Down",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 20,
    Range_min: 1,
    Range_max: 1,
    Might: 6,
    Weight: 5,
    Hit_rate: 90,
    Critical_rate: 5,
    Double_might: ["Flying Rider"],
  },
  2: {
    Name: "Dragon Claw",
    Type: "Physical 2",
    Classes: ["Normal Soldier", "Steel Armor", "Water Pirate", "Dragonkind"],
    Durability: 20,
    Range_min: 1,
    Range_max: 1,
    Might: 7,
    Weight: 5,
    Hit_rate: 90,
    Critical_rate: 0,
    Double_might: ["Dragonkind"],
  },
  3: {
    Name: "Discharge",
    Type:"Electric",
    Classes: ["Electric Mage"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 4,
    Weight: 5,
    Hit_rate: 95,
    Critical_rate: 0,
    Double_might: ["Water Pirate"],
  },
  4: {
    Name: "Burnout",
    Type: "Fire",
    Classes: ["Fire Mage"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 5,
    Weight: 5,
    Hit_rate: 95,
    Critical_rate: 0,
    Double_might: ["Fire Mage", "Electric Mage", "Ice Mage"],
  },
  5: {
    Name: "Grass Knot",
    Type:"Ice",
    Classes: ["Ice Mage"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 5,
    Weight: 5,
    Hit_rate: 95,
    Critical_rate: 0,
    Double_might: ["Ground Rider"],
  },
  6: {
    Name: "Tackle",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 45,
    Range_min: 1,
    Range_max: 1,
    Might: 3,
    Weight: 2,
    Hit_rate: 90,
    Critical_rate: 0,
    Double_might: [],
  },
  7: {
    Name: "Wing Attack",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 30,
    Range_min: 1,
    Range_max: 1,
    Might: 6,
    Weight: 4,
    Hit_rate: 85,
    Critical_rate: 5,
    Double_might: [],
  },
  8: {
    Name: "Slash",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 20,
    Range_min: 1,
    Range_max: 1,
    Might: 5,
    Weight: 5,
    Hit_rate: 90,
    Critical_rate: 30,
    Double_might: [],
  },
  9: {
    Name: "Iron Tail",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 4,
    Weight: 3,
    Hit_rate: 75,
    Critical_rate: 0,
    Double_might: [],
  },
  10: {
    Name: "Double Hit",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 30,
    Range_min: 1,
    Range_max: 1,
    Might: 5,
    Weight: 5,
    Hit_rate: 85,
    Critical_rate: 0,
    Double_might: [],
  },
  11: {
    Name: "High Horsepower",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 15,
    Range_min: 1,
    Range_max: 1,
    Might: 8,
    Weight: 7,
    Hit_rate: 80,
    Critical_rate: 10,
    Double_might: [],
  },
  12: {
    Name: "Water Gun",
    Type: "Physical 2",
    Classes: ["Water Pirate", "Dragonkind"],
    Durability: 45,
    Range_min: 1,
    Range_max: 1,
    Might: 4,
    Weight: 3,
    Hit_rate: 85,
    Critical_rate: 0,
    Double_might: [],
  },
  13: {
    Name: "Dragon Rage",
    Type: "Physical 2",
    Classes: ["Water Pirate", "Dragonkind"],
    Durability: 30,
    Range_min: 1,
    Range_max: 1,
    Might: 6,
    Weight: 5,
    Hit_rate: 85,
    Critical_rate: 5,
    Double_might: [],
  },
  14: {
    Name: "Crabhammer",
    Type: "Physical 2",
    Classes: ["Water Pirate", "Dragonkind"],
    Durability: 20,
    Range_min: 1,
    Range_max: 1,
    Might: 6,
    Weight: 5,
    Hit_rate: 90,
    Critical_rate: 30,
    Double_might: [],
  },
  15: {
    Name: "Water Shuriken",
    Type: "Physical 2",
    Classes: ["Water Pirate", "Dragonkind"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 5,
    Weight: 4,
    Hit_rate: 70,
    Critical_rate: 0,
    Double_might: [],
  },
  16: {
    Name: "Dual Chop",
    Type: "Physical 2",
    Classes: ["Water Pirate","Dragonkind"],
    Durability: 30,
    Range_min: 1,
    Range_max: 1,
    Might: 6,
    Weight: 6,
    Hit_rate: 85,
    Critical_rate: 5,
    Double_might: [],
  },
  17: {
    Name: "Dragon Rush",
    Type: "Physical 2",
    Classes: ["Dragonkind"],
    Durability: 15,
    Range_min: 1,
    Range_max: 1,
    Might: 10,
    Weight: 8,
    Hit_rate: 70,
    Critical_rate: 10,
    Double_might: [],
  },
  18: {
    Name: "Waterfall",
    Type: "Physical 2",
    Classes: ["Water Pirate"],
    Durability: 15,
    Range_min: 1,
    Range_max: 1,
    Might: 9,
    Weight: 7,
    Hit_rate: 75,
    Critical_rate: 5,
    Double_might: [],
  },
  19: {
    Name: "Ember",
    Type: "Fire",
    Classes: ["Fire Mage"],
    Durability: 40,
    Range_min: 1,
    Range_max: 2,
    Might: 3,
    Weight: 4,
    Hit_rate: 95,
    Critical_rate: 5,
    Double_might: [],
  },
  20: {
    Name: "Flamethrower",
    Type: "Fire",
    Classes: ["Fire Mage"],
    Durability: 30,
    Range_min: 1,
    Range_max: 2,
    Might: 6,
    Weight: 5,
    Hit_rate: 85,
    Critical_rate: 0,
    Double_might: [],
  },
  21: {
    Name: "Fire Blast",
    Type: "Fire",
    Classes: ["Fire Mage"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 9,
    Weight: 8,
    Hit_rate: 75,
    Critical_rate: 0,
    Double_might: [],
  },
  22: {
    Name: "Thunder Shock",
    Type:"Electric",
    Classes: ["Electric Mage"],
    Durability: 40,
    Range_min: 1,
    Range_max: 2,
    Might: 2,
    Weight: 3,
    Hit_rate: 90,
    Critical_rate: 5,
    Double_might: [],
  },
  23: {
    Name: "Thunderbolt",
    Type:"Electric",
    Classes: ["Electric Mage"],
    Durability: 30,
    Range_min: 1,
    Range_max: 2,
    Might: 5,
    Weight: 5,
    Hit_rate: 80,
    Critical_rate: 0,
    Double_might: [],
  },
  24: {
    Name: "Thunder",
    Type:"Electric",
    Classes: ["Electric Mage"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 7,
    Weight: 7,
    Hit_rate: 70,
    Critical_rate: 0,
    Double_might: [],
  },
  25: {
    Name: "Powder Snow",
    Type:"Ice",
    Classes: ["Ice Mage"],
    Durability: 40,
    Range_min: 1,
    Range_max: 2,
    Might: 4,
    Weight: 5,
    Hit_rate: 85,
    Critical_rate: 5,
    Double_might: [],
  },
  26: {
    Name: "Ice Beam",
    Type:"Ice",
    Classes: ["Ice Mage"],
    Durability: 30,
    Range_min: 1,
    Range_max: 2,
    Might: 7,
    Weight: 6,
    Hit_rate: 80,
    Critical_rate: 5,
    Double_might: [],
  },
  27: {
    Name: "Blizzard",
    Type:"Ice",
    Classes: ["Ice Mage"],
    Durability: 20,
    Range_min: 1,
    Range_max: 2,
    Might: 10,
    Weight: 8,
    Hit_rate: 70,
    Critical_rate: 10,
    Double_might: [],
  },
  28: {
    Name: "Mud Shot",
    Type: "Physical 1",
    Classes: ["Normal Soldier", "Steel Armor", "Ground Rider", "Flying Rider"],
    Durability: 30,
    Range_min: 1,
    Range_max: 1,
    Might: 5,
    Weight: 4,
    Hit_rate: 85,
    Critical_rate: 0,
    Double_might: [],
  },
};
