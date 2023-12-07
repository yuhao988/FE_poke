import Modal from "react-modal";
import React, { useState } from "react";
import "./Classes";

export default function ClassInfo(props) {
  const { isOpen, onClose, classDetail } = props;
  const [level, setLevel] = useState(1);

  const classHP = Math.floor(
    classDetail.HP + (level - 1) * classDetail.HpGrowth
  );
  let classAtk;
  if (classDetail.Strength) {
    classAtk = Math.floor(
      classDetail.Strength + (level - 1) * classDetail.StrGrowth
    );
  } else if (classDetail.Magic) {
    classAtk = Math.floor(
      classDetail.Magic + (level - 1) * classDetail.MagGrowth
    );
  }
  const classSkl = Math.floor(
    classDetail.Skill + (level - 1) * classDetail.SklGrowth
  );
  const classSpd = Math.floor(
    classDetail.Speed + (level - 1) * classDetail.SpdGrowth
  );
  const classLck = Math.floor(
    classDetail.Luck + (level - 1) * classDetail.LckGrowth
  );
  const classDef = Math.floor(
    classDetail.Defence + (level - 1) * classDetail.DefGrowth
  );
  const classRes = Math.floor(
    classDetail.Resistance + (level - 1) * classDetail.ResGrowth
  );
  const classMov = classDetail.Movement;

  const handleCloseModal = () => {
    onClose();
  };

  const handleLevelChange = (event) => {
    setLevel(parseInt(event.target.value, 10));
  };

  const levelUp = (stat, growth) => {
    for (let i = 1; i < level; i++) {
      const randNum = Math.random();
      if (randNum < growth) {
        stat++;
      }
    }
    return stat;
  };
  const charHP = levelUp(classDetail.HP, classDetail.HpGrowth);
  let charAtk;
  if (classDetail.Strength) {
    charAtk = levelUp(classDetail.Strength, classDetail.StrGrowth);
  } else if (classDetail.Magic) {
    charAtk = levelUp(classDetail.Magic, classDetail.MagGrowth);
  }
  const charSkl = levelUp(classDetail.Skill, classDetail.SklGrowth);
  const charSpd = levelUp(classDetail.Speed, classDetail.SpdGrowth);
  const charLck = levelUp(classDetail.Luck, classDetail.LckGrowth);
  const charDef = levelUp(classDetail.Defence, classDetail.DefGrowth);
  const charRes = levelUp(classDetail.Resistance, classDetail.ResGrowth);

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleCloseModal}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            cursor: "pointer",
            padding: "5px",
          }}
        >
          X
        </button>
        <br />
        <div className="class-modal">
          <div className="stats">
            <div>{classDetail.Name}</div>
            <div>HP: {classHP}</div>
            {classDetail.Strength ? (
              <div>Strength: {classAtk}</div>
            ) : (
              <div>Magic: {classAtk}</div>
            )}

            <div>Skill: {classSkl}</div>
            <div>Speed: {classSpd}</div>
            <div>Luck: {classLck}</div>
            <div>Defence: {classDef}</div>
            <div>Resistance: {classRes}</div>
            <div>Movement: {classMov}</div>
            <div>
              Level:
              <input
                type="range"
                min="1"
                max="20"
                value={level}
                onChange={handleLevelChange}
              />
              {level}
            </div>
          </div>
          <div className="stats">
            <div>Sample character stats:</div>
            <div>Level: {level}</div>
            <div>HP: {charHP}</div>
            {classDetail.Strength ? (
              <div>Strength: {charAtk}</div>
            ) : (
              <div>Magic: {charAtk}</div>
            )}

            <div>Skill: {charSkl}</div>
            <div>Speed: {charSpd}</div>
            <div>Luck: {charLck}</div>
            <div>Defence: {charDef}</div>
            <div>Resistance: {charRes}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
