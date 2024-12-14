import { Area } from './Area';
import { Lane } from './Lane';
import { Utils } from './Utils';
import { cssRootId } from './consts/cssRootId';
import { AREAS } from './consts/gameAreas';

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
      new Area(
        this.appNode,
        area.lanes * this.getLaneHeight(),
        area.bgcolor,
        area.name,
      ).appendArea();
    });
  }

  #addCars(): void {
    const road: HTMLAreaElement = document.querySelector(`.${cssRootId}-road`)!;

    new Lane(3, road, 0, 'left').init();
    new Lane(3, road, 0, 'right').init();
    new Lane(2, road, 0, 'left').init();
  }
}
