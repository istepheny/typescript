import {up, down, left, right,} from "./direction";

export class Snake {
    private stage: HTMLElement
    private snake: HTMLElement
    private readonly _head: HTMLElement
    private bodies: HTMLCollection

    constructor(stage: HTMLElement, snake: HTMLElement, head: HTMLElement, bodies: HTMLCollection) {
        this.stage = stage;
        this.snake = snake;
        this._head = head;
        this.bodies = bodies;
    }

    get length(): number {
        return this.bodies.length - 1
    }

    get x(): number {
        return this._head.offsetLeft
    }

    get y(): number {
        return this._head.offsetTop
    }

    get moveStep(): number {
        return this._head.getBoundingClientRect().width
    }

    set x(x: number) {
        if (this.x == x) {
            return
        }

        this.moveBody()
        this._head.style.left = x + 'px'
    }

    set y(y: number) {
        if (this.y == y) {
            return
        }

        this.moveBody()
        this._head.style.top = y + 'px'
    }

    move(direction: string): boolean {
        const {x, y} = this.moveDryRun(direction)

        if (this.isOutOfBounds(x, y)) {
            return false
        }

        if (this.isHitBody(x, y)) {
            return false
        }

        this.moveHead(x, y);
        return true
    }

    addBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>")
    }

    private moveHead(x: number, y: number) {
        this.x = x
        this.y = y
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let prevX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let prevY = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = prevX + 'px';
            (this.bodies[i] as HTMLElement).style.top = prevY + 'px';
        }
    }

    private moveDryRun(direction: string): { x: number, y: number } {
        let x = this.x
        let y = this.y
        switch (direction) {
            case up:
                y -= this.moveStep
                break
            case down:
                y += this.moveStep
                break
            case left:
                x -= this.moveStep
                break
            case right:
                x += this.moveStep
                break
            default:
                break
        }

        return {x: x, y: y}
    }

    private isOutOfBounds(x: number, y: number): boolean {
        if (x < this.stage.scrollLeft || x >= this.stage.scrollWidth) {
            return true
        }

        if (y < this.stage.scrollTop || y >= this.stage.scrollHeight) {
            return true
        }

        return false
    }

    private isHitBody(x: number, y: number) {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement
            if (x == body.offsetLeft && y === body.offsetTop) {
                return true
            }
        }
        return false;
    }
}

const stageElement = document.getElementById('stage');
const snakeElement = document.getElementById('snake') as HTMLElement
const headElement = document.querySelector('#snake>div') as HTMLElement
const bodiesElement = snakeElement.getElementsByTagName('div')
export const snake = new Snake(stageElement!, snakeElement!, headElement, bodiesElement)