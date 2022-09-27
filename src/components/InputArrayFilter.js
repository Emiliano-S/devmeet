import { useRef, useEffect, useState } from "react";

export function InputArrayFilter({
  array,
  contentType,
  showAges,
  toPopulate,
  objKey,
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [dropdownSearchValue, setDropdownSearchValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [myValue, setMyValue] = useState([]);
  const [placeHolderClicked, setPlaceHolderClicked] = useState("");
  const dropdownRef = useRef();
  const elementRef = useRef([]);

  /* Controllo se viene effettuato clic fuori dal droplist */
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

  /*Funzione per inserire il valore selezionato */
  const valueSelectionHandler = (value) => {
    setSelectedValue(value);
    if (!myValue.some((e) => e.name === value)) {
      setMyValue((prevValue) => [
        ...prevValue,
        showAges
          ? contentType === "skill"
            ? { name: value, age: "Junior 0-2 anni" }
            : { name: value, livello: "A1 - Livello base" }
          : { name: value },
      ]);
      toPopulate((prevValue) => ({ ...prevValue, [objKey]: myValue }));
    }
    setPlaceHolderClicked("clicked");
    setDropdownSearchValue("");
    setEditMode(false);
  };

  /*Filtraggio dell'array da mostrare nel dropList*/
  const filteredValues = array.filter((value) => {
    return value.match(new RegExp(dropdownSearchValue, "i"));
  });

  /*Funzione per modificare di anni per le skills*/
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

  /*Funzione per rimuovere il valore selezionato dall'elenco*/
  const handleValueRemove = (i) => {
    if (contentType === "skill" || contentType === "lingue") {
      elementRef.current[
        i
      ].parentNode.parentNode.className += ` ${contentType}Removed`;
      const remove = setTimeout(() => {
        setMyValue((currentMyValue) =>
          currentMyValue.filter((value, index) => index !== i)
        );
        toPopulate((prevValue) => ({ ...prevValue, [objKey]: myValue }));
        clearTimeout(remove);
      }, 600);
    } else {
      setMyValue((currentMyValue) =>
        currentMyValue.filter((value, index) => index !== i)
      );
      toPopulate((prevValue) => ({ ...prevValue, [objKey]: myValue }));
    }
  };

  return (
    <>
      {editMode ? (
        <div ref={dropdownRef} className="dropdown-wrapper-search">
          <div className="input-search-container">
            <input
              type="search"
              name="dropdown-input"
              autoFocus
              onChange={(e) => setDropdownSearchValue(e.target.value)}
              defaultValue={dropdownSearchValue}
            />
            <span className="search-placeholder clicked">{`Cerca ${contentType}`}</span>
          </div>
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
        <div className="input-search-container">
          <input
            type="search"
            id={`${contentType}Search`}
            onFocus={() => setEditMode(true)}
            defaultValue={selectedValue}
          />
          <span
            className={"search-placeholder " + placeHolderClicked}
          >{`Cerca ${contentType}`}</span>
        </div>
      )}
      <div className={`${contentType}List`}>
        {myValue.map((element, i) => {
          return (
            <div className={`${contentType}Row`} key={element.name}>
              <div className={contentType}>
                <span>{element.name}</span>
                {showAges ? (
                  contentType === "skill" ? (
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
                  ) : (
                    <select
                      className="selectLanguages"
                      id={element.name}
                      ref={(element) => {
                        elementRef.current[i] = element;
                      }}
                      onChange={() => {
                        handleYearsChange(i);
                      }}
                      autoFocus
                    >
                      <option value="A1 - Livello base">
                        A1 - Livello base
                      </option>
                      <option value="A2 - Livello elementare">
                        A2 - Livello elementare{" "}
                      </option>
                      <option value="B1 - Livello intermedio">
                        B1 - Livello intermedio
                      </option>
                      <option value="B2 - Livello intermedio superiore">
                        B1 - Livello intermedio superiore
                      </option>
                      <option value="C1 - Livello avanzato">
                        C1 - Livello avanzato
                      </option>
                      <option value="C2 - Madrelingua">Madrelingua</option>
                    </select>
                  )
                ) : (
                  <></>
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
