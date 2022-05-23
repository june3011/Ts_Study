// function superPrint<T>(a: T[]){
//     return a[0];
// }
type SuperPrint = <T, M>(arr: T[], b: M) => T;
//   (arr: number[]): void;
//   (arr: boolean[]): void;
//   (arr: string[]): void;
//   (arr: number | boolean[]): void;
const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, 2, true, "hello"], []);

c.toUpperCase();

console.log(c.toUpperCase());
