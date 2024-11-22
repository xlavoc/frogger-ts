import { Actor } from "./Actor";
import { Area } from "./Area";
import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";
import { type Area as AreaType } from "./types/area.type";

export class Scene {
  RATIO: number = 7 / 5;
  // UNIT: number = 16;
  appNode: HTMLDivElement;
  boardHeight: number;
  areas: AreaType[] = [
    { name: 'top', lanes: 3,  bgcolor: '#03350F'},
    { name: 'river', lanes: 5,  bgcolor: '#382DB5'},
    { name: 'sidewalk', lanes: 1,  bgcolor: '#4A1705'},
    { name: 'road', lanes: 4,  bgcolor: '#000'},
    { name: 'bottom', lanes: 2,  bgcolor: '#03350F'},
  ];

  constructor (boardHeight: number, appNode: HTMLDivElement) {
    this.boardHeight = boardHeight;
    this.appNode = appNode;
  }

  getBoardWidth(): number {
    return this.boardHeight * this.RATIO;
  }

  getLanesTotal(): number {
    return this.areas.reduce((p,c) => p + c.lanes, 0);
  }

  getLaneHeight(): number {
    return this.boardHeight / this.getLanesTotal();
  }

  createScene(): void {
    this.appNode.style.width = Utils.convertToUnit(this.getBoardWidth(), 'rem');
    this.appNode.style.height = Utils.convertToUnit(this.boardHeight, 'rem');
    this.areas.map((area) => {
      new Area(this.appNode, area.lanes * this.getLaneHeight(), area.bgcolor, area.name).appendArea();
    })
    this.#addActors();
  }

  #addActors(): void {
    new Actor('car1', 100, this.getLaneHeight() * 2, this.getLaneHeight(), this.getLaneHeight(), 1, 1, document.querySelector(`.${cssRootId}-road`)!).initActor();
    console.log(document.querySelector(`.${cssRootId}-top`)?.getBoundingClientRect());
    
  }
}