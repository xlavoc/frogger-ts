import { Utils } from "./Utils";
import { Hex } from "./types/hex.type";
import { cssRootId } from "./consts/cssRootId";

export class Area {
  height: number;
  bgcolor: Hex;
  parent: HTMLDivElement;
  name: string;

  constructor (parentNode: HTMLDivElement, height: number, backgroundColor: Hex, name: string) {
    this.parent = parentNode;
    this.height = height;
    this.bgcolor = backgroundColor;
    this.name = name;
  }

  appendArea(): void {
    const area = document.createElement('area');
    area.style.height = Utils.convertToUnit(this.height, '%');
    area.style.backgroundColor = this.bgcolor;
    area.classList.add(`${cssRootId}-${this.name}`);
    this.parent.appendChild(area);
  }
}