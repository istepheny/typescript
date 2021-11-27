import {m, A, B, C} from "./class";
import {fn, fn3} from "./generic";

enum Gender {
    male,
    female
}

let b: string[]
b = ["1"]
console.log(b)

let c: Array<number>
c = [1]
console.log(c)

let d: [number, string]
d = [1, "2"]
console.log(d)

console.log(Gender.male)
console.log(Gender.female)

console.log(123)

console.log(m)

const obj = {name: "name", age: 18}
obj.age = 33;
console.log(obj)

console.log(Promise)

const obja = new A(1, 2, 3, 4)
console.log(obja)
console.log(A.e)
obja.say()

const objb = new B(1, 2, 3, 4, 5)
objb.say()

const objc = new C(1)
objc.say()

console.log(fn<number>(10))

const a = {a: 1}
console.log(fn3(a))