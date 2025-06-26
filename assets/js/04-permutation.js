console.log('Salut');
//une 1re façon de faire une permutation (voire fichier permutation html)
//une seconde façon de faire une permutation (Correction de Véra)
let nombre1 = 5;
let nombre2 = 3;

console.log("n1 = " + nombre1);
document.write("<h3>Résultat :<br />n1 = " + nombre1 + "</h3>");
console.log("n2 = " + nombre2);
document.write("<h3>n2 = " + nombre2 + "</h3>");

let vide = nombre1;
nombre1 = nombre2;
nombre2 = vide;

console.log("n1 = " + nombre1);
document.write("<h3>n1 = " + nombre1 + "</h3>");
console.log("n2 = " + nombre2);
document.write("<h3>n2 = " + nombre2 + "</h3>");