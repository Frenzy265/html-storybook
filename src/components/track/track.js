import playActionSrc from "../../assets/playAction.svg";
import pauseBtnSrc from "../../assets/icon-pause-gradient.svg";
import "./track.css";
import { createElement } from "../../utils/element";

export const createTrackElement = (track) => {
  const audioElement = new Audio(track.audioSrc);
  const playActionElement = createElement("img", {
    src: playActionSrc,
  });

  const trackElement = createElement("div", {
    className: "track",
    children: [
      createElement("img", {
        className: "track__image",
        src: track.imgSrc,
        alt: `Image of ${track.artist}`,
      }),

      createElement("div", {
        className: "rule",
        children: [
          createElement("div", {
            className: "textbox",
            children: [
              createElement("h3", {
                innerText: track.title,
              }),
              createElement("p", {
                innerText: track.artist,
              }),
            ],
          }),

          createElement("button", {
            className: "btn__play",
            children: [playActionElement],
            onclick: () => {
              if (!audioElement.paused) {
                audioElement.pause();
                showActionBtn(playActionElement);
              } else {
                audioElement.play();
                showPauseBtn(playActionElement);
              }
            },
          }),
        ],
      }),
    ],
  });

  return trackElement;
};

const showActionBtn = (element) => {
  element.src = playActionSrc;
  element.alt = "Play Button";
};

const showPauseBtn = (element) => {
  element.src = pauseBtnSrc;
  element.alt = "Pause Button";
};

//   const trackLine = document.createElement("div");
//   trackLine.className = "track";

//   const imgElement = document.createElement("img");
//   imgElement.src = track.imgSrc;
//   imgElement.alt = `Image of ${track.artist}`;
//   imgElement.className = "track__image";

//   const titleElement = document.createElement("h3");
//   titleElement.innerText = track.title;

//   const artistElement = document.createElement("p");
//   artistElement.innerText = track.artist;

//   const musicText = document.createElement("div");
//   musicText.className = "textbox";

//   const buttonElement = document.createElement("button");
//   buttonElement.className = "btn__play";
//   const playActionElement = document.createElement("img");
//   playActionElement.src = playAction;
//   playActionElement.alt = "Image of Play Button";
//   buttonElement.append(playActionElement);

//   let isPlaying = false;

//   const audioElement = new Audio(track.audioSrc);
//   buttonElement.onclick = function () {
//     if (isPlaying) {
//       // isPlaying = false;
//       audioElement.pause();
//       showActionBtn(playActionElement);
//     } else {
//       // isPlaying = true;
//       audioElement.play();
//       showPauseBtn(playActionElement);
//     }
//     isPlaying = !isPlaying;
//   };

//   const ruleElement = document.createElement("div");
//   ruleElement.className = "rule";
//   ruleElement.append(musicText, buttonElement);

//   musicText.append(titleElement, artistElement);
//   trackLine.append(imgElement, ruleElement);

//   return trackLine;
// }
