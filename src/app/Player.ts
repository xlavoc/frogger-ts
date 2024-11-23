import { Actor } from "./Actor";
import { Scene } from "./Scene";
import { Utils } from "./Utils";
import { cssRootId } from "./consts/cssRootId";

export class Player {
	boardHeight = Utils.nodeHeight(cssRootId);
	playerSize = this.boardHeight / Scene.getLanesTotal();
  moveCssClasses = ['up', 'down', 'right', 'left'];

	get player(): Actor {
		const appNode: HTMLDivElement = document.querySelector(`.${cssRootId}`)!;

		return new Actor(
			Utils.nodeWidth(cssRootId) / 2,
			this.boardHeight - this.playerSize * 3,
			this.playerSize,
			this.playerSize,
			0,
			0,
			appNode,
			"player"
		);
	}

	move() {
		const playerNode: HTMLDivElement = document.querySelector(
			`.${cssRootId}-player`
		)!;

		window.addEventListener("keydown", (e) => {
			if (e.key === "ArrowUp") {
        playerNode.classList.remove(...this.moveCssClasses);
        playerNode.classList.add('up');
				playerNode.style.top = Utils.convertToUnit(
					Utils.unitToNum(playerNode.style.top) - this.playerSize,
					"rem"
				);
			}
      if (e.key === 'ArrowDown') {
        playerNode.classList.remove(...this.moveCssClasses);
        playerNode.classList.add('down');
        playerNode.style.top = Utils.convertToUnit(
					Utils.unitToNum(playerNode.style.top) + this.playerSize,
					"rem"
				);
      }
      if (e.key === 'ArrowRight') {
        playerNode.classList.remove(...this.moveCssClasses);
        playerNode.classList.add('right');
        playerNode.style.left = Utils.convertToUnit(
					Utils.unitToNum(playerNode.style.left) + this.playerSize,
					"rem"
				);
      }
      if (e.key === 'ArrowLeft') {
        playerNode.classList.remove(...this.moveCssClasses);
        playerNode.classList.add('left');
        playerNode.style.left = Utils.convertToUnit(
					Utils.unitToNum(playerNode.style.left) - this.playerSize,
					"rem"
				);
      }
		});
	}

	init() {
		this.player.init();
		this.move();
	}
}
