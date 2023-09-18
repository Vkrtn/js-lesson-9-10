// tests = [
//     ['1 + 1 = 2', true],
//     ['1 + 2 = 2', false],
//     ['1 + 5 = 2', false],
//     ['2 + 2 = 4', true],
// ]

// let userScore = 0;

// // let ques = tests[0][1];
// // let correctAnsw = tests[0][1];
// // let userAnsw = confirm(ques)
// // console.log(userAnsw);

// let count = tests.length;

// for(i=0; i < count; i++){
//     let quest = tests[i][0];
//     let correctAns = tests[i][1]
//     let userTest = confirm( '('+ (i+1)+ '/' + count + ')'+ ' -- ' + quest);
//     if(userTest === correctAns){
//         userScore++;
//         alert('Score:' + ' ' + userScore);
//     } else{
//         alert('Score:' + ' ' + userScore);
//     }
// }

// alert(`Final score is: ${userScore}`);

let student = JSON;
console.table(student);

// let kolya = {
//     name:'Kolya',
//     age:23,
//     email:['kolya12@gmail.com' , 'nikolay2@gmail.com'],
// }
// console.log(kolya);
// let key = prompt('name , age , email');
// alert(kolya[key])

students = [
  ["Kolya", 20, "kolya@gamil.com", 11, 12, 10],
  ["Olya", 23, "olya@gamil.com", 8, 10, 6],
  ["Vial", 10, "viala@gamil.com", 10, 12, 10],
  ["Nick", 19, "nikitos@gamil.com", 11, 11, 11],
];

let products = [
  {
    name: "Bead",
    count: 5,
    price: 23,
    unit: "pis",
    currency: "USD",
  },
  {
    name: "Wather",
    count: 335,
    price: 3,
    unit: "bot",
    currency: "USD",
  },
];
console.log("______________");


let total = 0;

for (let i = 0; i < products.length; i++) {
  let prod = products[i];
  let sum = prod.count * prod.price;

  console.log(
    prod.name +
      " - " +
      prod.count +
      prod.unit +
      " * " +
      prod.price +
      prod.currency +
      " = " +
      sum +
      prod.currency
  );

  total +=sum

}
console.log('Total pric:' , total+'$');


// HW -- TEST
// 12questions -  12 rate/sistem - with match

