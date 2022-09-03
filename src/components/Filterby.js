import { SkillComponent } from "./SkillComponent";

export function Filterby() {
    return (
        <>

            <div className="Container-Filter">
                <div className="FilterBy">
                    <p>Filtra per:</p>
                </div>
                <SkillComponent />
            </div>
        </>
    )
}