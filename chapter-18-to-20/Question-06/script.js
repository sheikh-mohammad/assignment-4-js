let numOfItems = Number(prompt("Enter number of items: "));

let items = [];

for (let i = 0; i < numOfItems; i++) {
  items.push(prompt(`Enter value for index ${i}`));
}

document.write(`Number of items: ${numOfItems} <br/>`);
document.write(`Items: <br/><br/>`);

for (let i = 0; i < items.length; i++) {
  document.write(`${items[i]} <br/>`);
}