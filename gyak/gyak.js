// (function (){
// alert("proba");


// })();

// const szoveg="Koszi Pici"

//    console.log(szoveg);
const karakter = {
    CharName: 'Thorsten',
    Kealap: 33,
    Kebalkez: 31,
    Tealap: 75,
    TEbalkez: 70,
    Vealap: 137,
    Cealap:15,
    SFE: 2,
    Ep: 8,
    Fp: 60,
     }
     karakter.FegyverseTE = 75;

     console.log (karakter);
     console.log (document.querySelector("CharName"));
     let form = document.getElementById('CharName');
    // const form = document.querySelectorAll('form')
    // form.lastElementChild.textContent ='uj szoveg'

    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    let K100 = generateRandomInteger(100);
    //console.log("A tamado dobas eredmenye " + K100);
    let K100bal = generateRandomInteger(100);

    let K10 = generateRandomInteger(10);
    console.log("Kezdmenyezo: "+ karakter.CharName, karakter.Kealap+K10 );
    console.log("Kezdmenyezo bal: "+ karakter.CharName, karakter.Kebalkez+K10 );
   
    let K10bal = (generateRandomInteger(10)+2);

    let K6 = generateRandomInteger(6);
    //console.log("A hatdalu eredmenye " + K6);
     
   
    console.log(K6);

    // 

    let K10meg2 = (generateRandomInteger(10)+2);
   
    if (K100 > 1 && K100 < 100){
       
        console.log("Tamado: "+ karakter.CharName, karakter.Tealap+K100 ) 
        console.log("Tamado bal kezzel: "+ karakter.CharName, karakter.Tealap+K100bal ) 
        console.log("Lancos buzogany Sebzes : "+ karakter.CharName, 3+K6)
    }
      else if (K100 < 100){
         console.log ("Balsiker") 
      }

       else{
        console.log ("DUPLANULLA =3EP 6FP "+karakter.CharName, karakter.Tealap+K100) } 

    console.log("Hosszu kardsebzes: "+ karakter.CharName, +K10meg2 );
    console.log("Hosszu kard balkez sebzes: "+ karakter.CharName, +K10bal )

    const massage = 'Dobjal mar!';
  
    var button = document.getElementById('D6').addEventListener('click', buttonClick);
    function buttonClick()    {
        console.log(generateRandomInteger(6));
       

    };
    var output6 = document.getElementById('#D6');
        output6.innerHTML = `<h3> ${D6} </h3>`;
    var outd6 = document.getElementById('#kiir');
    
      
    
    // const buttonD6 = buttonD6.addEventListener('mouseup', K6)
//  document.getElementById('D6').onclic = function(generateRandomInteger(max));
//     // Thortren dobasi
//     console.log("Kezdmenyezo: "+ karakter.CharName, karakter.Kealap+K10 ) 
//     console.log("Kezdmenyezo: "+ karakter.CharName, karakter.Tealap+K100 ) 
//     console.log("Kezdmenyezo: "+ karakter.CharName, 3+K6 ) 
//  let i = 2
//     for (let i=0; i<10; i++ ){
//         console.log(`The numbers are:${i+1}`);
//     }
//     let is = 2
//     while (is<22){
//         console.log (`The while numbers are:${is-1}`);
//         is++;
//     }
// function na(valtozo) {
//     alert (valtozo)

// };
// function osszeadas (a,b){
//    console.log (a+b)
// }
// // function szin (){
// //   let x = document.getElementById("t")