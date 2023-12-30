import { Link } from "react-router-dom";
import * as Calculation from "./Calculations";
import { ClassStat, EquipStat } from "../Database";

export default function Battle() {
  const classID1 = 1;
  const level1 = 20;
  const weaponID1 = 2;
  const char1 = Calculation.leveledChar(ClassStat[classID1], level1);
  const atkSpd1= char1.Speed-EquipStat[weaponID1].Weight;

  const classID2 = 7;
  const weaponID2 = 3;
  const level2 = 20;
  const char2 = Calculation.leveledChar(ClassStat[classID2], level2);
  const atkSpd2= char2.Speed-EquipStat[weaponID2].Weight;

  const stat1 = Calculation.getStatistics(char1, char2, EquipStat[weaponID1]);
  const stat2 = Calculation.getStatistics(char2, char1, EquipStat[weaponID2]);

  return (
    <div>
      <div>
        <h1>Combatant 1:</h1>
        <ul>
          <li>Class: {ClassStat[classID1].Name}</li>
          <li>Level: {level1}</li>
          <li>Equipment: {EquipStat[weaponID1].Name}</li>
          <li>HP: {char1.HP}</li>
          <li>Attack:{stat1[3]}</li>
          {ClassStat[classID2].Strength ? (
            <li>Defence: {char1.Defence}</li>
          ) : (
            <li>Defence: {char1.Resistance}</li>
          )}
          <li>Attack Speed: {atkSpd1}</li>
          <li>Hitrate: {stat1[0]}</li>
          <li>Crit Chance: {stat1[2]}</li>
          <li>Avoid: {stat1[1]}</li>
        </ul>
      </div>
      <div>
        <h1>Combatant 2:</h1>
        <ul>
        <li>Class: {ClassStat[classID2].Name}</li>
          <li>Level: {level2}</li>
          <li>Equipment: {EquipStat[weaponID2].Name}</li>
          <li>HP: {char2.HP}</li>
          <li>Attack:{stat2[3]}</li>
          {ClassStat[classID1].Strength ? (
            <li>Defence: {char2.Defence}</li>
          ) : (
            <li>Defence: {char2.Resistance}</li>
          )}
          <li>Attack Speed: {atkSpd2}</li>
          <li>Hitrate: {stat2[0]}</li>
          <li>Crit Chance: {stat2[2]}</li>
          <li>Avoid: {stat2[1]}</li>
        </ul>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
}
