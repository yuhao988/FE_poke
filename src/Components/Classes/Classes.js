import { ClassStat } from "../Database";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ClassInfo from "./ClassInfo";

export default function Classes() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (classKey) => {
    setSelectedClass(ClassStat[classKey]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedClass(null);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="App-header">
      {Object.keys(ClassStat).map((classKey) => (
        <div key={classKey}>
          <div>
            <button onClick={() => openModal(classKey)}>
              {ClassStat[classKey].Name}
            </button>
          </div>
          {selectedClass && (
            <ClassInfo
              isOpen={isOpen}
              onClose={closeModal}
              classDetail={selectedClass}
            />
          )}
        </div>
      ))}
      <Link to="/">Back</Link>
      </div>
    </div>
  );
}

