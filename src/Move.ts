export class Move {
    nodeElement;
    pos: {x: number, y: number} = {x: 0, y: 0};

    constructor (nodeElement: HTMLDivElement, posX: number, posY: number) {
        this.nodeElement = nodeElement;
        this.pos.x = posX;
        this.pos.y = posY;
    }

    handleKeyPress (e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowUp':
                if (this.pos.y > 0) this.pos.x -= 1;
                break;
            case 'ArrowDown':
                this.pos.y += 1;
                console.log(this.pos.y);
                
                break;
        }
    }
}