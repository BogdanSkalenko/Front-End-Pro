function getOperand(){
  let validOperand = prompt('Введите число');
  if(!validate(validOperand)){
    alert('Неверное значение. Попробуйте еще');
    return getOperand();
  } 
  return validOperand;
}

function getAction(){
  validAction = prompt('Введите действие');
   if(validAction === '+' || validAction === '/' || validAction === '*' || validAction === '-'){
}else{
  alert('Неверное значение. Попробуйте еще');
  return getAction();
  }
   return validAction;
  }

  function calculate(operandA,operandB,action){
      switch(action){
      case "+" : result = (+operandA + +operandB); break;    
      case "-" : result = (operandA - operandB); break;
      case "*" : result = (operandA * operandB); break;
      case "/" : result = (operandA / operandB);
      if(operandA == 0 || operandB == 0){
        alert('На 0 делить нельзя');
      }
      break;
      default  : ("Type is invalid!");
    }  
  }
 
function validate(value){
  return !(isNaN(value) || value === '' || value === null);
}


const operandA = getOperand();
const operandB = getOperand();
const action = getAction();
const resutl = calculate(operandA,operandB,action);

alert("Результат " + result);

  





  




