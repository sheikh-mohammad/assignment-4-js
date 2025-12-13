var scores = [12, 45, 3, 22, 34, 50];
let stopValue = Number(prompt("Enter Stop Value for (12, 45, 3, 22, 34, 50): "))

for (let i = 0; i < scores.length; i++) {
    if (scores[i] != stopValue) {
        document.write(`${scores[i]}, `);
    } else {
        document.write(`${scores[i]}`)
        break;
    }
}