const formValidationConfig = {
  formSelector: '.form',
  inputSelector: '.popup__form',
  submitButtonSelector: '.popup__btn-save',
  activeErrorClass: 'popup__form_type_error',
  buttonDisabledClass: 'popup__btn-save_disabled', 
}

const cardTemplateConfig = {
  templateSelector: '#template',
  cardSelector: '.element',
  cardImageSelector: '.element__img',
  cardNameSelector: '.element__description',
  deleteButtonSelector: '.element__delete-button',
  likeButtonSelector: '.element__like-button',
  counterLikeSelector: '.element__like-counter',
  likeActiveClass: 'element__like-button_active',
}

const zoomImg = document.querySelector('.popup__zoomCont-image')
const zoomHeader = document.querySelector('.popup__zoomCont-header')
const imageBtn = document.querySelector('.popup_type_zoom-image')

export { formValidationConfig, cardTemplateConfig, zoomImg, zoomHeader, imageBtn }