import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import CloudWhite from "../assets/svg/CloudWhite.svg";

const UploadAndDisplayImage = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
  user,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      {selectedImage === null ? (
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
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
              event.target.value = null;
            }}
          />
        </label>
      ) : (
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
      )}
    </div>
  );
};

export default UploadAndDisplayImage;
