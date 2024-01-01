import { Link } from "react-router-dom";
import * as Calculation from "./Calculations";
import { ClassStat, EquipStat } from "../Database";
//import React, { useState } from "react";

function detDouble(as1, as2) {
  if (as1 >= as2 + 4) {
    return true;
  }
  return false;
}

export default function Battle() {
  const classID1 = 1;
  const level1 = 20;
  const weaponID1 = 2;
  const char1 = Calculation.leveledChar(ClassStat[classID1], level1);
  const atkSpd1 = char1.Speed - EquipStat[weaponID1].Weight;

  const classID2 = 7;
  const weaponID2 = 3;
  const level2 = 20;
  const char2 = Calculation.leveledChar(ClassStat[classID2], level2);
  const atkSpd2 = char2.Speed - EquipStat[weaponID2].Weight;

  const stat1 = Calculation.getStatistics(char1, char2, EquipStat[weaponID1]);
  const stat2 = Calculation.getStatistics(char2, char1, EquipStat[weaponID2]);
  let dmg1 = 0;
  let dmg2 = 0;
  const isDouble1 = detDouble(atkSpd1, atkSpd2);
  const isDouble2 = detDouble(atkSpd2, atkSpd1);

  if (ClassStat[classID1].Strength) {
    dmg1 = stat1[3] - char2.Defence;
  } else {
    dmg1 = stat1[3] - char2.Resistance;
  }
  if (ClassStat[classID2].Strength) {
    dmg2 = stat2[3] - char1.Defence;
  } else {
    dmg2 = stat2[3] - char1.Resistance;
  }
  let remainHp1 = char1.HP;
  let remainHp2 = char2.HP;
  let outputText = [];
  while (remainHp1 > 0 && remainHp2 > 0) {
    let battleResult = Calculation.outputText(1);
    remainHp2 -= 5;
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
    if (remainHp2 > 0) {
      battleResult = Calculation.outputText(2);

      remainHp1 -= 5;
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

  return (
    <div>
      <div className="box-holder">
        <div className="info-box">
          <h1>Combatant 1:</h1>
          <ul>
            <li>Class: {ClassStat[classID1].Name}</li>
            <li>Level: {level1}</li>
            <li>Equipment: {EquipStat[weaponID1].Name}</li>
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
            <li>
              Hitrate: {stat1[0] - stat2[1] > 100 ? 100 : stat1[0] - stat2[1]}
            </li>
            <li>Crit Chance: {stat1[2]}</li>
            {/* <li>Avoid: {stat1[1]}</li> */}
          </ul>
        </div>
        <div className="info-box">
          <h1>Combatant 2:</h1>
          <ul>
            <li>Class: {ClassStat[classID2].Name}</li>
            <li>Level: {level2}</li>
            <li>Equipment: {EquipStat[weaponID2].Name}</li>
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
            <li>
              Hitrate: {stat2[0] - stat1[1] > 100 ? 100 : stat2[0] - stat1[1]}
            </li>
            <li>Crit Chance: {stat2[2]}</li>
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
