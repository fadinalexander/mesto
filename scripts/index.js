const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__btn-close');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__form_type_name');
const aboutInput = popup.querySelector('.popup__form_type_about');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function handleToggleBottomClick () {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened') === true) {
        nameInput.value = profileName.textContent;
        aboutInput.value = profileDescription.textContent;
    } else {
        
    }
}

function handleFormSubmit (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
    handleToggleBottomClick ();
}

editButton.addEventListener('click', handleToggleBottomClick);
closeButton.addEventListener('click', handleToggleBottomClick);
formElement.addEventListener('submit', handleFormSubmit);