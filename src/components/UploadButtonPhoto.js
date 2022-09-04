import { useState } from "react"
import UserPicture from '../assets/img/userPicture/MarioVerde.png'
import Placeholder from '../assets/svg/Placeholder.svg'
import Cloud from '../assets/svg/Cloud.svg'
import Remove from '../assets/svg/Remove.svg'

const UploadButtonPhoto = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
}) => {

  const [active, setActive] = useState(true);

  const handleButtonClick = () => {
    setActive(false);
  };

  const handleButtonClicked = () => {
    setActive(true);
  }
  return (
    <div style={{ width: '100%', display: "flex", justifyContent: "center", marginTop: '22px' }}>
      {active &&
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div style={{display: "flex", justifyContent: "center", paddingBottom: "44px", borderRadius:"5px"}}>
            <img src={Placeholder} />
          </div>
          <button
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
            <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold" }}>
              {text}
            </div>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
              <img src={Cloud} alt="+" />
            </div>
          </button></div>}
      {!active &&
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
          <div>
            <img src={UserPicture}/>
          </div>
          <button
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
              marginTop: "22px",
            }}
          >
            <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold" }}>
              {textClicked}
            </div>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
              <img src={Remove} alt="-" />
            </div>
          </button>
        </div>
      }
    </div>
  )
}


export default UploadButtonPhoto