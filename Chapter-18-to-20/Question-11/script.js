let A = [24, 53, 78, 91, 12];
let largestNum = 0;
let smallestNum = A[0];

for (let i = 0; i < A.length; i++) {
    if (largestNum <= A[i]) {
        largestNum = A[i];
    }
}

for (let i = 0; i < A.length; i++) {
    if (smallestNum >= A[i]) {
        smallestNum = A[i];
    }
}

document.write(`Array items: ${A} <br />`);
document.write(`The smallest number is ${smallestNum} <br/>`);
document.write(`The largest number is ${largestNum}`);