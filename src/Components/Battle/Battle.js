import { Link } from "react-router-dom";
import * as Calculation from "./Calculations";
import { ClassStat, EquipStat } from "../Database";
import React, { useState } from "react";

function detDouble(as1, as2) {
  if (as1 >= as2 + 4) {
    return true;
  }
  return false;
}

function filterEquip(ID) {
  let filterArray = [];
  for (const weapon in EquipStat) {
    const classArray = EquipStat[weapon].Classes;
    if (classArray.includes(ClassStat[ID].Name)) {
      filterArray.push({ key: weapon, value: EquipStat[weapon] });
    }
  }
  return filterArray;
}

const arrayTo20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function Battle() {
  const [classID1, setClassID1] = useState(0);
  const [level1, setLevel1] = useState(1);
  const equippable1 = filterEquip(classID1);
  const w1 = equippable1[0].key;
  const [weaponID1, setWeaponID1] = useState(w1);
  const char1 = Calculation.leveledChar(ClassStat[classID1], level1);
  const atkSpd1 = char1.Speed - EquipStat[weaponID1].Weight;
  const handleClassChange1 = (event) => {
    setClassID1(event.target.value);
  };
  const handleLevelChange1 = (event) => {
    setLevel1(event.target.value);
  };
  const handleWeaponChange1 = (event) => {
    setWeaponID1(event.target.value);
  };

  const [classID2, setClassID2] = useState(0);
  const [level2, setLevel2] = useState(1);
  const equippable2 = filterEquip(classID2);
  const w2 = equippable2[0].key;
  const [weaponID2, setWeaponID2] = useState(w2);
  const char2 = Calculation.leveledChar(ClassStat[classID2], level2);
  const atkSpd2 = char2.Speed - EquipStat[weaponID2].Weight;
  const handleClassChange2 = (event) => {
    setClassID2(event.target.value);
  };
  const handleLevelChange2 = (event) => {
    setLevel2(event.target.value);
  };
  const handleWeaponChange2 = (event) => {
    setWeaponID2(event.target.value);
  };

  const stat1 = Calculation.getStatistics(char1, char2, EquipStat[weaponID1]);
  const stat2 = Calculation.getStatistics(char2, char1, EquipStat[weaponID2]);
  let dmg1 = 0;
  let dmg2 = 0;
  const isDouble1 = detDouble(atkSpd1, atkSpd2);
  const isDouble2 = detDouble(atkSpd2, atkSpd1);

  if (ClassStat[classID1].Strength) {
    dmg1 = stat1[3] - char2.Defence;
    if (dmg1 < 0) {
      dmg1 = 0;
    }
  } else {
    dmg1 = stat1[3] - char2.Resistance;
    if (dmg1 < 0) {
      dmg1 = 0;
    }
  }
  if (ClassStat[classID2].Strength) {
    dmg2 = stat2[3] - char1.Defence;
    if (dmg2 < 0) {
      dmg2 = 0;
    }
  } else {
    dmg2 = stat2[3] - char1.Resistance;
    if (dmg2 < 0) {
      dmg2 = 0;
    }
  }

  let hit1 = 0;
  if (stat1[0] - stat2[1] > 100) {
    hit1 = 100;
  } else if (stat1[0] - stat2[1] < 0) {
    hit1 = 0;
  } else {
    hit1 = stat1[0] - stat2[1];
  }
  let hit2 = 0;
  if (stat2[0] - stat1[1] > 100) {
    hit2 = 100;
  } else if (stat2[0] - stat1[1] < 0) {
    hit2 = 0;
  } else {
    hit2 = stat2[0] - stat1[1];
  }

  let crit1 = 0;
  if (stat1[2] - stat2[4] > 100) {
    crit1 = 100;
  } else if (stat1[2] - stat2[4] < 0) {
    crit1 = 0;
  } else {
    crit1 = stat1[2] - stat2[4];
  }
  let crit2 = 0;
  if (stat2[2] - stat1[4] > 100) {
    crit2 = 100;
  } else if (stat2[2] - stat1[4] < 0) {
    crit2 = 0;
  } else {
    crit2 = stat2[2] - stat1[4];
  }

  let remainHp1 = char1.HP;
  let remainHp2 = char2.HP;
  let outputText = [];

  while (remainHp1 > 0 && remainHp2 > 0) {
    let [battleResult, isHit, isCrit] = Calculation.outputText(
      1,
      dmg1,
      hit1,
      crit1
    );
    if (isCrit) {
      remainHp2 -= dmg1 * 3;
    } else if (isHit && !isCrit) {
      remainHp2 -= dmg1;
    }
    if (remainHp2 < 0) {
      remainHp2 = 0;
    }
    outputText.push(
      <div key={outputText.length} className="battle-result-line">
        <div className="unit-info">Unit 1: {remainHp1}</div>
        <div className="battle-result">{battleResult}</div>
        <div className="unit-info">Unit 2: {remainHp2}</div>
      </div>
    );
    if (remainHp2 > 0 && isDouble1) {
      [battleResult, isHit, isCrit] = Calculation.outputText(
        1,
        dmg1,
        hit1,
        crit1
      );
      if (isCrit) {
        remainHp2 -= dmg1 * 3;
      } else if (isHit && !isCrit) {
        remainHp2 -= dmg1;
      }
      if (remainHp2 < 0) {
        remainHp2 = 0;
      }
      outputText.push(
        <div key={outputText.length} className="battle-result-line">
          <div className="unit-info">Unit 1: {remainHp1}</div>
          <div className="battle-result">{battleResult}</div>
          <div className="unit-info">Unit 2: {remainHp2}</div>
        </div>
      );
    }
    if (remainHp2 > 0) {
      [battleResult, isHit, isCrit] = Calculation.outputText(
        2,
        dmg2,
        hit2,
        crit2
      );
      if (isCrit) {
        remainHp1 -= dmg2 * 3;
      } else if (isHit && !isCrit) {
        remainHp1 -= dmg2;
      }
      if (remainHp1 < 0) {
        remainHp1 = 0;
      }
      outputText.push(
        <div key={outputText.length} className="battle-result-line">
          <div className="unit-info">Unit 1: {remainHp1}</div>
          <div className="battle-result">{battleResult}</div>
          <div className="unit-info">Unit 2: {remainHp2}</div>
        </div>
      );
      if (remainHp1 && isDouble2) {
        [battleResult, isHit, isCrit] = Calculation.outputText(
          2,
          dmg2,
          hit2,
          crit2
        );
        if (isCrit) {
          remainHp1 -= dmg2 * 3;
        } else if (isHit && !isCrit) {
          remainHp1 -= dmg2;
        }
        if (remainHp1 < 0) {
          remainHp1 = 0;
        }
        outputText.push(
          <div key={outputText.length} className="battle-result-line">
            <div className="unit-info">Unit 1: {remainHp1}</div>
            <div className="battle-result">{battleResult}</div>
            <div className="unit-info">Unit 2: {remainHp2}</div>
          </div>
        );
      }
    }
    if (remainHp1 === 0) {
      outputText.push(<div className="battle-result">Unit 2 wins!</div>);
    } else if (remainHp2 === 0) {
      outputText.push(<div className="battle-result">Unit 1 wins!</div>);
    }
  }

  return (
    <div>
      <div className="box-holder">
        <div className="info-box">
          <h1>Combatant 1:</h1>

          <ul>
            <li>
              Class:{" "}
              <select value={classID1} onChange={handleClassChange1}>
                {Object.entries(ClassStat).map(([key, value], index) => (
                  <option key={`c1+${index}`} value={key}>
                    {value.Name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              Level:{" "}
              <select value={level1} onChange={handleLevelChange1}>
                {arrayTo20.map((value, index) => (
                  <option key={`c1+${index}`} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </li>
            <li>
              Equipment:{" "}
              <select value={weaponID1} onChange={handleWeaponChange1}>
                {Object.entries(equippable1).map(([key, value]) => (
                  <option key={`w1+${key}`} value={value.key}>
                    {value.value.Name}
                  </option>
                ))}
              </select>
            </li>
            <li>HP: {char1.HP}</li>
            <li>
              Attack:{dmg1} {isDouble1 ? `x2` : null}
            </li>
            {/* {ClassStat[classID2].Strength ? (
              <li>Defence: {char1.Defence}</li>
            ) : (
              <li>Defence: {char1.Resistance}</li>
            )}
            <li>Attack Speed: {atkSpd1}</li> */}
            <li>Hitrate: {hit1}</li>
            <li>Crit Chance: {crit1}</li>
            {/* <li>Avoid: {stat1[1]}</li> */}
          </ul>
        </div>
        <div className="info-box">
          <h1>Combatant 2:</h1>
          <ul>
            <li>
              Class:{" "}
              <select value={classID2} onChange={handleClassChange2}>
                {Object.entries(ClassStat).map(([key, value], index) => (
                  <option key={`c2+${index}`} value={key}>
                    {value.Name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              Level:{" "}
              <select value={level2} onChange={handleLevelChange2}>
                {arrayTo20.map((value, index) => (
                  <option key={`c1+${index}`} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </li>
            <li>
              Equipment:{" "}
              <select value={weaponID2} onChange={handleWeaponChange2}>
                {Object.entries(equippable2).map(([key, value]) => (
                  <option key={`w1+${key}`} value={value.key}>
                    {value.value.Name}
                  </option>
                ))}
              </select>
            </li>
            <li>HP: {char2.HP}</li>
            <li>
              Attack:{dmg2} {isDouble2 ? `x2` : null}
            </li>
            {/* {ClassStat[classID1].Strength ? (
              <li>Defence: {char2.Defence}</li>
            ) : (
              <li>Defence: {char2.Resistance}</li>
            )} */}
            {/* <li>Attack Speed: {atkSpd2}</li> */}
            <li>Hitrate: {hit2}</li>
            <li>Crit Chance: {crit2}</li>
            {/* <li>Avoid: {stat2[1]}</li> */}
          </ul>
        </div>
        <br />
      </div>
      <div className="battle-proceeding">{outputText}</div>
      <Link to="/">Back</Link>
    </div>
  );
}
