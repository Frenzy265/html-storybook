import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const electroTrack = () =>
  createTrackElement({
    title: "Exit only",
    artist: "Lately kind of yeah",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/tracks/Track_-_20190621120353684?method=crop&width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Decoder_Magazine/Lately_Kind_of_Yeah/Huttons_Paradox/Lately_Kind_of_Yeah_-_02_-_Exit_Only.mp3",
  });

export const jazzTrack = () =>
  createTrackElement({
    title: "Rosalie",
    artist: "Checkie Brown",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/Checkie_Brown_-_Checkie_Brown_-_2019022085148047.jpg?method=crop&width=155&height=155",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Checkie_Brown/hey/Checkie_Brown_-_12_-_Rosalie_CB_29.mp3",
  });

export const hipHopTrack = () =>
  createTrackElement({
    title: "The Last Love Song",
    artist: "Elephant Funeral",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/artists/Elephant_Funeral_-_20190316100934240.jpg?width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Elephant_Funer/Unfinished_Tales/Elephant_Funer_-_01_-_The_Last_Love_Song.mp3",
  });

export const songs = () => {
  const hipHop = {
    title: "The Last Love Song",
    artist: "Elephant Funeral",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/artists/Elephant_Funeral_-_20190316100934240.jpg?width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Elephant_Funer/Unfinished_Tales/Elephant_Funer_-_01_-_The_Last_Love_Song.mp3",
  };

  const jazz = {
    title: "Rosalie",
    artist: "Checkie Brown",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/Checkie_Brown_-_Checkie_Brown_-_2019022085148047.jpg?method=crop&width=155&height=155",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Checkie_Brown/hey/Checkie_Brown_-_12_-_Rosalie_CB_29.mp3",
  };

  const electro = {
    title: "Exit only",
    artist: "Lately kind of yeah",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/tracks/Track_-_20190621120353684?method=crop&width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Decoder_Magazine/Lately_Kind_of_Yeah/Huttons_Paradox/Lately_Kind_of_Yeah_-_02_-_Exit_Only.mp3",
  };

  const playlist = [hipHop, jazz, electro];

  const container = document.createElement("section");

  playlist.forEach((track) => {
    const trackElement = createTrackElement(track);
    container.append(trackElement);
  });

  return container;
};
