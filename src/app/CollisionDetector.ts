interface CollisionOptions {
  debug?: boolean;
  collisionThreshold?: number;
}

export class CollisionDetector {
  private mainElement: HTMLElement;
  private collidableElements: HTMLElement[] = [];
  private animationFrame?: number;
  private options: CollisionOptions;

  constructor(mainElement: HTMLElement, options: CollisionOptions = {}) {
    this.mainElement = mainElement;
    this.options = {
      debug: options.debug || false,
      collisionThreshold: options.collisionThreshold || 0,
    };
  }

  addCollidableElements(selector: string): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    this.collidableElements = Array.from(elements);
  }

  addCollidableElement(element: HTMLElement): void {
    this.collidableElements.push(element);
  }

  detectCollisions(): void {
    if (!this.mainElement) return;

    const mainRect = this.mainElement.getBoundingClientRect();

    this.collidableElements.forEach((element) => {
      if (element === this.mainElement) return;

      const elementRect = element.getBoundingClientRect();

      if (this.isColliding(mainRect, elementRect)) {
        this.handleCollision(this.mainElement, element);
      }
    });
  }

  private isColliding(rect1: DOMRect, rect2: DOMRect): boolean {
    const threshold = this.options.collisionThreshold || 0;

    return !(
      rect1.right < rect2.left - threshold ||
      rect1.left > rect2.right + threshold ||
      rect1.bottom < rect2.top - threshold ||
      rect1.top > rect2.bottom + threshold
    );
  }

  private handleCollision(
    mainElement: HTMLElement,
    collidedElement: HTMLElement,
  ): void {
    if (this.options.debug) {
      console.log('Kolizja:', mainElement, collidedElement);
    }

    mainElement.classList.add('collision');
  }

  startDetection(): void {
    const detectAndSchedule = () => {
      this.detectCollisions();
      this.animationFrame = requestAnimationFrame(detectAndSchedule);
    };

    detectAndSchedule();
  }

  stopDetection(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
