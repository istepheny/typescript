export class Food {
    private stage: HTMLElement
    private food: HTMLElement

    constructor(stage: HTMLElement, food: HTMLElement) {
        this.stage = stage;
        this.food = food;
    }

    get x(): number {
        return this.food.offsetLeft
    }

    get y(): number {
        return this.food.offsetTop
    }

    move() {
        const maxWidth = this.stage.getBoundingClientRect().width - this.food.getBoundingClientRect().width
        const maxHeight = this.stage.getBoundingClientRect().height - this.food.getBoundingClientRect().height

        const left = Math.round(Math.random() * (maxWidth / 10)) * 10;
        const top = Math.round(Math.random() * (maxHeight / 10)) * 10;

        this.food.style.left = left + 'px'
        this.food.style.top = top + "px"
    }
}

let foodElement = document.getElementById('food');
let stageElement = document.getElementById('stage');
export const food = new Food(stageElement!, foodElement!)