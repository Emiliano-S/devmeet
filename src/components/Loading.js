import loadingWhiteArrow from "../assets/svg/loadingWhiteArrow.svg";
import loadingYellowArrow from "../assets/svg/loadingYellowArrow.svg";

export function Loading() {
  return (
    <div className="LoadingContainer">
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
    </div>
  );
}
