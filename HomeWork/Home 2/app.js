
// 1-й Вопрос
let questionOne;
let questionPointOne = 0;

while(!Number(questionOne)){
     questionOne = prompt("Сколько будет 2+2","");
    
    if(!Number(questionOne)){
    alert('Введите число!');
    }
    else if(questionOne == 4){
    questionPointOne = 10;
    }
    else{
    questionPointOne = 0;
    }
   
}

// 2-й Вопрос
let questionTwo = confirm('Солнце встает на востоке?');
let questionPointTwo = 0;

if(questionTwo == true){
  questionPointTwo = 10;
}else{
  questionPointTwo = 0;
}


// 3-й Вопрос
let questionThree;
let questionPointThree = 0;


while(!Number(questionThree)){
  questionThree = prompt('5 << 2');

    if(!Number(questionThree)){
    alert('Введите число!');
    }
    else if(questionThree == 20){
    questionPointThree = 10;
    }
    else{
    questionPointThree = 0;
    }
}
let result = questionPointOne + questionPointTwo + questionPointThree;
alert(result);