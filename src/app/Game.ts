import { Player } from "./Player";
import { Scene } from "./Scene";

export class Game extends Scene {
  
  constructor (appNode: HTMLDivElement) {
    super(appNode);
  }

  init() {
    this.createScene();
    new Player(this.appNode).createPlayer();
  }
}