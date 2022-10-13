import loadingWhiteArrow from "../assets/svg/loadingWhiteArrow.svg";
import loadingYellowArrow from "../assets/svg/loadingYellowArrow.svg";

export function Loading() {
  return (
    <div className="LoadingContainer">
      <div className="LoadingContent">
        <div className="LoadingAnimationContainer">
          <img
            src={loadingWhiteArrow}
            alt="Loading arrow"
            id="LoadingWhiteArrow"
          />
          <img
            src={loadingYellowArrow}
            alt="Loading arrow"
            id="LoadingYellowArrow"
          />
        </div>
        <span className="LoadingText">
          Stiamo cercando i candidati più adatti alla tua azienda...
        </span>
      </div>
    </div>
  );
}
