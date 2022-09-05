import { Link } from "react-router-dom";
import Button from "./Button";
import MakePhotoButton from "./MakePhotoButton";
import UploadButtonPhoto from "./UploadButtonPhoto";

export function AddPhoto({ user, company }) {
    return (
        <div style={{ margin: "5%" }} className="PhotoContainer">
            {user && <>
                <div>
                    <p style={{ color: "#364764", fontWeight: "bold" }}>Aggiungi foto</p></div>
                <MakePhotoButton
                    bgColor={'#FCF347'}
                    text={'SCATTA UNA FOTO'}
                    textColor={'#364764'}
                    textClicked={'SCATTA UNA FOTO'}
                    registration user />
                <UploadButtonPhoto registration user
                    bgColor={'#364764'}
                    textColor={'white'}
                    text={'CARICA UNA FOTO'}
                    textClicked={'ELIMINA FOTO'} />
                <div className="container-continue-button">
                    <Link to='/signUp/Addphoto/#'><Button lowOp text={'CARICA IN SEGUITO'} bgColor={'#FCF347'} textColor={'#364764'} wd={'266px'} hg={'50px'} wg={'bold'} /></Link>
                </div>
            </>}
            {company && <>
                <div>
                    <p style={{ color: "#364764", fontWeight: "bold" }}>Aggiungi logo azienda</p></div>
                <UploadButtonPhoto registration company
                    bgColor={'#FCF347'}
                    text={'CARICA UN LOGO'}
                    textColor={'#364764'}
                    textClicked={'CAMBIA IL LOGO'} />
                <div className="container-continue-button">
                    <Link to='/signUp/Addphoto/#'><Button lowOp text={'CARICA IN SEGUITO'} bgColor={'#FCF347'} textColor={'#364764'} wd={'266px'} hg={'50px'} wg={'bold'} /></Link>
                </div>
            </>}
        </div>
    )
}