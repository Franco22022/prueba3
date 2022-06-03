  /*   Una empresa de llamadas telefonicas, necesita un programa que le calcule el costo
    por llamada. Debe tener en cuenta:
     A Fijo: 0.20 centimos por minuto
     A Claro: 0.40 centimos por minuto
     A Movistar: 0.60 centimos por minuto
     A Entel: 1 sol el minuto */


     alert("BIENVENIDOS A LA CENTRAL TELEFONICA DEL PERU")

     let EMPRESA
     let COSTOS
     let MINUTOS 
     let FIJO
     let CLARO
     let MOVISTAR
     let ENTEL 
     let TOTAL 

     let total=(EMPRESA+COSTOS*MINUTOS*FIJO*CLARO*MOVISTAR*ENTEL==TOTAL)/4;

let Empresa=prompt("Ingrese el operador a la cual desea llamar: ");
let Costo=parseFloat(prompt("Ingrese el costo por minuto de la llamada: "));
let Minutos=parseFloat(prompt("Cuanto minutos desea hablar: "));
let Fijo=0.20;
let Claro=0.40;
let Movistar=0.60;
let Entel=1;
let Total=Costo*Minutos;


if(Fijo=Minutos*0.20){
    document.write(`El operador a la cual desea llamar es: ${Empresa} <br>
    El costo por minuto de la llamada es: S/ ${Costo} centimos <br>
    Cuantos minutos desea hablar: ${Minutos} Minutos <br>
    El monto total a pagar es: S/ ${Total}  nuevos soles <h2> Gracias por su visita,Vuelva
    pronto <h2> `);
}else if(Claro=Minutos*0.40){
    document.write(`El operador a la cual desea llamar es: ${Empresa} <br>
    El costo por minuto de la llamada es: S/ ${Costo} centimos <br>
    Cuantos minutos desea hablar: ${Minutos} Minutos <br>
    El monto total a pagar es: S/ ${Total}  nuevos soles <h2> Gracias por su visita, Vuelva
    pronto <h2> `);
}else if(Movistar=Minutos*0.60){
    document.write(`El operador a la cual desea llamar es: ${Empresa} <br>
    El costo por minuto de la llamada es: S/ ${Costo} centimos <br>
    Cuantos minutos desea hablar: ${Minutos} Minutos <br>
    El monto total a pagar es: S/ ${Total}  nuevos soles <h2> Gracias por su visita, Vuelva 
    pronto <h2>  `);
}else if(Entel=Minutos*1){
    document.write(`El operador a la cual desea llamar es: ${Empresa} <br>
    El costo por minuto de la llamada es: S/ ${Costo} centimos <br>
    Cuantos minutos desea hablar: ${Minutos} Minutos <br>
    El monto total a pagar es: S/ ${Total}  nuevos soles <h2> Gracias por su visita, Vuelva 
    pront <h2> `);
}