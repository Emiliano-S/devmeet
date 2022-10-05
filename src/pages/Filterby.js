import { SkillComponent } from "../components/SkillComponent";

export function Filterby() {
  return (
    <>
      <div
        className="FilterBy"
        style={{ color: "#364764", fontWeight: "bold" }}
      >
        <p>Filtra per:</p>
      </div>
      <div
        className="Container-Filter"
        style={{
          paddingBottom: "10%",
        }}
      >
        <SkillComponent />
      </div>
    </>
  );
}
