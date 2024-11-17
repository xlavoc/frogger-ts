import { cssRootId } from "./consts/cssRootId";
import { Scene } from "./Scene";
import { Utils } from "./Utils";

export class Player extends Scene {

  createPlayer(): void {
    const div = document.createElement('div');
    const size = (this.height - this.areas.filter((el) => el.name === 'top')[0].heightPercent / 100 * this.height * 2) / 10;

    div.classList.add(`${cssRootId}-player`);
    div.style.height = Utils.convertToUnit(size, 'rem');
    this.appNode.appendChild(div);
  }
}