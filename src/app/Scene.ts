import { Actor } from "./Actor";
import { Area } from "./Area";
import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";
import { type Area as AreaType } from "./types/area.type";

export class Scene {
  appNode: HTMLDivElement;
  width: number = 640;
  height: number = 480;
  areas: AreaType[] = [
    { name: 'top', heightPercent: 16,  bgcolor: '#03350F'},
    { name: 'river', heightPercent: 34,  bgcolor: '#382DB5'},
    { name: 'bricks', heightPercent: 8,  bgcolor: '#4A1705'},
    { name: 'road', heightPercent: 26,  bgcolor: '#000'},
    { name: 'bottom', heightPercent: 16,  bgcolor: '#03350F'},
  ];

  constructor (appNode: HTMLDivElement) {
    this.appNode = appNode;
  }

  createScene(): void {
    this.appNode.style.width = Utils.convertToUnit(this.width, 'rem');
    this.appNode.style.height = Utils.convertToUnit(this.height, 'rem');
    this.areas.map((area) => {
      new Area(this.appNode, area.heightPercent, area.bgcolor, area.name).appendArea();
    })
    this.#addActors();
  }

  #addActors(): void {
    new Actor(64, 64, 200, 40, 'truck', this.appNode).initActor();
    console.log(document.querySelector(`.${cssRootId}-top`)?.getBoundingClientRect());
    
  }
}