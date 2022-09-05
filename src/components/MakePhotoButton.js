import { useEffect, useRef, useState } from "react"
import CloudWhite from '../assets/svg/CloudWhite.svg'
import Camera from '../assets/svg/Camera.svg'

const MakePhotoButton = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
}) => {

  const [active, setActive] = useState(true);
  const [photo, setPhoto] = useState(true);
  const [camera, setCamera] = useState(true);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);


  };



  const takePhoto = () => {
    setPhoto(false);
    setCamera(false);
    let photo = photoRef.current;
    let strip = stripRef.current;

    console.warn(strip);

    const data = photo.toDataURL("image/jpeg");

    console.warn(data);
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "myWebcam");
    link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    if (strip.firstChild != null) {
      setTimeout(() => {
        strip.removeChild(strip.firstChild);
      }, 500);
      setTimeout(() => {
        getVideo()
        setCamera(true)
      }, 600);
      console.log("cameraON");
      setPhoto(true);
    } else {
      setCamera(false);
      strip.insertBefore(link, strip.firstChild);
      console.log("cameraoff")
    }

  };

  const handleButtonClick = () => {
    setActive(false);
    getVideo();
  };

  const handleButtonClicked = () => {
    getVideo();
    setActive(true);
    setCamera(true);
  }

  return (
    <div style={{ width: '100%', display: "flex", justifyContent: "center", marginTop: '22px' }}>
      {active && <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
              <img src={Camera} alt="+" />
            </div>
          </button>

        </div>
      </>}
      {!active &&
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
              marginBottom:"20px"
            }}
          >
            <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold" }}>
              {textClicked}
            </div>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
              <img src={Camera} alt="-" />
            </div>
          </button>
          <>
            {camera &&
              <div style={{ display: "block", width: "400" }}>
                <video onCanPlay={() => paintToCanvas()} ref={videoRef} style={{ display: "block" }} />
                <canvas ref={photoRef} style={{ display: "none" }} />
              </div>}
            {!camera &&
              <div style={{ display: "none", width: "400" }}>
                <video onCanPlay={() => paintToCanvas()} ref={videoRef} style={{ display: "none" }} />
                <canvas ref={photoRef} style={{ display: "none" }} />
              </div>}
            <div>
              <div ref={stripRef} />
            </div>
            <button
              onClick={takePhoto}
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
                marginTop:"20px"
              }}
            >
              {photo &&
                  <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold",}}>
                    SCATTA
                  </div>
              }
              {!photo &&
                  <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold"}}>
                    SCATTA DI NUOVO
                  </div>
              }
              <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
                <img src={CloudWhite} alt="-" />
              </div>
            </button>
            {!photo &&
              <button
                onClick={takePhoto}
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
                  marginTop:"20px"
                }}
              >
                <div style={{ width: '60%', display: 'flex', justifyContent: 'center', fontWeight: "bold", paddingLeft: "40px"}}>
                  SALVA
                </div>
                <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
                  <img src={Camera} alt="-" />
                </div>
              </button>}
          </>
        </div>
      }
    </div>
  )
}


export default MakePhotoButton