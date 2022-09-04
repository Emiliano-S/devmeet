import MakePhotoButton from "./MakePhotoButton";
import UploadButtonPhoto from "./UploadButtonPhoto";

export function AddPhoto() {
    return (
        <div style={{margin: "5%"}} className="PhotoContainer">
            <div><p style={{ color: "#364764", fontWeight: "bold"}}>Aggiungi foto</p></div>
            <UploadButtonPhoto
            bgColor= {'#FCF347'}
            text= {'CARICA FOTO'}
            textColor = {'#364764'}
            textClicked ={'ELIMINA FOTO'}/>
            <MakePhotoButton
            bgColor= {'#364764'}
            text= {'SCATTA FOTO'}
            textColor = {'white'}
            textClicked ={'SCATTA NUOVA FOTO'}/>
        </div>
    )
}