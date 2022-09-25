import { SkillComponent } from "../components/SkillComponent";

export function Filterby() {
    return (
        <>
            <div className="FilterBy">
                <p>Filtra per:</p>
            </div>
            <div className="Container-Filter">

                <SkillComponent />
            </div>
        </>
    )
}