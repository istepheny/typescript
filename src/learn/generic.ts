export function fn<T>(a: T): T {
    return a
}

export function fn2<T1, T2>(a: T1, b: T2) {

}

interface Inter {
    a: number
}

export function fn3<T extends Inter>(a: T): number {
    return a.a
}