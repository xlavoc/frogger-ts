import { Actor } from './Actor';
import { CollisionDetector } from './CollisionDetector';
import { Scene } from './Scene';
import { Utils } from './Utils';
import { cssRootId } from './consts/cssRootId';

export class Player {
  #boardHeight = Utils.nodeHeight(cssRootId);
  #boardWidth = Utils.nodeWidth(cssRootId);
  #playerSize = this.#boardHeight / Scene.getLanesTotal();
  #moveCssClasses = ['up', 'down', 'right', 'left'];
  #playableBottomBorder = this.#boardHeight - this.#playerSize * 2;
  #playableTopBorder = this.#playerSize * 2;

  get startPositionX(): number {
    return this.#boardWidth / 2 - this.#playerSize / 2;
  }

  get player(): Actor {
    const appNode: HTMLDivElement = document.querySelector(`.${cssRootId}`)!;

    return new Actor(
      this.startPositionX,
      this.#playableBottomBorder,
      this.#playerSize,
      this.#playerSize,
      0,
      0,
      appNode,
      'player',
    );
  }

  get playerNode(): HTMLDivElement {
    return document.querySelector(`.${cssRootId}-player`)!;
  }

  #move() {
    const img = this.playerNode.children[0];
    const jumpTime = 200;
    let moving = false;

    const cssClassesHandling = () => {
      this.playerNode.classList.remove(...this.#moveCssClasses);
      img.classList.add('jump');
      moving = true;
    };

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (
        (e.key === 'ArrowUp' || e.key === 'w') &&
        Utils.unitToNum(this.playerNode.style.top) > this.#playableTopBorder &&
        !moving
      ) {
        cssClassesHandling();
        this.playerNode.classList.add('up');
        setTimeout(() => {
          this.playerNode.style.top = Utils.convertToUnit(
            Utils.unitToNum(this.playerNode.style.top) - this.#playerSize,
            'rem',
          );
          img.classList.remove('jump');
          moving = false;
        }, jumpTime);
      }
      if (
        (e.key === 'ArrowDown' || e.key === 's') &&
        Utils.unitToNum(this.playerNode.style.top) <
          this.#playableBottomBorder &&
        !moving
      ) {
        cssClassesHandling();
        this.playerNode.classList.add('down');
        setTimeout(() => {
          this.playerNode.style.top = Utils.convertToUnit(
            Utils.unitToNum(this.playerNode.style.top) + this.#playerSize,
            'rem',
          );
          img.classList.remove('jump');
          moving = false;
        }, jumpTime);
      }
      if (
        (e.key === 'ArrowRight' || e.key === 'd') &&
        Utils.unitToNum(this.playerNode.style.left) <
          this.#boardWidth - this.#playerSize &&
        !moving
      ) {
        cssClassesHandling();
        this.playerNode.classList.add('right');
        setTimeout(() => {
          this.playerNode.style.left = Utils.convertToUnit(
            Utils.unitToNum(this.playerNode.style.left) + this.#playerSize,
            'rem',
          );
          img.classList.remove('jump');
          moving = false;
        }, jumpTime);
      }
      if (
        (e.key === 'ArrowLeft' || e.key === 'a') &&
        Utils.unitToNum(this.playerNode.style.left) > 0 &&
        !moving
      ) {
        cssClassesHandling();
        this.playerNode.classList.add('left');
        setTimeout(() => {
          this.playerNode.style.left = Utils.convertToUnit(
            Utils.unitToNum(this.playerNode.style.left) - this.#playerSize,
            'rem',
          );
          img.classList.remove('jump');
          moving = false;
        }, jumpTime);
      }
    });
  }

  #collide() {
    const collisionDetector = new CollisionDetector(this.playerNode, {
      debug: false,
      collisionThreshold: -5, // Dodatkowy margines kolizji
    });

    collisionDetector.addCollidableElements('.frggr-actor-colliding');
    collisionDetector.startDetection();
  }

  init() {
    this.player.init();
    this.#move();
    this.#collide();
  }
}
