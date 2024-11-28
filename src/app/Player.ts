import { Actor } from "./Actor";
import { Scene } from "./Scene";
import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";

export class Player {
	#boardHeight = Utils.nodeHeight(cssRootId);
	#boardWidth = Utils.nodeWidth(cssRootId);
	#playerSize = this.#boardHeight / Scene.getLanesTotal();
	#moveCssClasses = ["up", "down", "right", "left"];
	#playableBottomBorder = this.#boardHeight - this.#playerSize * 3;
	#playableTopBorder = this.#playerSize * 2;

	get player(): Actor {
		const appNode: HTMLDivElement = document.querySelector(`.${cssRootId}`)!;

		return new Actor(
			this.#boardWidth / 2 - this.#playerSize / 2,
			this.#playableBottomBorder,
			this.#playerSize,
			this.#playerSize,
			0,
			0,
			appNode,
			"player"
		);
	}

	#move() {
		const playerNode: HTMLDivElement = document.querySelector(
			`.${cssRootId}-player`
		)!;
    const img = playerNode.children[0];
    const jumpTime = 200;
    let moving = false;
    
    const cssClassesHandling = () => {
      playerNode.classList.remove(...this.#moveCssClasses);
      img.classList.add('jump');
      moving = true;
    }
    
		window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (
        (e.key === "ArrowUp" || e.key === "w") &&
				Utils.unitToNum(playerNode.style.top) > this.#playableTopBorder && !moving
			) {
        cssClassesHandling();
				playerNode.classList.add("up");
        setTimeout(() => {
          playerNode.style.top = Utils.convertToUnit(
            Utils.unitToNum(playerNode.style.top) - this.#playerSize,
            "rem"
          );
          img.classList.remove("jump");
          moving = false;
        }, jumpTime);
			}
			if (
				(e.key === "ArrowDown" || e.key === "s") &&
				Utils.unitToNum(playerNode.style.top) < this.#playableBottomBorder && !moving
			) {
				cssClassesHandling();
				playerNode.classList.add("down");
        setTimeout(() => {
          playerNode.style.top = Utils.convertToUnit(
            Utils.unitToNum(playerNode.style.top) + this.#playerSize,
            "rem"
          );
          img.classList.remove("jump");
          moving = false;
        }, jumpTime);
			}
			if (
				(e.key === "ArrowRight" || e.key === "d") &&
				Utils.unitToNum(playerNode.style.left) <
					this.#boardWidth - this.#playerSize && !moving
			) {
				cssClassesHandling();
				playerNode.classList.add("right");
        setTimeout(() => {
          playerNode.style.left = Utils.convertToUnit(
            Utils.unitToNum(playerNode.style.left) + this.#playerSize,
            "rem"
          );
          img.classList.remove("jump");
          moving = false;
        }, jumpTime);
			}
			if (
				(e.key === "ArrowLeft" || e.key === "a") &&
				Utils.unitToNum(playerNode.style.left) > 0 && !moving
			) {
				cssClassesHandling();
				playerNode.classList.add("left");
        setTimeout(() => {
          playerNode.style.left = Utils.convertToUnit(
            Utils.unitToNum(playerNode.style.left) - this.#playerSize,
            "rem"
          );
          img.classList.remove("jump");
          moving = false;
        }, jumpTime);
			}
		});
	}

	init() {
		this.player.init();
		this.#move();
	}
}
