import { Player } from "./Player";
import { Scene } from "./Scene";

export class Game {
  appNode: HTMLDivElement;

  constructor (appNode: HTMLDivElement) {
    this.appNode = appNode;
  }
  

  init() {
    new Scene(480, this.appNode).createScene();
    new Player().init();
  }
}