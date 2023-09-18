let testion = [
    ["23 / 2 = 11.5 ", true],
    ["105 * 3 = 125 ", false],
    ["45 ÷ 5 = 9 ", true],
    ["5 x 8 = 40 ", true],
    ["27 - 14 = 12  ", false],
    ["18 + 9 = 25 ", false],
    ["36 ÷ 4 = 9.5 ", false],
    ["7 x 6 = 42 ", true],
    ["16 - 8 = 8 ", true],
    ["1/4 + 2/3 = 11/12 ", true],
    ["144 / 12 = 11 ", false],
    ["27 * 38 = 1,026 ", true],
    ["714 - 368 = 346 ", true],
    ["63 ÷ 7 = 9 ", true],
    ["5 + 3 * 2 = 16 ", false],
    ["3/4 + 1/2 = 5/4 ", true],
    ["7/8 - 5/6 = 11/24 ", true],
    ["3.2 * 4.5 = 14.6 ", false],
    ["15.6 ÷ 3 = 5.2 ", true],
    ["2.7 * 6.5 = 17.55 ", false],
  ];
  
  let userPoints = 0;
  let testAmount = testion.length;
  
  for (let i = 0; i < testAmount; i++) {
    let question = testion[i][0];
    let correctAn = testion[i][1];
    let user = confirm("(" + (i + 1) + "/" + testAmount + ")" + " -- " + question);
    if (user === correctAn) {
      userPoints++;
    //   alert(`You are right - score is: ${userPoints})`);
    } else {
    //   alert(`You missed this one - score is: ${userPoints}(`);
    }
  }
  
  let procentage = (userPoints / testAmount) * 100;
//   console.log( 'Youre Grade in procents are:' ,  procentage + "%" );

  if(procentage >= 90){
    alert(`You have ${procentage}% of correct answers. \nGrade is: 5`)
  }else if(procentage >= 70){
    alert(`You have ${procentage}% of correct answers. \nGrade is: 4`)
  }else if(procentage >= 60){
    alert(`You have ${procentage}% of correct answers. \nGrade is: 3`)
  }else{
    alert(`You have ${procentage}% of correct answers. \nGrade is: Unsatisfactory `)

  }
  

// alert( ) + '% of answers was correct. \nYoure rate is:' , 