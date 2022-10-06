import { useRef, useState, useEffect } from "react"

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
const inputRef = useRef(null);
const [file, setFile] = useState(null);
const [file_name, setFile_name] = useState('');

useEffect (() => {
  if(file !== null) {
 setFile_name(file.name)
 console.log(file_name);
  }
}, [file])
const handleClick = () => {
  inputRef.current.click();
}

// const handleFileChange = (e) => {
//   console.log(e.target.files[0])
//  console.log(e.target.name) 
//  setFile(e.target.files[0]);
//  console.log(file)
// }

const handleButtonClick = () => {
setActive(false);
handleClick();

};

const handleButtonClicked = () => {
setActive(true);
}
return (
    <div style={{width: '100%', display: "flex", justifyContent: "center", paddingTop: '44px'}}>
          {active && <>
          <label
          style = {{
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
          <input 
          style ={{display:"none"
        }}
          ref= {inputRef}
          type="file"
          onChange={(event) => {
            console.log(event.target.files[0]);

                setFile(event.target.files[0]);
                console.log(event.target.files[0]);
                console.log(file);
                console.log(event.target);
                setActive(false);
                event.target.value = null;
          }}
          accept= ".pdf"
          id="file"
          name="file"
          /> </label> </>}
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
        {!profile && <a href="#"  style= {{fontSize: "12px", textDecoration: "none"}}>{file_name}</a>}
         </div>
        }
    </div>
)
}


export default UploadButton