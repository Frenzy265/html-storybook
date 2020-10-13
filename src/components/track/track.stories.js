import { createTrackElement } from "./track";

export default {
  title: "components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () =>
  createTrackElement({
    title: "Exit only",
    artist: "Lately kind of yeah",
    imgSrc:
      "https://ais.badische-zeitung.de/piece/0a/68/2a/ee/174598894-h-720.jpg",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Decoder_Magazine/Lately_Kind_of_Yeah/Huttons_Paradox/Lately_Kind_of_Yeah_-_02_-_Exit_Only.mp3",
  });

export const one = () =>
  createTrackElement({
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc:
      "https://ais.badische-zeitung.de/piece/0a/68/2a/ee/174598894-h-720.jpg",
  });

export const two = () =>
  createTrackElement({
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc:
      "https://ais.badische-zeitung.de/piece/0a/68/2a/ee/174598894-h-720.jpg",
  });
