document.write("<b>Counting</b> <br/> <br/>");

for (let i = 1; i <= 15; i++) {
  document.write(`${i}, `);
}

document.write("<br/> <br/> <b>Reverse Counting</b> <br/> <br/>");

for (let i = 10; i >= 1; i--) {
  document.write(`${i}, `);
}

document.write("<br/> <br/> <b>Even</b> <br/> <br/>");

for (let i = 0; i <= 20; i += 2) {
  document.write(`${i}, `);
}

document.write("<br/> <br/> <b>Odd</b> <br/> <br/>");

for (let i = 1; i < 20; i += 2) {
  document.write(`${i}, `);
}

document.write("<br/> <br/> <b>Series</b> <br/> <br/>");

for (let i = 2; i <= 20; i += 2) {
  document.write(`${i}k, `);
}