import asap from "fitbit-asap/companion"
import { onReceive } from './transport';
import { me } from "appbit";

asap.onmessage = message => {
  if (message) {
    onReceive(message);
  }
}
