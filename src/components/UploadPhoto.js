import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import CloudWhite from "../assets/svg/CloudWhite.svg";
import Placeholder from "../assets/svg/Placeholder.svg";
import Logoholder from "../assets/svg/Logoholder.svg";
import xRemove from "../assets/svg/xRemove.svg";

const UploadAndDisplayImage = ({
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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {user && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {selectedImage ? (
            <>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FCF347",
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
                  borderRadius: "50%",
                  height: "300px",
                  width: "300px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="not fount"
                  style={{
                    height: "300px",
                    width: "300px",
                  }}
                  src={URL.createObjectURL(selectedImage)}
                />
              </div>
              <br />
            </>
          ) : (
            <img src={Placeholder} width={"104px"} />
          )}
        </div>
      )}
      {company && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {selectedImage ? (
            <>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FCF347",
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
                  borderRadius: "50%",
                  height: "300px",
                  width: "300px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="not fount"
                  style={{
                    height: "300px",
                    width: "300px",
                  }}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
              </div>
            </>
          ) : (
            <img src={Logoholder} width={"104px"} />
          )}
        </div>
      )}
      <br />

      <br />
      {selectedImage === null ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
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
            <input
              style={{ display: "none" }}
              type="file"
              name="myImage"
              accept= "image/*"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                event.target.value = null;
              }}
            />
          </label>
          <div>
            <Link to="/FilterBy">
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
        </div>
      ) : (
        <div>
          <Link to="/FilterBy">
            <Button
              lowOp
              text={"REGISTRATI"}
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
  );
};

export default UploadAndDisplayImage;
