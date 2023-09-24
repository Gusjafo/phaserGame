import { Game, AUTO, Scale, Scene} from "phaser";
import { PlayScene } from "./PlayScene";

export function launch() {
    return new Game({
      type: AUTO,
      scale: {
        mode: Scale.RESIZE,
        width: window.innerWidth * window.devicePixelRatio,
        autoCenter: Scale.CENTER_BOTH,
        height: window.innerHeight * window.devicePixelRatio,
      },
      parent: "game",
      backgroundColor: "#201726",
      physics: {
        default: "arcade",
      },
      scene: PlayScene,
    });
}