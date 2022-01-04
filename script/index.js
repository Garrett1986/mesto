let buttonEditor = document.querySelector(".profile__edit-button");//определили кнопку редактирования
let modalWindow = document.querySelector(".popup");//определили окно, которому будем добавлять класс
let closeButton = document.querySelector(".popup__close")//определяем кнопку закрытия
// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_description");
let profileName = document.querySelector(".profile__name");// Выберите элементы, куда должны быть вставлены значения полей
let profileDesk = document.querySelector(".profile__description");

function openModal(){
    modalWindow.classList.add("popup_opened");
    //profileName.textContent = nameInput;
    //profileDesk.textContent = jobInput;
}
function closeModal(){
    modalWindow.classList.remove("popup_opened");
}

//let saveBtn = document.querySelector(".popup__save-result");


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    //let redactName = nameInput.value;
    //let redactJob = jobInput.value; //Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameInput.value;
    profileDesk.textContent = jobInput.value;// Вставьте новые значения с помощью textContent
    closeModal();
}
buttonEditor.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
