
let question = [
  {  question: 'Сколько будет 2+2?', 
     answer: 4, 
     type: 'prompt' 
    },

  { question: 'Солнце встает на востоке?', 
    answer: true, 
    type: 'confirm' 
  },

  { question: 'Сколько будет 5 << 2 ?', 
    answer: 20, 
    type: 'prompt'
   }
];

let points = 0;

function askQuestion(question){
  let userAnswer;

  switch(question.type){
    case 'prompt': 
      userAnswer=  prompt(question.question, '');

      if(!validate(userAnswer)){
        alert('Неверное значение. Попробуйте еще');
       return askQuestion(question);
      }
      break;
    case 'confirm': 
      userAnswer = confirm(question.question);
      break;
    default: console.log('Type is invalid');
  }
  return userAnswer == question.answer;
}


function validate(value){
  return !(isNaN(value) 
              || value === '' 
              || value === null);
}

for(let i = 0; i < question.length; i++){ 
  let isAnswerCorrect = askQuestion(question[i])
  points += isAnswerCorrect ? 10 : 1;
}
console.log('Total points', points);