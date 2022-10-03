import { useState } from "react";
import UserPicture from "../assets/img/userPicture/MarioVerde.png";
import LogoAzienda from "../assets/img/userPicture/meta.webp";
import Placeholder from "../assets/svg/Placeholder.svg";
import Logoholder from "../assets/svg/Logoholder.svg";
import CloudWhite from "../assets/svg/CloudWhite.svg";
import Remove from "../assets/svg/Remove.svg";
import xRemove from "../assets/svg/xRemove.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const UploadButtonPhoto = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
  user,
  company,
}) => {
  const [active, setActive] = useState(true);

  const handleButtonClick = () => {
    setActive(false);
  };

  const handleButtonClicked = () => {
    setActive(true);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "300px",
      }}
    >
      {active && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {company && (
              <>
                <div
                  style={{
                    maxWidth: "fit-content",
                    maxHeight: "fit-content",
                    marginBottom: "22px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{ width: "95px", marginBottom: "22px" }}
                    src={Logoholder}
                    alt="LogoAzienda"
                  />
                </div>
              </>
            )}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: bgColor,
                width: "266px",
                color: textColor,
                borderRadius: "6px",
                height: "50px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <input
                onChange={handleButtonClick}
                // style={{ display: "none" }}
                type={"file"}
                accept="image/*"
              />
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {text}
              </div>
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={CloudWhite} alt="+" />
              </div>
            </label>
            {company && (
              <div style={{ marginTop: "250px" }}>
                <Link to="/signUp/Addphoto/#">
                  <Button
                    lowOp
                    text={"CARICA IN SEGUITO"}
                    bgColor={"#FCF347"}
                    textColor={"#364764"}
                    wd={"266px"}
                    hg={"50px"}
                    wg={"bold"}
                  />
                </Link>
              </div>
            )}
          </div>
        </>
      )}
      {!active && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {company && (
              <>
                <div
                  className="ContainerLogo"
                  style={{ width: "312px", height: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      onClick={handleButtonClicked}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: bgColor,
                        width: "30px",
                        color: textColor,
                        fontWeight: wg,
                        borderRadius: "1px",
                        height: "30px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "40%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={xRemove} alt="x" />
                      </div>
                    </button>
                  </div>
                  <div
                    style={{
                      maxWidth: "fit-content",
                      maxHeight: "fit-content",
                      marginBottom: "22px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      style={{ width: "312px", height: "309px" }}
                      src={LogoAzienda}
                      alt="LogoAzienda"
                    />
                  </div>
                </div>
              </>
            )}
            <Link to="/signUp/Addphoto/#">
              <Button
                lowOp
                text={"CONTINUA"}
                bgColor={"#FCF347"}
                textColor={"#364764"}
                wd={"266px"}
                hg={"50px"}
                wg={"bold"}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UploadButtonPhoto;
