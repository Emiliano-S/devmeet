import { LanguagesForm } from "./LanguagesForm";
import { LinksForm } from "./LinksForm";

export function LinksLanguages(){
    return(
        <div className="skillsPageContainer">
            <LinksForm />
            <LanguagesForm />
        </div>
    )
}