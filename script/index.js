let buttonEditor = document.querySelector(".profile__edit-button");
let modalWindow = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close")
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_description");
let profileName = document.querySelector(".profile__name");
let profileDesk = document.querySelector(".profile__description");

function openModal(){
    modalWindow.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDesk.textContent;
}


function closeModal(){
    modalWindow.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDesk.textContent = jobInput.value;
    closeModal();
}

buttonEditor.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
formElement.addEventListener('submit', formSubmitHandler);
