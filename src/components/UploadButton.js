import { useRef, useState } from "react";
// import { set } from "react-hook-form";

import Add from "../assets/svg/Add.svg";
import Remove from "../assets/svg/Remove.svg";

const UploadButton = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
  profile,
}) => {
  const [active, setActive] = useState(true);
  const inputRef = useRef(null);

  const [file, setFile] = useState("");

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    // const fileObj = e.target.files && e.target.files[0];
    // if (!fileObj) {
    //   return;
    // }
    // console.log(fileObj);
    // e.target.value = null;

    // console.log(fileObj);
    // console.log(fileObj.name);
    setFile(e.target.files[0]);
  };

  const handleButtonClick = () => {
    setFile("");
    setActive(false);
    handleClick();
  };

  const handleButtonClicked = () => {
    setActive(true);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "44px",
      }}
    >
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        accept=".pdf"
        id="file"
        name="file"
      />
      {active && (
        <>
          <button
            onClick={handleButtonClick}
            for="file"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: bgColor,
              width: "266px",
              color: textColor,
              fontWeight: wg,
              borderRadius: "6px",
              height: "50px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {!profile && (
              <>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {text}
                </div>
                {
                  <div
                    style={{
                      width: "40%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={Add} alt="+" />
                  </div>
                }{" "}
              </>
            )}

            {profile && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>{text}</div>
              </div>
            )}
          </button>{" "}
        </>
      )}
      {!active && (
        <div>
          {" "}
          <button
            onClick={handleButtonClicked}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: bgColor,
              width: "266px",
              color: textColor,
              fontWeight: wg,
              borderRadius: "6px",
              height: "50px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {!profile && (
              <>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {textClicked}
                </div>
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={Remove} alt="-" />
                </div>{" "}
              </>
            )}
            {profile && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>{textClicked}</div>
              </div>
            )}
          </button>
          {!profile && (
            <a href="#" style={{ fontSize: "12px", textDecoration: "none" }}>
              {file.name}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadButton;
