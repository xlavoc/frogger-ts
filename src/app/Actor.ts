import { Utils } from './Utils';
import { cssRootId } from './consts/cssRootId';

export class Actor {
  x: number;
  y: number;
  w: number;
  h: number;
  spriteX: number;
  spriteY: number;
  parentNode: HTMLDivElement;
  name?: string;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    spriteX: number,
    spriteY: number,
    parentNode: HTMLDivElement,
    name?: string,
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.parentNode = parentNode;
    this.name = name;
  }

  init(): void {
    const container = document.createElement('div');
    container.classList.add(`${cssRootId}-actor`);
    container.style.width = Utils.convertToUnit(this.w, 'rem');
    container.style.height = Utils.convertToUnit(this.h, 'rem');
    container.style.left = Utils.convertToUnit(this.x, 'rem');
    container.style.top = Utils.convertToUnit(this.y, 'rem');
    if (this.name) {
      container.classList.add(`${cssRootId}-${this.name}`);
    }

    const sprite = document.createElement('img');
    sprite.classList.add(`${cssRootId}-actor-sprite`);
    sprite.style.width = Utils.convertToUnit(this.h * 10, 'rem');
    sprite.style.left = Utils.convertToUnit(-this.spriteX * this.h, 'rem');
    sprite.style.top = Utils.convertToUnit(-this.spriteY * this.h, 'rem');
    container.appendChild(sprite);
    this.parentNode.appendChild(container);
  }
}
