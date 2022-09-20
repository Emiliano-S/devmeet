import { useRef, useEffect, useState } from "react";

export function InputArrayFilter({ array, contentType, showAges }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [dropdownSearchValue, setDropdownSearchValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [myValue, setMyValue] = useState([]);
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

  const valueSelectionHandler = (value) => {
    setSelectedValue(value);
    if (!myValue.some((e) => e.name === value)) {
      setMyValue((prevValue) => [
        ...prevValue,
        { name: value, age: "Junior 0-2 anni" },
      ]);
    }
    console.log(myValue);
    setDropdownSearchValue("");
    setEditMode(false);
  };

  const filteredValues = array.filter((value) => {
    return value.match(new RegExp(dropdownSearchValue, "i"));
  });

  const handleYearsChange = (i) => {
    setMyValue(
      myValue.map((value) => {
        if (value.name === elementRef.current[i].id) {
          const newValue = { ...value, age: elementRef.current[i].value };
          return newValue;
        }
        return value;
      })
    );
  };

  const handleValueRemove = (i) => {
    setMyValue((currentMyValue) =>
      currentMyValue.filter((value, index) => index !== i)
    );
  };

  return (
    <>
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
              {filteredValues.map((value) => {
                return (
                  <li key={value} onClick={() => valueSelectionHandler(value)}>
                    {value}{" "}
                  </li>
                );
              })}
              {filteredValues.length === 0 && (
                <li className="no-result">No results found</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <input
          type="search"
          id={`${contentType}Search`}
          placeholder={`Cerca ${contentType}s`}
          onFocus={() => setEditMode(true)}
          value={selectedValue || `Cerca ${contentType}`}
        />
      )}
      <div className={`${contentType}List`}>
        {myValue.map((element, i) => {
          return (
            <div className={`${contentType}Row`} key={element.name}>
              <div className={contentType}>
                <span>{element.name}</span>
                {showAges && (
                  <select
                    className="selectYears"
                    id={element.name}
                    ref={(element) => {
                      elementRef.current[i] = element;
                    }}
                    onChange={() => {
                      handleYearsChange(i);
                    }}
                    autoFocus
                  >
                    <option value="Junior 0-2 anni">Junior 0-2 anni</option>
                    <option value="Mid-level 3-6 anni">
                      Mid-level 3-6 anni
                    </option>
                    <option value="Senior 6+ anni">Senior 6+ anni</option>
                  </select>
                )}
              </div>
              <div
                className={`${contentType}Remove`}
                onClick={() => {
                  handleValueRemove(i);
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
