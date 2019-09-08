const n1 = 100;
const n2 = 50;
let val;

//Operações matematicas
val = n1 + n2;
val = n1 * n2;
val = n1 - n2;
val = n1 / n2;
val = n1 % n2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,3,-2);
val = Math.max(2,33,4,1,55,3,-2);
val = Math.random();

//numero aleatorio entre 0 e 20
val = Math.random() * 20;
//numero aleatorio entre 1 e 20 (inteiros)
val = Math.floor(Math.random() * 20 + 1);

console.log(val);