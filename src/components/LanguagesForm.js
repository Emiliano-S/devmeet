import { useState } from "react";
import languagesArr from "../data/dbLingue.json";
import { InputArrayFilter } from "./InputArrayFilter";

export function LanguagesForm({ toPopulate }) {
  return (
    <div className="lavoroContainer">
      <h3>Lingue</h3>
      <InputArrayFilter
        array={languagesArr}
        contentType="lingue"
        showAges={true}
        toPopulate={toPopulate}
        objKey={"lingue"}
      />
    </div>
  );
}
