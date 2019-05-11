let number = prompt('Введите число в грамах');
let gram = number

let centner = gram/1e+05;
console.log('Центнер '+centner);

let kg = gram/1000;
console.log('Килограмм '+kg);

let tons = gram/1e+6;
console.log('Тонн '+tons);



let time = prompt('Введите время в секундах');

let mins = time/60;
let hours = time/3600;
let day = time/86400;
console.log('Дней '+Math.floor(day) + ': ' + 'Часов '+Math.floor(hours) + ': ' + 'Минут ' + ': '+Math.floor(mins));

