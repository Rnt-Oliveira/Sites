var valor = "";
var numeroCaracteres = "";

function select1() {

  valor1 = document.getElementById('1250').innerText;

  var valor = valor1;

  document.getElementById('change').innerHTML = valor;

}
//-----------------------------------------------------
function select2() {

  valor2 = document.getElementById('1400').innerText;

  var valor = valor2;

  document.getElementById('change').innerHTML = valor;

}
//-----------------------------------------------------
function select3() {

  valor3 = document.getElementById('1800').innerText;

  var valor = valor3;

  document.getElementById('change').innerHTML = valor;

}
//-----------------------------------------------------
function select4() {

  valor4 = document.getElementById('2000').innerText;

  var valor = valor4;

  document.getElementById('change').innerHTML = valor;

}
//-----------------------------------------------------
function select5() {

  valor5 = document.getElementById('2100').innerText;

  var valor = valor5;

  document.getElementById('change').innerHTML = valor;

}
//-----------------------------------------------------

function calcular() {
  valor = document.getElementById('change').innerHTML
  numeroCaracteres = document.getElementById('numeroCaracteres').value;

  var lauda = (numeroCaracteres / valor);
  
  laudas = lauda.toFixed(2);
  laudas = laudas.replace(".",",");

  document.getElementById('laudas').innerHTML = laudas;
}