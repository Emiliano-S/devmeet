import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import skillsArray from '../data/dbSkills.json';

export function Skills(){
    const [selectedSkill, setSelectedSkills] = useState("");
    const [dropdownSearchValue, setDropdownSearchValue] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [mySkills, setMySkills] = useState([]);
    const dropdownRef = useRef();

    useEffect(()=>{
        const checkIfClickedOutside = (target) =>{
            if(editMode && dropdownRef.current && !dropdownRef.current.contains(target.target)){
                setEditMode(false);
            }
        }
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () =>{
            document.removeEventListener('mousedown', checkIfClickedOutside);
        }
    }, [editMode]);

    const skillSelectionHandler = (skill) =>{
        setSelectedSkills(skill);
        if(!mySkills.some(e => e.name === skill)){
            setMySkills(prevSkill => [...prevSkill, {"name":skill,"age":1}]);
        }
        console.log(mySkills)
        setDropdownSearchValue("");
        setEditMode(false)
    }

    const filteredSkills = skillsArray.filter(skill => {
        return skill.match(new RegExp(dropdownSearchValue, "i"));
    })

    return(
        <div className="skillsPageContainer">
            <div className="skillsContainer">
                <h3>Le tue skill</h3>
                {editMode ? (<div ref={dropdownRef} className="dropdown-wrapper-search">
                    <input
                    type="search"
                    name="dropdown-input"
                    autoFocus
                    onChange={e => setDropdownSearchValue(e.target.value)}
                    value={dropdownSearchValue}
                    />
                    <div className="dropdown-list-search">
                    <ul>
                        {filteredSkills.map(skill => {
                        return (
                            <li key={skill} onClick={() => skillSelectionHandler(skill)}>
                            {skill}{" "}
                            </li>
                        )
                        })}
                        {filteredSkills.length === 0 && (
                        <li className="no-result">No results found</li>
                        )}
                    </ul>
                    </div>
                    </div>
                    ): (
                        <input
                        type="search"
                        id='skillSearch'
                        placeholder="Cerca Skills"
                        onFocus={() => setEditMode(true)}
                        value={selectedSkill || "Cerca Skills"}
                        />
                    )}
                <div class="skillsList">
                    {mySkills.map((element) => {
                        return(
                        <div class="skill">
                            <span>{element.name}</span>
                            <select class="selectYears">
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='5p'>5+</option>
                            </select>
                            <div class="skillRemove"></div>
                        </div>)
                    })}
                </div>
            </div>
            <div className="lavoroContainer">
                <h3>Sede di lavoro</h3>
                <input type="search" id='sedeSearch' placeholder="Città"/>
                <div class="cityList">

                </div>
            </div>
        </div>
    )
}
