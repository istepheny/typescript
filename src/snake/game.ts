import {snake, Snake} from "./snake";
import {food, Food} from "./food";
import {scorePanel, ScorePanel} from "./score-panel";
import {stage} from "./stage";
import {up, down, left, right,} from "./direction";

export class Game {
    private snake: Snake
    private food: Food
    private scorePanel: ScorePanel
    private direction: string = ''
    private isGameOver: boolean = false

    constructor(stage: HTMLElement, snake: Snake, food: Food, scorePanel: ScorePanel) {
        this.snake = snake;
        this.food = food;
        this.scorePanel = scorePanel;
    }

    start() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    private run() {
        const moved = this.snake.move(this.direction);

        if (!moved) {
            this.gameOver()
        }

        if (this.isSnakeEatFood()) {
            this.scorePanel.addScore()
            this.snake.addBody()
            this.food.move()
        }

        !this.isGameOver && setTimeout(this.run.bind(this), this.speed())
    }

    private speed(): number {
        return 300 - (this.scorePanel.level - 1) * 50
    }


    private keydownHandler(e: KeyboardEvent) {
        if (this.isTurnAround(e.key)) {
            return
        }
        this.direction = e.key
    }

    private isSnakeEatFood(): boolean {
        return this.snake.x === this.food.x && this.snake.y === this.food.y
    }

    private gameOver() {
        this.isGameOver = true
        alert('game over!')
    }

    private isTurnAround(newDirection: string): boolean {
        if (this.snake.length === 0) {
            return false
        }
        switch (newDirection) {
            case up:
                return this.direction === down
            case down:
                return this.direction === up
            case left:
                return this.direction === right
            case right:
                return this.direction === left
        }
        return true
    }
}

export const game = new Game(stage, snake, food, scorePanel)