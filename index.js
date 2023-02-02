let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__btn-close');

function handleToggleBottomClick () {
    popup.classList.toggle('popup_opened');
}

function handleOverlayClick (Event) {
    if (Event.target === Event.currentTarget) {
        popup.classList.remove('popup_opened');
    }
}

editButton.addEventListener('click', handleToggleBottomClick);
closeButton.addEventListener('click', handleToggleBottomClick);
popup.addEventListener('click', handleOverlayClick);


const formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__form-name');
let aboutInput = document.querySelector('.popup__form-about');

function handleFormSubmit (Event) {
    Event.preventDefault();
    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description');
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);