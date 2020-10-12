import imageMichaelJackson from "../../assets/michaeljackson-icon.png";
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

export function createTrackElement(title, artist) {
  const trackLine = document.createElement("div");
  trackLine.className = "track";

  const musicText = document.createElement("div");
  musicText.className = "textbox";

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;

  const artistElement = document.createElement("p");
  artistElement.innerText = artist;

  const imgElement = document.createElement("img");
  imgElement.src = imageMichaelJackson;
  imgElement.alt = `Image of ${artist}`;

  const buttonElement = document.createElement("button");
  buttonElement.className = "btn__play";
  const playActionElement = document.createElement("img");
  playActionElement.src = playAction;
  playActionElement.alt = "Image of Play Button";
  buttonElement.onclick = function () {
    alert("Click!");
  };

  musicText.append(titleElement, artistElement);
  trackLine.append(imgElement, musicText, buttonElement);
  buttonElement.append(playActionElement);

  return trackLine;
}
