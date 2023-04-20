import './index.css'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import { initialCards, cardTemplateConfig, formValidationConfig } from '../utils/constants.js'

const cardsContainer = document.querySelector('.elements__grid')

const formEdit = document.forms['form_edit']
const formAdd = document.forms['form_add']

const bottonEdit = document.querySelector('.profile__edit-button')
const popupEditProfile = document.querySelector('.popup_type_edit-user')
const bottonAdd = document.querySelector('.profile__add-button')
const popupAddCard = document.querySelector('.popup_type_add-card')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

const inputProfileName = document.querySelector('.popup__form_type_name')
const inputProfileDescription = document.querySelector('.popup__form_type_about')
const inputCardName = document.querySelector('.popup__form_type_place')
const inputCardLink = document.querySelector('.popup__form_type_place-link')

const popupList = document.querySelectorAll('.popup');

//функция ОТКРЫТИЯ модальных окон
const openModal = (popup) => {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape)
}

//функция отрисовки карточки методом prepend()
const renderCard = (dataCard) => {
  const card = new Card(dataCard, cardTemplateConfig.templateSelector, openModal)
  cardsContainer.prepend(card.generateCard(dataCard))
}

//итерация каждого элемента массива
// initialCards.forEach((dataCard) => {
//   renderCard(dataCard)
// })
initialCards.forEach(renderCard)

// function resetForms() {
//   formList.forEach(form => form.reset())
// }

const formValidatorForEditForm = new FormValidator(formValidationConfig, formEdit)
formValidatorForEditForm.enableValidation()

const formValidatorForAddForm = new FormValidator(formValidationConfig, formAdd)
formValidatorForAddForm.enableValidation()

//слушатели 'click' для modal open
bottonEdit.addEventListener('click', () => {
  //resetForms()
  formEdit.reset()
  inputProfileName.value = profileName.textContent
  inputProfileDescription.value = profileDescription.textContent
  openModal(popupEditProfile)

  formValidatorForEditForm.resetValidation()
})


bottonAdd.addEventListener('click', () => {
  //resetForms()
  formAdd.reset()
  openModal(popupAddCard)

  formValidatorForAddForm.resetValidation()
})

//функция ЗАКРЫТИЯ модальных окон
const closeModal = (popup) => {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape)
}

popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeModal(popup)
    }
    else if (evt.target.classList.contains('popup__btn-close')) {
      closeModal(popup)
    }
  })
})

//функция-обработчик 'submit' для editUser
const handleSubmitEditUser = (evt) => {
  evt.preventDefault()
  profileName.textContent = inputProfileName.value
  profileDescription.textContent = inputProfileDescription.value

  closeModal(popupEditProfile)
}

//слушатель 'submit' для editUser
formEdit.addEventListener('submit', handleSubmitEditUser);

//функция-обработчик 'submit' для addCard
const handleSubmitAddCard = (evt) => {
  evt.preventDefault()
  renderCard({name: inputCardName.value, link: inputCardLink.value})
  evt.target.reset()

  closeModal(popupAddCard)
}

//слушатель 'submit' для addCard
formAdd.addEventListener('submit', handleSubmitAddCard)

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedModal = document.querySelector('.popup_opened')
    closeModal(openedModal)
  }
}