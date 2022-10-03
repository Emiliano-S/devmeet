import languagesArr from '../data/dbLingue.json'
import { InputArrayFilter } from './InputArrayFilter'

export function LanguagesForm(){
    return(
        <div className="lavoroContainer">
            <h3>Lingue</h3>
            <InputArrayFilter
            array={languagesArr}
            contentType="lingue"
            showAges={true}
            />
        </div>
    )
}