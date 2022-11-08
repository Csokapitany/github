// let valtozo;

// valtozo = String(555);
// valtozo = String(4+4);
// valtozo = String(true)
// valtozo = String(new Date());
// valtozo = String([1,2,3,4,5,6,7,])
// valtozo = String(5).toString();
// valtozo = String(true).toString(); 
// valtozo = Number('5');
// valtozo = Number(true);
// valtozo = Number(false)
// valtozo = Number(null);
// valtozo = Number('hello');
// valtozo = Number([1,2,3])
// valtozo = parseInt('100.30')
// valtozo = parseFloat('510.44');
// const val1 = String(5);
// const val2 = 15;
// const sum = Number(val1 + val2);




// console.log(sum);
// console.log(typeof sum);
// //console.log(valtozo.length);
// 
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.55);
// val = Math.ceil(2.1);
// val = Math.floor(2.7);
// val = Math.sqrt(64);
// val = Math.abs(-77);
// val = Math.pow(-7,5);
// val = Math.min(-7,5);
// val = Math.random();
// val = parseInt(Math.random()*100 +1);

// console.log(val);
// console.log(typeof val);

// const firstName = 'Kolozsi';
// const lastName = 'Csongor';
// const age = 30;
// const str = "console log valtozo toFixed";

// let val;
// val = firstName + ' ' + lastName +'and ' + age;
// val = lastName.concat(' ', age);
// val= firstName.toLocaleLowerCase();
// val = firstName[2];
// val = firstName.indexOf('l');
// val = firstName.charAt('1');
// val = firstName.charAt(firstName.length - 1);
// val = firstName.substring(2,4);
// val = firstName.slice(-2);
// val = str.split(' ');
// val = str.replace('log', 'Hello' );
// val = str.includes('log')

// console.log(val);


// const Name = 'Kolozsi';
// const job = 'Dataminer';
// const age = 30;
// const city = "London";

// html = `
//     <ul>
//     <li>Name: ${Name}  </li>
//     <li>Age: ${age}  </li>
//     <li>Job: ${job}  </li>
//     <li>City: ${city}  </li>
//     <li> Name: ${age >=30 ? 'Over 30' :'Under 30'}  </li>

//     </ul> `;
//     document.body.innerHTML = html;

// const numbers = [22,43,45,334,221];

// const numbers2 = new Array (22,43,45,334,221);

// const fruits = ['apple', 'orange', 'pears' ];
// let val = numbers; 

// val = numbers[2];
// numbers[2]=122;
// numbers.push(11)
// numbers.unshift(13)
// numbers.pop();
// numbers.shift();
// numbers.splice(1,2);
// numbers.reverse();
// val= fruits.sort();
// val=numbers.sort((x, z) => { return x-z})

// // ; Nem mukodott!!!!!!!!!!!!!
// function under50 (num){
//     return numbers <50;
// }
// val = numbers.find(under50);

// console.log(val);

// 
// const numbers = [21,11,22,44,55,66];
// let val= numbers.sort(function(x, y){
//     return y-x;
// }

// // );
// function under40(n){
//     return n < 40;
// }
let val;
// val = numbers.find(under40);
// console.log(numbers);

const today = new Date();
const birthday = new Date('10-16-1984 16:15:00');

val = (birthday.getMonth()+1);
val = (birthday.getMinutes());
val = today.getTime();
console.log(val);

