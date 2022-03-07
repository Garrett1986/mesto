const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Переменные:
const btnEditProfile = document.querySelector(".profile__edit-button");//Кнопка открытия формы редактирования профиля
const btnAddCard = document.querySelector(".profile__add-button");//Кнопка отрытия формы добавления данных новой карточки
const btnDeleteCard = document.querySelector(".card__trash");
const btnLikeCard = document.querySelector(".card__like");//Кнопка лайка карточки
const btnOpenPreview = document.querySelector(".card__presentation");//кнопка открытия картинки в большом размере
const modalWindow = document.querySelector(".popup");
const popupTypeProfile = document.querySelector(".popup_type_profile");//Попап редактирования профиля
const popupTypeFrom = document.querySelector(".popup_type_from");//Попап добалвения карточки
const popupTypeFull = document.querySelector(".popup_type_preview");//Попап открытия картинки в большом размере
const btnClosePopup = document.querySelector(".popup__close");//Кнопка закрытия модального окна
const btnCloseTypeProfile = document.querySelector(".popup__close_type_profile");
const btnCloseTypeFrom = document.querySelector(".popup__close_type_from");
const formElement = document.querySelector(".popup__container");
const cardImage = document.querySelector(".card__image");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const titleAddInput = document.querySelector(".popup__input_type_title");
const linkAddInput = document.querySelector(".popup__input_type_link");
const profileName = document.querySelector(".profile__name");
const profileDesk = document.querySelector(".profile__description");
const card = document.querySelector(".card");
const cardTemplate = document.querySelector("#template").content;
const cardsInPage = document.querySelector(".cards__container");


// Прошлись по массиву
initialCards.forEach(function(element){
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__image").src = element.link;
  cardElement.querySelector(".card__image").alt = element.name;
  cardElement.querySelector(".card__title").textContent = element.name;

  cardElement.querySelector(".card__like").addEventListener('click', function(evt){
    evt.target.classList.toggle("card__like_activ");
  });
  cardElement.querySelector(".card__trash").addEventListener('click', function(evt){
    evt.target.closest('.card').remove();

  cardElement.querySelector(".card__image").addEventListener('click', function(){
    modalWindow.classList.add("popup_opened");
  });
  });
 cardsInPage.append(cardElement); //добавляем карточки
});



//Открываем модальное окно. Добавляем класс, отвечающий за визализацию модального окна в документе.
function getOpenModal(modalWindow){
  modalWindow.classList.add("popup_opened");
};
//Закрываем модальное окно. Удаляем класс, отвечающий за визализацию модального окна в документе.
function getCloseModal(modalWindow){
  modalWindow.classList.remove("popup_opened");
};
//Отправляем на сервер результат заполнения формы редактирования профиля.
function getProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDesk.textContent = jobInput.value;
  getCloseModal(popupTypeProfile);
};
//Добавляем данные в разметку модального окна с большой картинкой




//Слушаем и открываем форму реадктирования профиля
btnEditProfile.addEventListener('click', function(){
  getOpenModal(popupTypeProfile);
});
//Слушаем и закрываем форму реадктирования профиля
btnCloseTypeProfile.addEventListener('click', function(){
  getCloseModal(popupTypeProfile);
});
//Слушаем и открываем форму добавления карточки
btnAddCard.addEventListener('click', function(){
getOpenModal(popupTypeFrom);
});
//Слушаем и закрываем форму добавления карточки
btnCloseTypeFrom.addEventListener('click', function(){
  getCloseModal(popupTypeFrom);
});
//Слушаем и открываем попап с большой картинкой

