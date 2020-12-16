import asap from "fitbit-asap/app";
import { me } from "appbit";

export function send(event) {
    asap.send(event, {'timeout': 604800000});
}