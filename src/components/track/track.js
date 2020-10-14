import playAction from "../../assets/playAction.svg";
import pauseBtn from "../../assets/icon-pause-gradient.svg";
import "./track.css";

export function createTrackElement(track) {
  const trackLine = document.createElement("div");
  trackLine.className = "track";

  const imgElement = document.createElement("img");
  imgElement.src = track.imgSrc;
  imgElement.alt = `Image of ${track.artist}`;
  imgElement.className = "track__image";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;

  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;

  const musicText = document.createElement("div");
  musicText.className = "textbox";

  const buttonElement = document.createElement("button");
  buttonElement.className = "btn__play";
  const playActionElement = document.createElement("img");
  playActionElement.src = playAction;
  playActionElement.alt = "Image of Play Button";
  buttonElement.append(playActionElement);

  let isPlaying = false;

  const audioElement = new Audio(track.audioSrc);
  buttonElement.onclick = function () {
    if (isPlaying) {
      // isPlaying = false;
      audioElement.pause();
      showActionBtn(playActionElement);
    } else {
      // isPlaying = true;
      audioElement.play();
      showPauseBtn(playActionElement);
    }
    isPlaying = !isPlaying;
  };

  const ruleElement = document.createElement("div");
  ruleElement.className = "rule";
  ruleElement.append(musicText, buttonElement);

  musicText.append(titleElement, artistElement);
  trackLine.append(imgElement, ruleElement);

  return trackLine;
}

const showActionBtn = (element) => {
  element.src = playAction;
  element.alt = "Play Button";
};

const showPauseBtn = (element) => {
  element.src = pauseBtn;
  element.alt = "Pause Button";
};
