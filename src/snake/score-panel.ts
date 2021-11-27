export class ScorePanel {
    private score: number = 0
    private _level: number = 1
    private levelUpStep: number = 10
    private readonly maxLevel: number
    private scoreElement: HTMLElement
    private levelElement: HTMLElement

    constructor(scoreElement: HTMLElement, levelElement: HTMLElement, maxLevel: number = 10,) {
        this.maxLevel = maxLevel
        this.scoreElement = scoreElement;
        this.levelElement = levelElement;
    }

    addScore() {
        const score = ++this.score
        this.scoreElement.innerHTML = score.toString()

        if (this.score % this.levelUpStep == 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this._level == this.maxLevel) {
            return
        }
        const level = ++this._level
        this.levelElement.innerHTML = level.toString()
    }

    get level() {
        return this._level
    }

    speed(): number {
        return (this.level - 1) * 100
    }
}

let scoreElement = document.getElementById('score');
let levelElement = document.getElementById('level');
export const scorePanel = new ScorePanel(scoreElement!, levelElement!)
