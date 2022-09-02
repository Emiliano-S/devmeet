import { ReactComponent as Angular } from '../assets/svg/Angular.svg'
import { ReactComponent as css3 } from '../assets/svg/css3.svg'
import { ReactComponent as HTML5 } from '../assets/svg/HTML5.svg'
import { ReactComponent as js } from '../assets/svg/js.svg'
import { ReactComponent as Reactjs } from '../assets/svg/Reactjs.svg'
import { ReactComponent as typescript } from '../assets/svg/typescript.svg'
import { ReactComponent as NodeJS } from '../assets/svg/nodejs.svg'
import { ReactComponent as JAVA } from '../assets/svg/java.svg'
import { ReactComponent as vue } from '../assets/svg/vue.svg'
import { ReactComponent as Android } from '../assets/svg/android.svg'
import { ReactComponent as iOS } from '../assets/svg/ios.svg'
import { ReactComponent as oth } from '../assets/svg/oth.svg'

export function SkillComponent() {

    const svgArray = [
        {
            id: `1`,
            title: "Angular",
            description: "",
            Image: Angular
        },
        {
            id: `2`,
            title: "CSS3",
            description: "",
            Image: css3
        },
        {
            id: `3`,
            tile: "HTML5",
            description: "",
            Image: HTML5
        },
        {
            id: `4`,
            tile: "JavaScript",
            description: "",
            Image: js
        },
        {
            id: `5`,
            tile: "ReactJS",
            description: "",
            Image: Reactjs
        },
        {
            id: `6`,
            tile: "TypeScript",
            description: "",
            Image: typescript
        },
        {
            id: `7`,
            tile: "NodeJS",
            description: "",
            Image: NodeJS
        },
        {
            id: `8`,
            tile: "JAVA",
            description: "",
            Image: JAVA
        },
        {
            id: `9`,
            tile: "vue",
            description: "",
            Image: vue
        },
        {
            id: `10`,
            tile: "Android",
            description: "",
            Image: Android
        },
        {
            id: `11`,
            tile: "iOS",
            description: "",
            Image: iOS
        },
        {
            id: `12`,
            tile: "Altro",
            description: "",
            Image: oth
        }]

    return (
        <div className="SkillComponent">

            {svgArray.map(({ id, title, description, Image }) => (
                <div className="SkillSVG" key={id}>
                    <div>
                        <Image />  {/* Use Image as Component */}
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                    </div>
                </div>
            ))}

        </div>
    )
}

