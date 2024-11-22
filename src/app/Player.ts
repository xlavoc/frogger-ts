import { cssRootId } from "./consts/cssRootId";
import { Scene } from "./Scene";
import { Utils } from "./Utils";

export class Player extends Scene {

  createPlayer(): void {
    const div = document.createElement('div');
    const size = this.getLaneHeight();

    div.classList.add(`${cssRootId}-player`);
    div.style.height = Utils.convertToUnit(size, 'rem');
    this.appNode.appendChild(div);
  }
}