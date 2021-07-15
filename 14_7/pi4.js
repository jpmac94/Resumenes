function numeroSecreto(numero){
   let aleatorio= Math.random()*9+1;
    aleatorio=Math.round(aleatorio);
   if (numero===aleatorio){
       return "felicitaciones";
   }else{
       return "dale vos podes" +" tu num:"+numero.toString()+" el num:"+aleatorio.toString();
   }
}
console.log(numeroSecreto(3));