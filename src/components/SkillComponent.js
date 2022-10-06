import { ReactComponent as Angular } from "../assets/svg/Angular.svg";
import { ReactComponent as css3 } from "../assets/svg/css3.svg";
import { ReactComponent as HTML5 } from "../assets/svg/HTML5.svg";
import { ReactComponent as js } from "../assets/svg/js.svg";
import { ReactComponent as Reactjs } from "../assets/svg/Reactjs.svg";
import { ReactComponent as typescript } from "../assets/svg/typescript.svg";
import { ReactComponent as NodeJS } from "../assets/svg/nodejs.svg";
import { ReactComponent as JAVA } from "../assets/svg/java.svg";
import { ReactComponent as vue } from "../assets/svg/vue.svg";
import { ReactComponent as Android } from "../assets/svg/android.svg";
import { ReactComponent as iOS } from "../assets/svg/ios.svg";
import { ReactComponent as other } from "../assets/svg/other.svg";
import { ReactComponent as Python } from "../assets/svg/python.svg";
import { ReactComponent as GoLang } from "../assets/svg/Go-Logo_Fuchsia.svg";
import { useState } from "react";
import { SkillButton } from "./SkillButton";

export function SkillComponent() {
  const svgArray = [
    {
      id: `1`,
      title: "Angular",
      Image: Angular,
      backgroundColor: "#DD0031",
      borderColor: "transparent",
      gradient:
        "linear-gradient(225deg, rgba(73,0,16,1) 0%, rgba(221,0,49,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `2`,
      title: "CSS3",
      Image: css3,
      backgroundColor: "white",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(0,58,97,1) 0%, rgba(0,122,204,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `3`,
      title: "HTML5",
      Image: HTML5,
      backgroundColor: "#F16529",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,101,41,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `4`,
      title: "JavaScript",
      Image: js,
      backgroundColor: "#F7DF1E",
      borderColor: "transparent",
      gradient:
        "linear-gradient(225deg, rgba(139,126,18,1) 0%, rgba(247,223,30,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `5`,
      title: "ReactJS",
      Image: Reactjs,
      backgroundColor: "#61DAFB",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(61,134,154,1) 0%, rgba(97,218,251,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `6`,
      title: "TypeScript",
      Image: typescript,
      backgroundColor: "#007acc",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(0,58,97,1) 0%, rgba(0,122,204,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `7`,
      title: "NodeJS",
      Image: NodeJS,
      backgroundColor: "#F7DF1E",
      borderColor: "transparent",
      gradient:
        "linear-gradient(225deg, rgba(139,126,18,1) 0%, rgba(247,223,30,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `8`,
      title: "JAVA",
      Image: JAVA,
      backgroundColor: "#F7DF1E",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(139,126,18,1) 0%, rgba(247,223,30,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `9`,
      title: "vue",
      Image: vue,
      backgroundColor: "#41b820",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(27,78,13,1) 0%, rgba(65,184,32,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `10`,
      title: "Android",
      Image: Android,
      backgroundColor: "#A4C639",
      borderColor: "transparent",
      gradient:
        "linear-gradient(225deg, rgba(85,102,33,1) 0%, rgba(164,198,57,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `11`,
      title: "iOS",
      Image: iOS,
      backgroundColor: "white",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(199,199,199,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `12`,
      title: "Altro",
      Image: other,
      backgroundColor: "grey",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(199,199,199,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `13`,
      title: "Python",
      Image: Python,
      backgroundColor: "#007acc",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(0,58,97,1) 0%, rgba(0,122,204,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
    {
      id: `14`,
      title: "GoLang",
      Image: GoLang,
      backgroundColor: "#ff00d9",
      borderColor: "transparent",
      gradient:
        "radial-gradient(circle, rgba(198,198,198,1) 0%, rgba(255,0,217,1) 100%)",
      boxwidth: "150px",
      boxheight: "170px",
      align: "center",
    },
  ];

  const shuffle = (svgArray) => [...svgArray].sort(() => Math.random() - 0.5);
  const newList = shuffle(svgArray);

  return (
    <>
      <div className="SkillComponent" style={{ marginBottom: "20%" }}>
        {newList.map(
          ({
            id,
            title,
            Image,
            backgroundColor,
            borderColor,
            gradient,
            boxheight,
            boxwidth,
            align,
          }) => (
            <SkillButton
              key={id}
              borderColor={borderColor}
              title={title}
              backgroundColor={backgroundColor}
              gradient={gradient}
              Image={Image}
              boxheight={boxheight}
              boxwidth={boxwidth}
              align={align}
            />
          )
        )}
      </div>
    </>
  );
}
