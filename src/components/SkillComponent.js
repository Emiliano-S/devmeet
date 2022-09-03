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
import { useState } from 'react'
import { SkillButton } from './SkillButton'

export function SkillComponent() {

    const svgArray = [
        {
            id: `1`,
            title: "Angular",
            description: "",
            Image: Angular,
            backgroundColor: "#DD0031",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(221,0,49,1) 100%)",
        },
        {
            id: `2`,
            title: "CSS3",
            description: "",
            Image: css3,
            backgroundColor: "white",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(199,199,199,1) 100%)",
        },
        {
            id: `3`,
            title: "HTML5",
            description: "",
            Image: HTML5,
            backgroundColor: "#F16529",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,101,41,1) 100%)",
        },
        {
            id: `4`,
            title: "JavaScript",
            description: "",
            Image: js,
            backgroundColor: "#F7DF1E",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(247,223,30,1) 100%)",
        },
        {
            id: `5`,
            title: "ReactJS",
            description: "",
            Image: Reactjs,
            backgroundColor: "#61DAFB",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(97,218,251,1) 100%)",
        },
        {
            id: `6`,
            title: "TypeScript",
            description: "",
            Image: typescript,
            backgroundColor: "#007acc",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,122,204,1) 100%)",
        },
        {
            id: `7`,
            title: "NodeJS",
            description: "",
            Image: NodeJS,
            backgroundColor: "#F7DF1E",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(247,223,30,1) 100%)",
        },
        {
            id: `8`,
            title: "JAVA",
            description: "",
            Image: JAVA,
            backgroundColor: "#F7DF1E",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(247,223,30,1) 100%)",
        },
        {
            id: `9`,
            title: "vue",
            description: "",
            Image: vue,
            backgroundColor: "#41b820",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(65,184,32,1) 100%)",
        },
        {
            id: `10`,
            title: "Android",
            description: "",
            Image: Android,
            backgroundColor: "#A4C639",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(164,198,57,1) 100%)",
        },
        {
            id: `11`,
            title: "iOS",
            description: "",
            Image: iOS,
            backgroundColor: "white",
            borderColor: "transparent",
            gradient: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(199,199,199,1) 100%)',
        },
        {
            id: `12`,
            title: "Altro",
            description: "",
            Image: oth,
            backgroundColor: "grey",
            borderColor: "transparent",
            gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(199,199,199,1) 100%)",
        }]

        const shuffle = svgArray => [...svgArray].sort(() => Math.random() - 0.5);
        const newList = shuffle(svgArray);

    return (
        <>
            <div className="SkillComponent">
                {newList.map(({ id, title, description, Image, backgroundColor, borderColor, gradient }) =>
                (<SkillButton
                    key={id}
                    borderColor={borderColor}
                    title={title}
                    description={description}
                    backgroundColor={backgroundColor}
                    gradient={gradient}
                    Image={Image} />))}
            </div>
        </>
    )
}

