import document from "document";
import {send} from "./transport";
import { me } from "appbit";

let btn_sad = document.getElementById("btn-sad");
let btn_neutral = document.getElementById("btn-neutral");
let btn_happy = document.getElementById("btn-happy");


btn_sad.addEventListener("click", (evt) => {
  console.log("CLICKED");
  let mood_sad = {
      dataType: "mood_input",
      key: "mood",
      value: "sad",
      timestamp: new Date().getTime()
    }
    send(mood_sad)
    me.exit()
})

btn_neutral.addEventListener("click", (evt) => {
  console.log("CLICKED");
  let mood_neutral = {
    dataType: "mood_input",
    key: "mood",
    value: "neutral",
    timestamp: new Date().getTime()
  }
  send(mood_neutral)
  me.exit()
})

btn_happy.addEventListener("click", (evt) => {
  console.log("CLICKED");
  let mood_happy = {
    dataType: "mood_input",
    key: "mood",
    value: "happy",
    timestamp: new Date().getTime()
  }
  send(mood_happy)
  me.exit()
})

