let str = "abcdqwdqwdasdqgrwgvjrn";

let countA = 0;
let countB = 0;

for (let char of str) {
    if (char == 'a') {
        countA++;
    }
    if (char == 'b') {
        countB++;
    }
}

console.log(`Count of a: ${countA}`);
console.log(`Count of b: ${countB}`);
