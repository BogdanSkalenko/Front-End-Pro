const URL = 'http://fep-app.herokuapp.com/api/contacts';

const addContactBtn = document.getElementById('addContactBtn');
const contactList = document.getElementById('contactList');
const contactNameInput = document.getElementById('nameInput');
const contactSurnameInput = document.getElementById('surnameInput');
const contactEmailInput = document.getElementById('emailInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

let contactData = [];

init();

function init() {
    getContacts();

    addContactBtn.addEventListener('click', onAddButtonClick);
    contactList.addEventListener('click', onContactClick);
    contactList.addEventListener('click', onDeleteButtonClick);
}
//Обработчик добавления контактов
function onAddButtonClick() {
    sendContact();
}

function sendContact() {
    const contact = {
        id: '', //id для отправки правильной структуры обьекта запроса
        name: contactNameInput.value,
        surname: contactSurnameInput.value,
        email: contactEmailInput.value,
        phone: contactPhoneInput.value,
        is_active: true
    }
    console.log(contact);
    addContactInServer(contact).then(getContacts);
    getDefalautContactForm();
}

function addContactInServer(contact) {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
}


function getContacts() {
    // fetch возращает промис, в который при резолве передает обьект responseObj
    // у этого responseObj есть метод json(), 
    // он в свою очередь тоже возвращает промис, в который при резолве передает данные
    // Эти данные мы передаем в renderContacts 
    fetch(URL).then((responseObj) => responseObj.json())
              .then((responseObj) => renderContacts(responseObj));
}

function renderContacts(contacts) {

    contactList.innerHTML = contacts.map(
        (elem) => {
            return contactTemplate.replace('{{id}}', elem.id)
                .replace('{{name}}', elem.name)
                .replace('{{surname}}', elem.surname)
                .replace('{{email}}', elem.email)
                .replace('{{phone}}', elem.phone)
        }).join('\n');

    contactData = contacts;
}

function getDefalautContactForm() {
    contactNameInput.value = '';
    contactSurnameInput.value = '';
    contactEmailInput.value = '';
    contactPhoneInput.value = '';
}

//Обработчик переключения состояния
function onContactClick(e) {
    changeState(e.target.parentElement.children[0].textContent);
}

function changeState(id) {
    contactData.filter((elem) => {
        if (elem.id == id) {
            elem.is_active = !elem.is_active;
            overwriteStateInServer(id, elem).then(getContacts);
        }
    })
}

function overwriteStateInServer(id, elem) {
    return fetch(URL + '/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(elem)
    })
}

//Обработчик кнопки удаления
function onDeleteButtonClick(e) {
    searchContact(e.target);
}

function searchContact(element) {
    if (element.dataset.deleteButton == "delete") {
        let id = element.parentNode.parentNode.children[0].textContent;
        deleteContactInServer(id).then(getContacts);
    }
}

function deleteContactInServer(id) {
    return fetch(URL + '/' + id, {
        method: 'DELETE'
    });
}
