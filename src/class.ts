export const m = "hello"

interface I {
    a: number

    say(): void
}

export abstract class O implements I {
    a: number

    protected constructor(a: number) {
        this.a = a;
    }

    abstract say(): void
}


export class A extends O {
    a: number
    public b: number
    protected c: number
    private _d: number

    static e: number = 1

    constructor(a: number, b: number, c: number, d: number) {
        super(a);
        this.a = a;
        this.b = b;
        this.c = c;
        this._d = d;
    }

    get d() {
        return this._d
    }

    set d(value: number) {
        this._d = value
    }

    say() {
        console.log('hello a')
    }
}

export class B extends A {
    f: number

    constructor(a: number, b: number, c: number, d: number, f: number) {
        super(a, b, c, d);
        this.f = f;
    }

    say() {
        super.say()
        console.log('hello b')
    }
}

export class C implements I {
    a: number;

    constructor(a: number) {
        this.a = a;
    }

    say(): void {
        console.log('hello c')
    }
}