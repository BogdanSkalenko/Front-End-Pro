const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactAgeInput = document.getElementById('ageInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;
const deleteContactBtn = document.getElementsByClassName('deleteContactBtn');

addContactBtn.addEventListener('click', onAddContactBtnClick);
contactsList.addEventListener('click', onDeleteContactList);

function onAddContactBtnClick(){
    submitContact();
}

function submitContact(){
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        age: contactAgeInput.value,
    }
    addContact(contact);
    resetContactForm();
}

function addContact(contact){
    const contactTr = document.createElement('tr');
    
    contactTr.innerHTML = contactTemplate
                .replace('{{name}}', contact.name)
                .replace('{{phone}}', contact.phone)
                .replace('{{age}}', contact.age || '-');

    contactsList.appendChild(contactTr);
}

function resetContactForm(){
    contactNameInput.value = '';
    contactPhoneInput.value = '';
    contactAgeInput.value = '';
}



function onDeleteContactList(event){
    if(event.target.hasAttribute('delete-contact-btn'))
        deleteContact(event.target);   
}

function deleteContact(whichContactDelete){
    whichContactDelete.parentElement.parentElement.remove();
}
