function getNumber() {
  let numberCheck = prompt('Введите число');
  if (!validate(numberCheck)) {
    alert('Неверное значение. Попробуйте еще');
    return getNumber();
  }
  return numberCheck;
}

function validate(value) {
  return !(isNaN(value) || value === '' || value === null);
}

function even(enteredNumber) {
  let count = 0;
  for (let i = 0; i < enteredNumber.length; i++) {
    if (enteredNumber[i] % 2 == 0) 
    count++;
  }
  alert('количество четных цифр = ' + count + ' :)');
}


const enteredNumber = getNumber();
const evenCheck = even(enteredNumber);
console.log("Вы ввели " + enteredNumber);




function getRandomInt(min, max) {
  let randNumber = Math.floor(Math.random() * (max - min)) + min;
  let randNumber2 = Math.floor(Math.random() * (max - min)) + min;34
  return(Math.max(randNumber,randNumber2));
}
const randomNumber = getRandomInt(1000, 2000);
alert('Рандомное число из 2-х в диапазоне 1000-2000 = ' + randomNumber);