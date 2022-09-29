import { useState } from "react"

import Add from '../assets/svg/Add.svg'
import Remove from '../assets/svg/Remove.svg'

const UploadButton = ({
    wd,
    bgColor,
    text,
    textColor,
    wg,
    textClicked,
    hg,
    profile
  }) =>  {

const [active, setActive] = useState(true);

const handleButtonClick = () => {
setActive(false);
};

const handleButtonClicked = () => {
setActive(true);
}
return (
    <div style={{width: '100%', display: "flex", justifyContent: "center", paddingTop: '44px'}}>
          {active && <button
          onClick={handleButtonClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: bgColor,
            width: '266px',
            color: textColor,
            fontWeight: wg,
            borderRadius: "6px",
            height: '50px',
            border: "none",
            cursor: "pointer",
          }}
        >
            {!profile && <><div style={{width: '60%', display: 'flex', justifyContent:'flex-end'}}>
          {text}
            </div>
            {<div style= {{width: '40%', display: 'flex', justifyContent:'center'}}>
                <img src={Add} alt="+" />
            </div>} </>}

            {profile && <div style = {{width: '100%', display:"flex", justifyContent:"center"}}>
              <div >
                {text}
              </div>
              </div>}
        </button>}
        {!active && <div> <button
          onClick={handleButtonClicked}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: bgColor,
            width: '266px',
            color: textColor,
            fontWeight: wg,
            borderRadius: "6px",
            height: '50px',
            border: "none",
            cursor: "pointer",
          }}
        >
          {!profile && <><div style={{width: '60%', display: 'flex', justifyContent:'flex-end'}}>
          {textClicked}
            </div>
            <div style= {{width: '40%', display: 'flex', justifyContent:'center'}}>
                <img src={Remove} alt="-" />
            </div> </>}
            {profile && <div style = {{width: '100%', display:"flex", justifyContent:"center"}}>
              <div >
                {textClicked}
              </div>
              </div>}
        </button>
        {!profile && <a href="#" style= {{fontSize: "12px", textDecoration: "none"}}> Mary Rose - Full Stack Developer.pdf</a>}
         </div>
        }
    </div>
)
}


export default UploadButton