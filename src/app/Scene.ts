import { Actor } from "./Actor";
import { Area } from "./Area";
import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";
import { AREAS } from "./consts/gameAreas";

export class Scene {
  boardHeight: number;
  appNode: HTMLDivElement;
  static RATIO: number = 7 / 5;
  static areas = AREAS;

  constructor(boardHeight: number, appNode: HTMLDivElement) {
    this.appNode = appNode;
    this.boardHeight = boardHeight;
  }
  
  static getLanesTotal(): number {
    return Scene.areas.reduce((p, c) => p + c.lanes, 0);
  }

  getBoardWidth(): number {
    return this.boardHeight * Scene.RATIO;
  }

  getLaneHeight(): number {
    return this.boardHeight / Scene.getLanesTotal();
  }

  createScene(): void {
    this.appNode.style.width = Utils.convertToUnit(this.getBoardWidth(), 'rem');
    this.appNode.style.height = Utils.convertToUnit(this.boardHeight, 'rem');
    this.#addAreas();
    this.#addCars();
  }

  #addAreas(): void {
    Scene.areas.map((area) => {
      new Area(this.appNode, area.lanes * this.getLaneHeight(), area.bgcolor, area.name).appendArea();
    })
  }

  #addCars(): void {
    const road: HTMLDivElement = document.querySelector(`.${cssRootId}-road`)!;
    // const makeLane = (carsAmount: number, distance: number, roadLane: number, spritesRow: number)  => {
    //   return [...Array(carsAmount).keys()].map((num) => {
    //     new Actor(num * this.getBoardWidth() / distance, roadLane, this.getLaneHeight(), this.getLaneHeight(), num, spritesRow, road);
    //   });
    // };
    // makeLane(3, 3.5, this.getLaneHeight(),2);


    // [...Array(4).keys()].map((num) => {
    //   new Actor(num * this.getBoardWidth() / 3.2, 0, this.getLaneHeight(), this.getLaneHeight(), num, 1, road, 'car').init();
    // })
    // new Actor(100, this.getLaneHeight() * 2, this.getLaneHeight(), this.getLaneHeight(), 1, 1, document.querySelector(`.${cssRootId}-road`)!, 'car').init();
    // console.log(document.querySelector(`.${cssRootId}-top`)?.getBoundingClientRect());

  }
}