console.log("Hello World!!!");
// Per Fare POPUP
//alert("Con le mani, con le bombe, ciao ciao");

//function visualizzaMessaggio(nome,cognome){
//console.log("Ciao "+nome+" "+cognome);
//}
//visualizzaMessaggio("Juan", "Rossi");

/*function cambiaTesto() {
    document.getElementById("terzoParagrafo").innerHTML = "Ciao";
}*/

//Qui abbiamo i comandi con il POPUP con comando scrittura DINAMICA
function cambiaTesto() {
    let testoVariato = prompt("inserisci il testo da variare");
    document.getElementById("terzoParagrafo").innerHTML = testoVariato;
}

function ripristina() {
    document.getElementById("terzoParagrafo").innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quidem quia iure, adipisci sequi soluta officiis vel sit enim aliquam provident ut nulla mollitia nesciunt voluptas tempora"
}
/*   ----CAMBIO DEI COLORI STANDARD---
function cambiaColore(coloreTesto, coloresfondo) {
    document.getElementById("terzoParagrafo").style.color =coloreTesto;
    document.getElementById("terzoParagrafo").style.background = coloresfondo;
}*/

/*
function cambiaColore(){
    document.getElementById("terzoParagrafo").style.color="red";
}*/


//Qui abbiamo i comandi con il POPUP con comando scrittura DINAMICA
function cambiaColore() {
    let coloreTesto = prompt("Che colore per il testo?");
    let ColoreSfondo = prompt("Che colore per lo sfondo?");
    document.getElementById("terzoParagrafo").style.color = coloreTesto;
    document.getElementById("terzoParagrafo").style.background = ColoreSfondo;
}


let mioSaluto = "";
function visualizzaMessaggio(nome, cognome) {
    let saluto = "Ciao " + nome + " " + cognome;
    return saluto;
}

mioSaluto = visualizzaMessaggio("Mario", "Luigi");
console.log(mioSaluto);

//Qui la funzione per il cambia colore al passaggio del mouse
function mousePassaggio() {
    document.getElementById("secondoParagrafo").innerHTML = "pass U Maus <br> statt attind";
}
function mouseUscita() {
    document.getElementById("secondoParagrafo").innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quidem quia iure, adipisci sequi soluta officiis vel sit enim aliquam provident ut nulla mollitia nesciunt voluptas tempora deleniti fugit recusandae"
}
//Questa funzione crea una pagina al momento, al click del Button
function apriFinestra() {
    document.open("https://www.uniba.it", "","noopener=true");
}
/*
{
    document.open();
    document.write("<header>");
    document.write("<h1>Hello!!</h1><p>CIAO</p>");
     document.write("</header>");
    document.write("<p<>Secondo Paragrafo</p>");
    document.write("<p<>Secondo Paragrafo</p>");
    document.write("<p<>Secondo Paragrafo</p>");
    document.write("<p<>Secondo Paragrafo</p>");
    document.close();
}
*/