let numTable = Number(prompt("Enter a number to print its multiplication table"));

let lengthTable = Number(prompt("Enter length of multiplication table"));

document.write(`Multiplication table of ${numTable} <br/>`);
document.write(`Length ${lengthTable} <br/> <br/>`);

for (let i = 1; i <= lengthTable; i++) {
    document.write(`${numTable} x ${i} = ${numTable * i} <br/>`);
}