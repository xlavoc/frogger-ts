import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";

export class Actor {
  x: number;
  y: number;
  w: number;
  h: number;
  name: string;
  appNode: HTMLDivElement;

  constructor(x: number, y: number, w: number, h: number, name: string, appNode: HTMLDivElement) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.name = name;
    this.appNode = appNode;
  }

  initActor(): void {
    // const div = document.createElement('div');
    // div.style.width = Utils.convertToUnit(this.w, 'rem');
    // div.style.height = Utils.convertToUnit(this.h, 'rem');
    // div.style.left = Utils.convertToUnit(this.x), 'rem';
    // div.style.top = Utils.convertToUnit(this.y, 'rem');
    // div.classList.add(...[`${cssRootId}-${this.name}`, `${cssRootId}-actor`]);
    // this.appNode.appendChild(div);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = Utils.convertToUnit(this.w, 'rem');
    svg.style.height = Utils.convertToUnit(this.h, 'rem');
    svg.style.left = Utils.convertToUnit(this.x), 'rem';
    svg.style.top = Utils.convertToUnit(this.y, 'rem');
    svg.classList.add(...[`${cssRootId}-${this.name}`, `${cssRootId}-actor`]);

    const symbol = document.createElementNS('http://www.w3.org/2000/svg','use');
    symbol.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `src/assets/symbols.svg#${this.name}`);
    svg.appendChild(symbol);
    document.body.appendChild(svg);
  }
}