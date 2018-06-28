console.log("hello world");


var prenom = prompt("Entrez votre prénom :");
var nom = prompt("Entrez votre nom :");
alert("Bonjour," + prenom + " " + nom);


var a = 2;
a = a - 1;
a++;
var b = 8;
b += 2;
var c = a + b * b;
var d = a * b + b;
var e = a * (b + b);
var f = a * b / a;
var g = b / a * a;


var prixHT = Number(prompt("Entrez le prix HT :"));
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);
alert("le prix TTC est de " + prixTTC + "euros");


var tempCelcius = Number(prompt("Entrez les degrées Celcius :"));
var tempFarheineit = tempCelcius * 9 / 5 + 32;
alert(tempCelcius + " °C = " + tempFarheineit + " °F");


var nombre1 = 5;
var nombre2 = 3;
nombre1 = nombre1 + nombre2;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;
console.log(nombre1);
console.log(nombre2);

var nombre1 = 5;
var nombre2 = 3;
var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;
console.log(nombre1);
console.log(nombre2);


var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
	console.log(nombre + " est positif");
}
else {
	console.log(nombre + " est négatif ou nul");
}


var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
	console.log(nombre + " est positif");
} else {
	if (nombre < 0) {
		console.log(nombre + " est negatif");
	} else {
		console.log(nombre + " est nul")
	}
}


var jour = prompt("Entrez un jour de la semaine :");
if (jour === "lundi") {
  console.log("demain, nous serons mardi");
}else if (jour === "mardi") {
  console.log("demain, nous serons mercredi");
}else if (jour === "mercredi") {
  console.log("demain, nous serons jeudi");
}else if (jour === "jeudi") {
  console.log("demain, nous serons vendredi");
}else if (jour === "vendredi") {
  console.log("demain, nous serons samedi");
}else if (jour === "samedi") {
  console.log("demain, nous serons dimanche");
}else if (jour === "dimanche") {
  console.log ("demain, nous serons lundi");
}else {
  console.log ("jour non reconnu !")
}