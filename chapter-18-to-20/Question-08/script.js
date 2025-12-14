let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
    if (!found) {
        if (item == A[i]){
            document.write(`${item} is <b>available</b> at index ${i} in our bakery`);
            found = true;
        }
    }
}

if (found == false){
    document.write(`We are sorry. ${item} is <b>not available</b> in our bakery`);
}