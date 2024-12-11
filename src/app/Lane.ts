import { Actor } from './Actor';
import { Scene } from './Scene';
import { Utils } from './Utils';
import { cssRootId } from './consts/cssRootId';

type Speed = 'slow' | 'medium' | 'fast';
type DirectionTo = 'left' | 'right';

export class Lane {
  actorAmount: number;
  area: HTMLAreaElement;
  offsetFromLeftEdge: number;
  directionTo: DirectionTo;
  speed: Speed;
  height: number;
  #boardWidth = Utils.nodeWidth(cssRootId);
  #boardHeight = Utils.nodeHeight(cssRootId);
  #playerSize = this.#boardHeight / Scene.getLanesTotal();

  constructor(
    actorAmount: number,
    area: HTMLAreaElement,
    offsetFromLeftEdge?: number,
    directionTo?: DirectionTo,
    speed?: Speed,
    height?: number,
  ) {
    this.actorAmount = actorAmount;
    this.area = area;
    this.offsetFromLeftEdge = offsetFromLeftEdge || 0;
    this.directionTo = directionTo || 'left';
    this.speed = speed || 'slow';
    this.height = height || this.#playerSize;
  }

  init(): void {
    const row: HTMLDivElement = document.createElement('div');
    const distance =
      (this.#boardWidth - this.#playerSize - this.offsetFromLeftEdge) /
      (this.actorAmount - 1);

    for (let i = 0; i < this.actorAmount*2; i++) {
      const actor = new Actor(
        this.offsetFromLeftEdge + distance * i - this.#playerSize,
        0,
        this.#playerSize,
        this.#playerSize,
        0,
        1,
        row,
      );
      actor.init();
    }

    row.style.height = Utils.convertToUnit(this.height, 'rem');
    row.classList.add(`${cssRootId}-lane`);
    if (this.directionTo === 'right') {
      row.classList.add('to-right');
    }
    this.area.appendChild(row);
  }
}
