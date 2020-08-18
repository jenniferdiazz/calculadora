var nombre = "alejandro";
var apellido = "bonilla";
var edad = 30;
var hobby = "musica";
//alert("nombre: " + nombre +" apellido: "+ apellido +" edad: "+ edad + " hobby: "+ hobby);
console.log("nombre: " + nombre +" apellido: "+ apellido +" edad: "+ edad + " hobby: "+ hobby);
/*Tipos de datos en js
  10 (tipo numero) ->number
  102 (tipo numero) ->number
  10.3 (tipo decimal) ->float
  true (tipo verdad) -> boolean
  false (tipo verdad) ->boolean
  "Alejandro Bonilla" (tipo cadena caracteres) ->tipo string
  'Jason Martin' (tipo cadena caracteres) ->tipo string
  " i'm , you're , "
  undefined 
  
  if(condicion){
    si es verdad trabajo aca
  }
  else{
    si no es verdad trabajo aca.
  }
*/
var suma = null;
var number = "1";
var decimal = 10.3;
var deporte = "futbol";
// console.log(typeof suma);
// console.log(typeof number);
// console.log(typeof decimal);
// console.log(typeof deporte);
console.log("resultado type of");
console.log(typeof number === "number");

if(typeof number === "number"){
  console.log("soy identico");
}
else{
  console.log("No soy identico");
}

var largo_deporte = deporte.length;
alert(largo_deporte);
if(deporte.length >5){
  alert("cadena demasiado larga");
}
else{
  alert("else");
}

var nota1 = 10;
var nota2 =8;
var nota3 = 9;
var alumno ="Diego";
var resultado = ((nota1 + nota2 +nota3)/3 );
console.log("Alumno: " +alumno + " promedio: " +resultado);

function promedio(nombre, note1, note2, note3){
  var resultado = ((note1 + note2 +note3) / 3 );

  return {
    alumno: nombre,
    promedio: resultado,
  }
}

console.log(promedio("Juan",7,9,8));
console.log(promedio("Anita",10,9,10));
console.log(promedio("Roberto",6,9,7));
console.log(promedio("Miguel",5,6,10));

var promedioAlumno = promedio("Juan",7,9,8);

console.log("Separando valores del objeto");
console.log(promedioAlumno.alumno);
console.log(promedioAlumno.promedio);

const PI = 3.1416;

const IVA = 0.19;

var precio_neto = 400;
var calculo_iva = (400 * IVA);
console.log("resulta iva: " + calculo_iva);


