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
            Image: Angular,
            backgroundColor: "#DD0031",
        },
        {
            id: `2`,
            title: "CSS3",
            description: "",
            Image: css3,
            backgroundColor: "white",
        },
        {
            id: `3`,
            title: "HTML5",
            description: "",
            Image: HTML5,
            backgroundColor: "#F16529",
        },
        {
            id: `4`,
            title: "JavaScript",
            description: "",
            Image: js,
            backgroundColor: "#F7DF1E",
        },
        {
            id: `5`,
            title: "ReactJS",
            description: "",
            Image: Reactjs,
            backgroundColor: "#61DAFB",
        },
        {
            id: `6`,
            title: "TypeScript",
            description: "",
            Image: typescript,
            backgroundColor: "#007acc",
        },
        {
            id: `7`,
            title: "NodeJS",
            description: "",
            Image: NodeJS,
            backgroundColor: "#F7DF1E",
        },
        {
            id: `8`,
            title: "JAVA",
            description: "",
            Image: JAVA,
            backgroundColor: "#F7DF1E",
        },
        {
            id: `9`,
            title: "vue",
            description: "",
            Image: vue,
            backgroundColor: "#41b820",
        },
        {
            id: `10`,
            title: "Android",
            description: "",
            Image: Android,
            backgroundColor: "#A4C639",
        },
        {
            id: `11`,
            title: "iOS",
            description: "",
            Image: iOS,
            backgroundColor: "white",
        },
        {
            id: `12`,
            title: "Altro",
            description: "",
            Image: oth,
            backgroundColor: "grey",
        }]

    return (
        <div className="SkillComponent">

            {svgArray.map(({ id, title, description, Image, backgroundColor }) => (
                <div className="SkillSVG" key={id}>
                    <div className='svg' style={{backgroundColor:`${backgroundColor}`, border: `1px solid ${backgroundColor}`, borderRadius: '10px'}}>
                        <div className='TitleSVG'><div>{title}</div></div>
                        <Image/>
                        <div className='descriptionSVG'>{description}</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

