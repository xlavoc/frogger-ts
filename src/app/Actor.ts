import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";

export class Actor {
  x: number;
  y: number;
  w: number;
  h: number;
  name: string;
  spriteX: number;
  spriteY: number;
  appNode: HTMLDivElement;

  constructor(name: string, x: number, y: number, w: number, h: number, spriteX: number, spriteY: number,  appNode: HTMLDivElement) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.appNode = appNode;
  }

  initActor(): void {
    const container = document.createElement('div');
    container.classList.add(`${cssRootId}-actor`);
    container.style.width = Utils.convertToUnit(this.w, 'rem');
    container.style.height = Utils.convertToUnit(this.h, 'rem');
    container.style.left = Utils.convertToUnit(this.x, 'rem');
    container.style.top = Utils.convertToUnit(this.y, 'rem');

    const sprite = document.createElement('img');
    sprite.classList.add(`${cssRootId}-actor-sprite`);
    sprite.style.width = Utils.convertToUnit(this.h * 6, 'rem');
    sprite.style.left = Utils.convertToUnit(-this.spriteX * this.h, 'rem');
    sprite.style.top = Utils.convertToUnit(-this.spriteY * this.h, 'rem');
    container.appendChild(sprite);
    this.appNode.appendChild(container);
  }
}