//FOR

for (let i = 0; i < 10; i++) {
    console.log('For Example', i);
}

//FOR IN

let val = ['0', '1', '2', '3', '4'];

for (let i in val) {
    document.write(val[i]);
}


//FOR OF

let name = ['Carlos', 'Juan', 'Pedro', 'Alvaro', 'Maria', 'Natalia'];

for (let names of name) {
    console.log(names);

}

//WHILE
let x = 0;

while (x <= 15) {
    document.write(x + "<br>");
    x++;
}

//DO WHILE

let z = 1;

do {

    z++;
    console.log(z);
} while (z <= 8);