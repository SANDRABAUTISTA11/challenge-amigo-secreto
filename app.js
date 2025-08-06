

//pondré una constante porque no pretendo cambiar esos datos

const inputAmigo = document.getElementById('amigo');
const listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById ('resultado');

//funcion para agregar el nombre d emi amigo
function agregarAmigo(){
if(inputAmigo.value == " "){
    alert ('Agrega un nombre')
    }
    listaAmigos.push(inputAmigo.value)
    ulListaAmigos.innerHTML += `<li> ${inputAmigo.value}</li>`;
    
   
}
//funcion para sortear los nombre, no mando a llamar aqui la funcion sortearamigo para que en pantalla no me aparezca undefined, cuando el usuariode click en sortear aparecera el string con el resultado del sorteo 
 function sortearAmigo(){
    const random = Math.floor((Math.random()*listaAmigos.length))
    listaAmigos[random]
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `Tu amigo secreto es : ${listaAmigos[random]}`
    
    


 }




