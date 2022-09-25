import { LanguagesForm } from "../components/LanguagesForm";
import { LinksForm } from "../components/LinksForm";

export function LinksLanguages(){
    return(
        <div className="skillsPageContainer">
            <LinksForm />
            <LanguagesForm />
        </div>
    )
}