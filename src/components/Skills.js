import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import skillsArray from "../data/dbSkills.json";

export function Skills() {
  const [selectedSkill, setSelectedSkills] = useState("");
  const [dropdownSearchValue, setDropdownSearchValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [mySkills, setMySkills] = useState([]);
  const dropdownRef = useRef();
  const elementRef = useRef([]);

  useEffect(() => {
    const checkIfClickedOutside = (target) => {
      if (
        editMode &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target.target)
      ) {
        setEditMode(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [editMode]);

  const skillSelectionHandler = (skill) => {
    setSelectedSkills(skill);
    if (!mySkills.some((e) => e.name === skill)) {
      setMySkills((prevSkill) => [...prevSkill, { name: skill, age: 1 }]);
    }
    console.log(mySkills);
    setDropdownSearchValue("");
    setEditMode(false);
  };

  const filteredSkills = skillsArray.filter((skill) => {
    return skill.match(new RegExp(dropdownSearchValue, "i"));
  });

  const handleYearsChange = (i) => {
    setMySkills(
      mySkills.map((skill) => {
        console.log(elementRef.current[i]);
        if (skill.name === elementRef.current[i].id) {
          const newSkill = { ...skill, age: elementRef.current[i].value };
          return newSkill;
        }
        return skill;
      })
    );
  };

  const handleSkillRemove = (i) => {
    console.log(i);
    setMySkills((currentMySkills) =>
      currentMySkills.filter((skill, index) => index !== i)
    );
  };

  return (
    <div className="skillsPageContainer">
      <div className="skillsContainer">
        <h3>Le tue skill</h3>
        {editMode ? (
          <div ref={dropdownRef} className="dropdown-wrapper-search">
            <input
              type="search"
              name="dropdown-input"
              autoFocus
              onChange={(e) => setDropdownSearchValue(e.target.value)}
              value={dropdownSearchValue}
            />
            <div className="dropdown-list-search">
              <ul>
                {filteredSkills.map((skill) => {
                  return (
                    <li
                      key={skill}
                      onClick={() => skillSelectionHandler(skill)}
                    >
                      {skill}{" "}
                    </li>
                  );
                })}
                {filteredSkills.length === 0 && (
                  <li className="no-result">No results found</li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <input
            type="search"
            id="skillSearch"
            placeholder="Cerca Skills"
            onFocus={() => setEditMode(true)}
            value={selectedSkill || "Cerca Skills"}
          />
        )}
        <div className="skillsList">
          {mySkills.map((element, i) => {
            return (
              <div className="skillRow" key={element.name}>
                <div className="skill">
                  <span>{element.name}</span>
                  <select
                    className="selectYears"
                    id={element.name}
                    ref={(element) => {
                      elementRef.current[i] = element;
                    }}
                    onChange={() => {
                      handleYearsChange(i);
                    }}
                    autofocus
                  >
                    <option value="Junior 0-2 anni">Junior 0-2 anni</option>
                    <option value="Mid-level 3-6 anni">
                      Mid-level 3-6 anni
                    </option>
                    <option value="Senior 6+ anni">Senior 6+ anni</option>
                  </select>
                </div>
                <div
                  className="skillRemove"
                  onClick={() => {
                    handleSkillRemove(i);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lavoroContainer">
        <h3>Sede di lavoro</h3>
        <input type="search" id="sedeSearch" placeholder="Città" />
        <div className="cityList"></div>
      </div>
    </div>
  );
}
