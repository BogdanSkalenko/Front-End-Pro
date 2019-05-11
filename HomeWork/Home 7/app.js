function validate(value){
  return !(isNaN(value) || value === '' || value === null);
}
function getName(){
  let validName = prompt('Введите имя');
  if(validName === "" || validName == parseInt(validName)){
    alert('Вы не ввели имя');
    return getName();
  }
  return validName;
}
function getNumber(){
  let validOperand = prompt('Введите число');
  if(!validate(validOperand) || validOperand > 100){
    alert('Неверное значение. Попробуйте еще');
    return getNumber();
  } 
  return validOperand;
}
function listCreation(userNumber , userName){
 document.getElementsByTagName('h1')[0].innerHTML = userName;
 let ulList = document.createElement('ul');
 
 document.body.appendChild(ulList);
 for(let i = 0; i < userNumber; i++){
   liList = document.createElement('li');
   liList.textContent = [i];
   ulList.appendChild(liList);
 }
}

const userName = getName();
const userNumber = getNumber();
const listEvent = listCreation(userNumber , userName);