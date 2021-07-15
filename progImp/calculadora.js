function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
console.log("inicio del testeo de operaciones");
console.log("sumar 3 y 5");
console.log(sumar(3, 5));
console.log("restarle 4 a 19");
console.log(restar(19, 4));
console.log("multiplicar 23 y 17");
console.log(multiplicar(23, 17));
console.log("dividir 355 entre 113");
console.log(dividir(355, 113));
console.log("dividir por cero");
console.log(dividir(5, 0));
function cuadradoDeUnNumero(a) {
    return multiplicar(a, a);
}
function promedioDeTresNumeros(a, b, c) {
    return dividir(sumar(sumar(a, b), c), 3);
}
function calcularPorcentaje(a, b) {
    return dividir(multiplicar(b, a), 100);
}
function GeneradorDePorcentaje(a, b) {
    return multiplicar(dividir(a, b), 100);
}

