import { createTrackElement } from "./track";

export default {
  title: "components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () => createTrackElement("Thriller", "Michael Jackson");
export const one = () => createTrackElement("Billie Jean", "Michael Jackson");
export const two = () => createTrackElement("Beat It", "Michael Jackson");
