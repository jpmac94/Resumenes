function preguntarEdad(edad){
    if (edad < 0) {
        console.log("Error, edad inválida.Ingrese un número válido");
    } else if (edad < 18) {
         console.log("No puede pasar al bar");
    } else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol");
    } else if(edad==21){
        console.log("Felicitaciones por haber llegado a la mayoria de edad, puedes entrar la bar y tomar alcohol");
    } else {
        console.log("puede pasar al bar y tomar alcohol ");
    }
    if(edad%2!==0){
        console.log("Che tenes "+edad+" años ¿Sabías que tu edad es impar?");
    }
}
preguntarEdad(-1)