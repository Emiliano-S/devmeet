import { Link } from "react-router-dom";
import Button from "./Button";
import MakePhotoButton from "./MakePhotoButton";
import UploadButtonPhoto from "./UploadButtonPhoto";

export function AddPhoto({user, company}) {
    return (
        <div style={{ margin: "5%" }} className="PhotoContainer">
            {user && <>
                <div>
                    <p style={{ color: "#364764", fontWeight: "bold" }}>Aggiungi foto</p></div>
                <UploadButtonPhoto
                    bgColor={'#FCF347'}
                    text={'CARICA UNA FOTO'}
                    textColor={'#364764'}
                    textClicked={'ELIMINA FOTO'} />
                <MakePhotoButton
                    bgColor={'#364764'}
                    text={'SCATTA UNA FOTO'}
                    textColor={'white'}
                    textClicked={'SCATTA NUOVA FOTO'} />
                <div className="container-continue-button">
                    <Link to='/signUp/Addphoto/#'><Button lowOp text={'CARICA IN SEGUITO'} bgColor={'#FCF347'} textColor={'#364764'} wd={'266px'} hg={'50px'} wg={'bold'} /></Link>
                </div>
            </>}
            {company && <>
                <div>
                    <p style={{ color: "#364764", fontWeight: "bold" }}>Aggiungi logo azienda</p></div>
                <UploadButtonPhoto
                    bgColor={'#FCF347'}
                    text={'CARICA LOGO'}
                    textColor={'#364764'}
                    textClicked={'ELIMINA LOGO'} />
                <div className="container-continue-button">
                    <Link to='/signUp/Addphoto/#'><Button lowOp text={'CARICA IN SEGUITO'} bgColor={'#FCF347'} textColor={'#364764'} wd={'266px'} hg={'50px'} wg={'bold'} /></Link>
                </div>
            </>}
        </div>
    )
}