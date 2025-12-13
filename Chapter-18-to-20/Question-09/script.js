let A = [24, 53, 78, 91, 12]
let largestNum = A[0];

for (let i = 0; i < A.length; i++) {
    if (largestNum <= A[i]) {
        largestNum = A[i];
    }
}

document.write(`Array items: ${A} <br/>`);
document.write(`The largest number is ${largestNum}`);