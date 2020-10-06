import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonShare from "./button-share.html";
import buttonPlay from "./button-play.html";
import buttonBigContent from "./button-big-content.html";

export default { title: "Components/Button" };

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const withShare = () => buttonShare;
export const withPlay = () => buttonPlay;
export const withBigContent = () => buttonBigContent;
