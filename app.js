// (function (){
//     alert("Koszi Pici")
// })();
const karakter = {
    charName: "getElementById.charName",
    Kealap: "getElementById.KezdoAlap"
    
 
}
console.log (karakter);

let valtozo = "Szoveg Ezt irdki";
let dice6 = 6
let n=0
function K6 (roll) {
 roll = (Math.random * dice6)+1;

console.log (roll);

};
function D6() {
  let K=parseInt(document.getElementById("k"))

for (let n=0, n<dice6, n++)
{
   sum += parseInt(Math.floor(Math.random() * 999999) % i + 1);
     }
  
  eredmeny = (Math.random)+1
  alert (eredmeny)

};

// function Dobas() {
//   var k = parseInt(document.getElementById("k").value.substr(1));
//   var darab = parseInt(document.getElementById("darab").value);
//   darab = darab || 1;
//   var elojel = document.getElementById("elojel").value;
//   var bonusz = parseInt(document.getElementById("bonusz").value);
//   bonusz = bonusz || 0;
//   var elozo = document.getElementById("elozo").value;
//   var sum = 0;
  
//   // Kockadobások kiszámítása
//   for(var i = 0; i<darab; i++) {
//       sum += parseInt(Math.floor(Math.random() * 999999) % k + 1);
//   }
  
//   // Megfelelő bónusz hozzáadása
//   if(elojel == "+")
//       sum += parseInt(bonusz);
//   else
//       sum -= parseInt(bonusz);
      
//   document.getElementById("eredm").innerHTML = sum;
//   document.getElementById("elozo").innerHTML = darab + "k" + k + " " + ((bonusz == 0) ? "" : (elojel + " " + bonusz)) + " = <b>" + sum + "</b><br />" + document.getElementById("elozo").innerHTML;
  
//   var str = document.getElementById("elozo").innerHTML;
//   var sorokSzama = 5;
  
//   if(str.split('br').length-1 >= sorokSzama) {
//       lastIndex = str.lastIndexOf("br");
//       document.getElementById("elozo").innerHTML = str.substr(0, lastIndex-1);
//   }

// function character ();
//    class ()
// ;

function na(valtozo) {
    alert (valtozo)

};
function osszeadas (a,b){
    alert (a+b)
}
function szin (){
  let x = document.getElementById("t")
//   x.style.color ="green";
x.style.display="none";
  console.log(x)
  
}