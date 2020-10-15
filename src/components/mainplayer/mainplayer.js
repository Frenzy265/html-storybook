import "./mainplayer.css"
import backBtnSrc from "../../assets/btn-back.svg"
import playBtnSrc from "../../assets/btn-play-white.svg"

export const createControlElement = (control) => {

const controlElement = createElement("div", {
className: "control-box",
children: [
    createElement("button", {
        className: "btn-direction",
     children: [
         createElement("img", {
             src: backBtnSrc,
             alt: "Image of backward button"
         })
     ]  
    })
    createElement("button", {
        className: "btn-play",
        children: [
            createElement("img", {
                src: playBtnSrc,
                alt: "Image of play button"
            })
        ]
    })


]


}



)





}