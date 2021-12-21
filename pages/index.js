let buttonEditor = document.querySelector(".profile__edit-button");//определили кнопку редактирования
let modalWindow = document.querySelector(".popup");//определили окно, которому будем добавлять класс
let closeButton = document.querySelector(".popup__close")//определяем кнопку закрытия

function openModal(){
    modalWindow.classList.add("popup_opened");
}
function closeModal(){
    modalWindow.classList.remove("popup_opened");
}
buttonEditor.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

//let saveBtn = document.querySelector(".popup__save-result");
// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-description");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    let redactName = nameInput.value;
    let redactJob = jobInput.value; //Получите значение полей jobInput и nameInput из свойства value

    let profileName = document.querySelector(".profile__name");// Выберите элементы, куда должны быть вставлены значения полей
    let profileDesk = document.querySelector(".profile__description");
    
    profileName.textContent = redactName;
    profileDesk.textContent = redactJob;// Вставьте новые значения с помощью textContent
    closeModal();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
