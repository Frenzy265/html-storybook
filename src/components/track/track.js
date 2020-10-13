import playAction from "../../assets/playAction.svg";
import "./track.css";

/* <div class="track">
        <div>
            <h3>Billy Jean</h3>
            <p>Michael Jackson</p>
        </div>
    <button>
        <img>playButton</img>
    </button>
</div>
*/

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

  const audioElement = new Audio(track.audioSrc);
  buttonElement.onclick = function () {
    audioElement.play();
  };

  const ruleElement = document.createElement("div");
  ruleElement.className = "rule";
  ruleElement.append(musicText, buttonElement);

  musicText.append(titleElement, artistElement);
  trackLine.append(imgElement, ruleElement);
  buttonElement.append(playActionElement);

  return trackLine;
}
