function tipo_de_sandwich(sb, p, q, t, l, c, ma, mo) {
    let precio_sandwich_base;
    let precio_pan;
    let precio_adicional;
    switch (sb) {
        case "pollo":
            precio_sandwich_base = 150;
            break;
        case "carne":
            precio_sandwich_base = 200;
            break;
        case "vegetariano":
            precio_sandwich_base = 100;
            break;
    }
    switch (p) {
        case "blanco":
            precio_pan = 50;
            break;
        case "negro":
            precio_pan = 60;
            break;
        case "s/gluten":
            precio_pan = 75;
            break;
    }
    if (q===true){
        precio_adicional=20;
    }
    if (t===true){
        precio_adicional=15+precio_adicional;
    }
    if (l===true){
        precio_adicional=10+precio_adicional;
    }
    if (c===true){
        precio_adicional=15+precio_adicional;
    }
    if (ma===true){
        precio_adicional=5+precio_adicional;
    }
    if (mo===true){
        precio_adicional=5+precio_adicional;
    }
    return precio_sandwich_base+precio_pan+precio_adicional;
}
console.log(tipo_de_sandwich("carne", "blanco", true, false, true, false, true, false));