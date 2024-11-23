import { Actor } from "./Actor";

export class Lane {
  actorAmount: number;
  // distance: number[]; // distance from actor or left egde in units (1 unit = player width)
  coordY: number; // area Y whole lane coordinates
  area: HTMLAreaElement;

  constructor (actorAmount: number, /*distance: number[],*/ coordY: number, area: HTMLAreaElement) {
    this.actorAmount = actorAmount;
    //this.distance = distance;
    this.coordY = coordY;
    this.area = area;
  }

  init(): void {
    const row: HTMLParagraphElement = document.createElement('p');

    for (let i = 0; i < this.actorAmount; i++) {
      //const actor = new Actor(0, 0)
    }
  }
}