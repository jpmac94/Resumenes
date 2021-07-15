console.log(puedeSubir(1.30, false));
function puedeSubir(altura, compania) {
    if (altura >= 1.40 && altura < 2.00) {
        return true;
    } else if (altura < 1.40 && altura > 1.20 && compania === true) {
        return true;
    } else {
        return false;
    }
}
