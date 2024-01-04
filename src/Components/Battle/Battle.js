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
  const char1 = Calculation.leveledCharAve(ClassStat[classID1], level1);
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
  const char2 = Calculation.leveledCharAve(ClassStat[classID2], level2);
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

  const [result, setResult] = useState([]);
  const [winRatio, setWinRatio] = useState([]);

  const stat1 = Calculation.getStatistics(
    char1,
    char2,
    EquipStat[weaponID1],
    EquipStat[weaponID2]
  );
  const stat2 = Calculation.getStatistics(
    char2,
    char1,
    EquipStat[weaponID2],
    EquipStat[weaponID1]
  );
  let dmg1 = stat1[3];
  let dmg2 = stat2[3];
  let hit1 = stat1[0] - stat2[1];
  let hit2 = stat2[0] - stat1[1];
  const isDouble1 = detDouble(atkSpd1, atkSpd2);
  let hitCount1 = null;
  if (isDouble1 && (weaponID1 === "10" || weaponID1 === "16")) {
    hitCount1 = "x4";
  } else if (isDouble1 || weaponID1 === "10" || weaponID1 === "16") {
    hitCount1 = "x2";
  }
  const isDouble2 = detDouble(atkSpd2, atkSpd1);
  let hitCount2 = null;
  if (isDouble2 && (weaponID2 === "10" || weaponID2 === "16")) {
    hitCount2 = "x4";
  } else if (isDouble2 || weaponID2 === "10" || weaponID2 === "16") {
    hitCount2 = "x2";
  }

  if (ClassStat[classID1].Strength) {
    dmg1 = dmg1 - char2.Defence;
    if (dmg1 < 0) {
      dmg1 = 0;
    }
  } else {
    dmg1 = dmg1 - char2.Resistance;
    if (dmg1 < 0) {
      dmg1 = 0;
    }
  }

  if (ClassStat[classID2].Strength) {
    dmg2 = dmg2 - char1.Defence;
    if (dmg2 < 0) {
      dmg2 = 0;
    }
  } else {
    dmg2 = dmg2 - char1.Resistance;
    if (dmg2 < 0) {
      dmg2 = 0;
    }
  }

  if (hit1 > 100) {
    hit1 = 100;
  } else if (hit1 < 0) {
    hit1 = 0;
  }

  if (hit2 > 100) {
    hit2 = 100;
  } else if (hit2 < 0) {
    hit2 = 0;
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

  const getHP = (hp, isHit, dmg, isCrit) => {
    if (isCrit) {
      hp -= dmg * 3;
    } else if (isHit && !isCrit) {
      hp -= dmg;
    }
    if (hp < 0) {
      hp = 0;
    }
    return hp;
  };
  const pushText = (originalText, hp1, hp2, resultText) => {
    originalText.push(
      <div key={originalText.length} className="battle-result-line">
        <div className="unit-info">Unit 1: {hp1}</div>
        <div className="battle-result">{resultText}</div>
        <div className="unit-info">Unit 2: {hp2}</div>
      </div>
    );
    return originalText;
  };

  const fullResult = () => {
    let remainHp1 = char1.HP;
    let remainHp2 = char2.HP;
    let tempResult = [];
    tempResult.push(
      <div key={tempResult.length} className="battle-result-line">
        <div className="unit-info">Unit 1: {remainHp1}</div>
        <div className="battle-result">Battle Start!</div>
        <div className="unit-info">Unit 2: {remainHp2}</div>
      </div>
    );
    let i = 0;
    while (remainHp1 > 0 && remainHp2 > 0) {
      let [battleResult, isHit, isCrit] = Calculation.outputText(
        1,
        dmg1,
        hit1,
        crit1
      );
      remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);
      tempResult = pushText(tempResult, remainHp1, remainHp2, battleResult);
      if (remainHp2 > 0 && isDouble1) {
        [battleResult, isHit, isCrit] = Calculation.outputText(
          1,
          dmg1,
          hit1,
          crit1
        );
        remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);
        tempResult = pushText(tempResult, remainHp1, remainHp2, battleResult);
      }
      if (weaponID1 === "10" || weaponID1 === "16") {
        if (remainHp2 > 0) {
          [battleResult, isHit, isCrit] = Calculation.outputText(
            1,
            dmg1,
            hit1,
            crit1
          );
          remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);
          tempResult = pushText(tempResult, remainHp1, remainHp2, battleResult);
          if (remainHp2 > 0 && isDouble1) {
            [battleResult, isHit, isCrit] = Calculation.outputText(
              1,
              dmg1,
              hit1,
              crit1
            );
            remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);
            tempResult = pushText(
              tempResult,
              remainHp1,
              remainHp2,
              battleResult
            );
          }
        }
      }
      if (remainHp2 > 0) {
        [battleResult, isHit, isCrit] = Calculation.outputText(
          2,
          dmg2,
          hit2,
          crit2
        );
        remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);
        tempResult = pushText(tempResult, remainHp1, remainHp2, battleResult);
        if (remainHp1 && isDouble2) {
          [battleResult, isHit, isCrit] = Calculation.outputText(
            2,
            dmg2,
            hit2,
            crit2
          );
          remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);
          tempResult = pushText(tempResult, remainHp1, remainHp2, battleResult);
        }
        if (weaponID2 === "10" || weaponID2 === "16") {
          if (remainHp1 > 0) {
            [battleResult, isHit, isCrit] = Calculation.outputText(
              2,
              dmg2,
              hit1,
              crit1
            );
            remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);
            tempResult = pushText(
              tempResult,
              remainHp1,
              remainHp2,
              battleResult
            );
            if (remainHp1 > 0 && isDouble2) {
              [battleResult, isHit, isCrit] = Calculation.outputText(
                2,
                dmg1,
                hit1,
                crit1
              );
              remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);
              tempResult = pushText(
                tempResult,
                remainHp1,
                remainHp2,
                battleResult
              );
            }
          }
        }
      }
      i++;
      if (i >= 20) {
        tempResult.push(
          <div className="battle-result">The battle is a draw</div>
        );
        break;
      }
    }
    if (remainHp1 === 0) {
      tempResult.push(
        <div className="battle-result">
          Unit 2 ({ClassStat[classID2].Name})wins!
        </div>
      );
    } else if (remainHp2 === 0) {
      tempResult.push(
        <div className="battle-result">
          Unit 1 ({ClassStat[classID1].Name})wins!
        </div>
      );
    }
    setResult(tempResult);
  };
  const tallyResults = () => {
    let u1w = 0;
    let u2w = 0;
    for (let c = 0; c < 1000; c++) {
      let remainHp1 = char1.HP;
      let remainHp2 = char2.HP;
      let i = 0;
      while (remainHp1 > 0 && remainHp2 > 0) {
        let [battleResult, isHit, isCrit] = Calculation.outputText(
          1,
          dmg1,
          hit1,
          crit1
        );
        remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);

        if (remainHp2 > 0 && isDouble1) {
          [battleResult, isHit, isCrit] = Calculation.outputText(
            1,
            dmg1,
            hit1,
            crit1
          );
          remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);
        }
        if (weaponID1 === "10" || weaponID1 === "16") {
          if (remainHp2 > 0) {
            [battleResult, isHit, isCrit] = Calculation.outputText(
              1,
              dmg1,
              hit1,
              crit1
            );
            remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);

            if (remainHp2 > 0 && isDouble1) {
              [battleResult, isHit, isCrit] = Calculation.outputText(
                1,
                dmg1,
                hit1,
                crit1
              );
              remainHp2 = getHP(remainHp2, isHit, dmg1, isCrit);
            }
          }
        }
        if (remainHp2 > 0) {
          [battleResult, isHit, isCrit] = Calculation.outputText(
            2,
            dmg2,
            hit2,
            crit2
          );
          remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);

          if (remainHp1 && isDouble2) {
            [battleResult, isHit, isCrit] = Calculation.outputText(
              2,
              dmg2,
              hit2,
              crit2
            );
            remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);
          }
          if (weaponID2 === "10" || weaponID2 === "16") {
            if (remainHp1 > 0) {
              [battleResult, isHit, isCrit] = Calculation.outputText(
                2,
                dmg2,
                hit1,
                crit1
              );
              remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);

              if (remainHp1 > 0 && isDouble2) {
                [battleResult, isHit, isCrit] = Calculation.outputText(
                  2,
                  dmg1,
                  hit1,
                  crit1
                );
                remainHp1 = getHP(remainHp1, isHit, dmg2, isCrit);
              }
            }
          }
        }
        i++;
        if (i >= 20) {
          break;
        }
      }
      if (remainHp1 === 0) {
        u2w++;
      } else if (remainHp2 === 0) {
        u1w++;
      }
    }
    let ratio = [];
    ratio.push(
      <div className="battle-result">
        Unit 1 ({ClassStat[classID1].Name}) has won {u1w} rounds
      </div>
    );
    ratio.push(
      <div className="battle-result">
        Unit 2 ({ClassStat[classID2].Name}) has won {u2w} rounds
      </div>
    );
    setWinRatio(ratio);
  };
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
              Attack:{dmg1} {hitCount1}
            </li>
            <li>Hitrate: {hit1}</li>
            <li>Crit Chance: {crit1}</li>
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
              Attack:{dmg2} {hitCount2}
            </li>
            <li>Hitrate: {hit2}</li>
            <li>Crit Chance: {crit2}</li>
          </ul>
        </div>
        <br />
      </div>
      {result}
      {winRatio}
      <div className="battle-proceeding">
        <button onClick={fullResult}>Start</button>
        <button onClick={tallyResults}>Tally</button>
      </div>
      {/* <Link to="/">Back</Link> */}
    </div>
  );
}
