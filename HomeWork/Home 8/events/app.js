// Событие по клику(button )
function btnClick(event){
    liCreator(event.addLi);
}
// Создание li в списке ul.
function liCreator(){
    let liCreate = document.createElement('li');
    liCreate.textContent = liCounter++;
    ulContainer.appendChild(liCreate);
}
// Удаление li в списке ul
function deleteLi(){
    if(event.altKey){
        ulContainer.removeChild(event.target);
    }
}
function colorChange(event){
    toggleBackground(event.target);
}
function toggleBackground(el){
    el.style.background = el.style.background === 'yellow' ? 'red' : 'yellow';
}

let liCounter = 1;
const ulContainer = document.getElementsByTagName('ul')[0];
const addLi = document.getElementById('button');
const li_color = ulContainer.addEventListener('click' , colorChange);
addLi.addEventListener('click', btnClick);
ulContainer.addEventListener('click', deleteLi)






